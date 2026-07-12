import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const publicDir = path.resolve('public')
const manifestPath = path.resolve('src/data/optimized-images.json')
const sourceExtensions = new Set(['.jpg', '.jpeg', '.png'])
const losslessNames = new Set([
  'factory-map.png',
  'logo.png',
  'wechat.png',
  'whatapp.jpg',
])

const imageEntries = await fs.readdir(publicDir, { withFileTypes: true })
const sourceImages = imageEntries
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((name) => sourceExtensions.has(path.extname(name).toLowerCase()))
  .sort((a, b) => a.localeCompare(b))

const toKB = (bytes) => Math.round(bytes / 102.4) / 10

const convertImage = async (name) => {
  const sourcePath = path.join(publicDir, name)
  const parsed = path.parse(name)
  const webpPath = path.join(publicDir, `${parsed.name}.webp`)
  const avifPath = path.join(publicDir, `${parsed.name}.avif`)
  const isLossless = losslessNames.has(name)

  const image = sharp(sourcePath).rotate()
  const metadata = await image.metadata()

  if (isLossless) {
    await sharp(sourcePath).rotate().webp({ lossless: true, effort: 6 }).toFile(webpPath)
    await sharp(sourcePath).rotate().avif({ lossless: true, effort: 7 }).toFile(avifPath)
  } else {
    await sharp(sourcePath)
      .rotate()
      .webp({ quality: 85, effort: 6, smartSubsample: true })
      .toFile(webpPath)
    await sharp(sourcePath)
      .rotate()
      .avif({ quality: 60, effort: 6 })
      .toFile(avifPath)
  }

  const [sourceStat, webpStat, avifStat] = await Promise.all([
    fs.stat(sourcePath),
    fs.stat(webpPath),
    fs.stat(avifPath),
  ])
  const sourceUrl = `/${name}`
  const manifestEntry = {}

  if (webpStat.size < sourceStat.size) {
    manifestEntry.webp = `/${parsed.name}.webp`
  } else {
    await fs.rm(webpPath, { force: true })
  }

  if (avifStat.size < sourceStat.size) {
    manifestEntry.avif = `/${parsed.name}.avif`
  } else {
    await fs.rm(avifPath, { force: true })
  }

  return {
    name,
    sourceUrl,
    manifestEntry,
    width: metadata.width,
    height: metadata.height,
    mode: isLossless ? 'lossless' : 'quality',
    originalKB: toKB(sourceStat.size),
    webpKB: webpStat.size < sourceStat.size ? toKB(webpStat.size) : 'skipped',
    avifKB: avifStat.size < sourceStat.size ? toKB(avifStat.size) : 'skipped',
  }
}

const results = []
for (const name of sourceImages) {
  results.push(await convertImage(name))
}

const originalTotal = results.reduce((sum, item) => sum + item.originalKB, 0)
const webpTotal = results.reduce(
  (sum, item) => sum + (typeof item.webpKB === 'number' ? item.webpKB : item.originalKB),
  0
)
const avifTotal = results.reduce(
  (sum, item) => sum + (typeof item.avifKB === 'number' ? item.avifKB : item.originalKB),
  0
)
const manifest = Object.fromEntries(
  results
    .filter((item) => Object.keys(item.manifestEntry).length > 0)
    .map((item) => [item.sourceUrl, item.manifestEntry])
)

await fs.writeFile(`${manifestPath}.tmp`, `${JSON.stringify(manifest, null, 2)}\n`)
await fs.rename(`${manifestPath}.tmp`, manifestPath)

console.table(
  results.map(({ sourceUrl, manifestEntry, ...displayResult }) => displayResult)
)
console.log(
  `Converted ${results.length} images. Total original=${originalTotal.toFixed(1)}KB, best-webp=${webpTotal.toFixed(1)}KB, best-avif=${avifTotal.toFixed(1)}KB, manifest=${Object.keys(manifest).length} images`
)
