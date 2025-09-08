# 🚀 Vercel 部署详细步骤

## 方法一：通过Vercel网站部署（推荐）

### 1. 准备GitHub仓库
```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 创建提交
git commit -m "Initial commit - Zhongpu Aluminum website ready for deployment"

# 添加GitHub远程仓库（替换为你的仓库URL）
git remote add origin https://github.com/yourusername/zhongpu-aluminum.git

# 推送到GitHub
git push -u origin main
```

### 2. 通过Vercel网站部署
1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Start Deploying" 或 "Sign Up"
3. 选择 "Continue with GitHub"
4. 授权Vercel访问你的GitHub
5. 选择 "Import Git Repository"
6. 找到并选择你的项目仓库
7. 点击 "Import"

### 3. 配置部署设置
Vercel会自动检测到这是一个Vite项目，默认配置应该是：
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm ci`

### 4. 设置环境变量
在部署配置页面，点击 "Environment Variables" 并添加：

| Name | Value | Environment |
|------|-------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | `service_zhongpu` | Production, Preview, Development |
| `VITE_EMAILJS_CONTACT_TEMPLATE_ID` | `template_contact` | Production, Preview, Development |
| `VITE_EMAILJS_QUICK_INQUIRY_TEMPLATE_ID` | `template_quick_inquiry` | Production, Preview, Development |
| `VITE_EMAILJS_PUBLIC_KEY` | `lxg3--SargfI9rJNI` | Production, Preview, Development |
| `VITE_CONTACT_EMAIL` | `zhongpualu@outlook.com` | Production, Preview, Development |

### 5. 部署
点击 "Deploy" 按钮，Vercel将：
- 克隆你的仓库
- 安装依赖 (`npm ci`)
- 运行构建 (`npm run build`)
- 部署到全球CDN

## 方法二：通过CLI部署

### 1. 登录Vercel CLI
```bash
vercel login
# 选择 "Continue with GitHub" 或其他登录方式
# 按照浏览器提示完成登录
```

### 2. 初次部署
```bash
vercel --prod --yes
```

### 3. 设置环境变量（CLI方式）
```bash
vercel env add VITE_EMAILJS_SERVICE_ID production
vercel env add VITE_EMAILJS_CONTACT_TEMPLATE_ID production
vercel env add VITE_EMAILJS_QUICK_INQUIRY_TEMPLATE_ID production
vercel env add VITE_EMAILJS_PUBLIC_KEY production
vercel env add VITE_CONTACT_EMAIL production
```

## 📋 部署检查清单

### 部署前确认：
- ✅ `npm run build` 构建成功
- ✅ `vercel.json` 配置文件已创建
- ✅ 所有静态资源在 `public/` 目录
- ✅ 环境变量配置准备完成
- ✅ EmailJS配置正确

### 部署后验证：
- ✅ 网站正常加载
- ✅ 所有页面路由正常工作
- ✅ 图片和静态资源加载正常
- ✅ 联系表单功能正常
- ✅ SEO meta标签正确显示
- ✅ sitemap.xml 和 robots.txt 可访问

## 🌐 预期结果

部署成功后，你将获得：

### 自动生成的URL：
- **生产环境**: `https://your-project-name.vercel.app`
- **预览环境**: 每次提交都会生成预览URL

### 性能优化：
- 全球CDN加速
- 自动GZIP压缩
- HTTP/2 支持
- 自动HTTPS

### 特性：
- 自动SSL证书
- 零停机部署
- Git集成自动部署
- 实时分析数据

## 🔧 自定义域名设置

### 1. 在Vercel控制台：
1. 进入项目设置
2. 点击 "Domains" 标签
3. 添加你的域名（如：`zhongpu-aluminum.com`）

### 2. DNS配置：
```
类型: CNAME
名称: www
值: cname.vercel-dns.com

类型: A
名称: @
值: 76.76.19.61
```

## 🚨 常见问题解决

### 1. 构建失败
- 检查 `package.json` 中的构建脚本
- 确保所有依赖正确安装
- 查看构建日志中的错误信息

### 2. 环境变量未加载
- 确保变量名以 `VITE_` 开头
- 重新部署应用
- 检查Vercel控制台中的环境变量设置

### 3. 路由404错误
- 确认 `vercel.json` 中的路由配置正确
- SPA应用需要fallback到 `index.html`

### 4. 静态资源404
- 检查文件路径是否正确
- 确认文件已包含在 `public/` 目录

## 📞 获取帮助

如果遇到问题：
1. 查看Vercel部署日志
2. 检查浏览器开发者工具
3. 访问 [Vercel文档](https://vercel.com/docs)
4. 联系Vercel支持团队

---

## 🎯 现在开始部署！

**推荐步骤：**
1. 访问 [vercel.com](https://vercel.com)
2. 使用GitHub账户登录
3. 点击 "New Project"
4. 导入你的GitHub仓库
5. 配置环境变量
6. 点击Deploy

部署通常需要1-3分钟完成。成功后，你将获得一个可公开访问的URL！