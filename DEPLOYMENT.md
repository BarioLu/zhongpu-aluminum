# 网站部署指南

## 🚀 部署选项推荐（按优先级排列）

### 1. **Vercel (强烈推荐) ⭐⭐⭐⭐⭐**
**优势：**
- 专为React应用优化
- 自动HTTPS和CDN
- 零配置部署
- 免费额度充足
- 支持自定义域名

**部署步骤：**
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub连接
3. 选择项目仓库
4. 自动检测Vite配置
5. 一键部署

**费用：** 免费（包含自定义域名）

### 2. **Netlify ⭐⭐⭐⭐**
**优势：**
- 静态网站托管专家
- 表单处理功能
- 持续部署
- 免费SSL证书
- 良好的SEO支持

**部署步骤：**
1. 访问 [netlify.com](https://netlify.com)
2. 拖拽dist文件夹或连接Git
3. 构建命令：`npm run build`
4. 发布目录：`dist`

**费用：** 免费（100GB带宽/月）

### 3. **GitHub Pages ⭐⭐⭐**
**优势：**
- 与GitHub集成
- 完全免费
- 支持自定义域名

**部署步骤：**
1. 安装gh-pages：`npm install --save-dev gh-pages`
2. 更新package.json：
```json
{
  "homepage": "https://yourusername.github.io/repository-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. 运行：`npm run deploy`

### 4. **阿里云/腾讯云 静态网站托管 ⭐⭐⭐**
**优势：**
- 国内访问速度快
- 备案支持
- 与国内服务集成

**部署步骤：**
1. 开启静态网站托管服务
2. 上传dist文件夹内容
3. 配置域名和SSL

## 📝 部署配置文件

### Vercel配置 (`vercel.json`)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Netlify配置 (`netlify.toml`)
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 🔧 部署前优化

### 1. 图片优化
```bash
# 安装图片压缩工具
npm install --save-dev vite-plugin-imagemin

# 或使用在线工具压缩public目录中的图片
```

### 2. 环境变量设置
创建 `.env.production`:
```env
VITE_EMAILJS_SERVICE_ID=your_production_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_production_template_id
VITE_EMAILJS_QUICK_INQUIRY_TEMPLATE_ID=your_production_template_id
VITE_EMAILJS_PUBLIC_KEY=your_production_public_key
VITE_CONTACT_EMAIL=zhongpualu@outlook.com
```

### 3. 域名配置
**推荐域名选项：**
- zhongpu-aluminum.com (主域名)
- en.zhongpu-aluminum.com (英文站)
- www.zhongpu-aluminum.com

## 📊 部署后必做事项

### 1. SEO提交
- [Google Search Console](https://search.google.com/search-console/)
- [百度站长工具](https://ziyuan.baidu.com/)
- [必应网站管理员工具](https://www.bing.com/webmasters/)

### 2. 分析工具
- Google Analytics 4
- 百度统计
- 热力图工具 (Hotjar/Clarity)

### 3. 性能监控
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 4. 安全配置
- SSL证书验证
- 安全头设置
- 备份策略

## 🔄 CI/CD自动部署

### GitHub Actions配置 (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm ci
    - name: Build
      run: npm run build
    - name: Deploy to Vercel
      uses: vercel/action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 💡 部署建议

### 首选方案：Vercel
1. 最适合React应用
2. 性能优异
3. 部署简单
4. 免费且功能完整

### 备选方案：Netlify + 自定义域名
1. 静态托管专家
2. 表单处理功能对联系页面有用
3. 分析功能丰富

### 长期规划
1. 考虑CDN加速（CloudFlare）
2. 图片优化服务
3. 多语言版本部署
4. A/B测试平台集成

## 📞 技术支持
如遇部署问题，请检查：
1. Node.js版本兼容性
2. 环境变量配置
3. 构建产物是否完整
4. 域名DNS设置是否正确