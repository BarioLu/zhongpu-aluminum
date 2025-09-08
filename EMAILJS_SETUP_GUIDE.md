# EmailJS 生产环境变量设置指南

## 📧 EmailJS 设置步骤

### 1. EmailJS 账户准备
1. 访问 [EmailJS官网](https://www.emailjs.com/)
2. 注册/登录账户
3. 创建服务 (Gmail/Outlook等)
4. 创建邮件模板
5. 获取配置信息

### 2. 获取必要的ID和密钥

#### 🔧 Service ID (服务ID)
1. 登录EmailJS控制台
2. 进入 **Email Services** 页面
3. 选择你的邮件服务
4. 复制 **Service ID** (例如: service_zhongpu)

#### 📝 Template ID (模板ID)
1. 进入 **Email Templates** 页面
2. 为联系表单创建模板 (例如: template_contact)
3. 为快速询价创建模板 (例如: template_quick_inquiry)
4. 复制每个模板的ID

#### 🔑 Public Key (公钥)
1. 进入 **Integration** 页面
2. 复制 **Public Key** (例如: lxg3--SargfI9rJNI)

### 3. EmailJS 模板设置示例

#### 联系表单模板 (template_contact)
```
主题: New Contact from {{from_name}} - {{subject}}

您好，

收到来自 {{from_name}} 的新联系：

姓名: {{from_name}}
邮箱: {{from_email}}
公司: {{company}}
电话: {{phone}}
主题: {{subject}}

消息内容:
{{message}}

---
此邮件来自中普铝业官网联系表单
```

#### 快速询价模板 (template_quick_inquiry)
```
主题: Quick Inquiry from {{from_name}}

您好，

收到新的快速询价：

姓名: {{from_name}}
邮箱: {{from_email}}

需求描述:
{{requirements}}

---
此邮件来自中普铝业官网快速询价表单
```

## 🚀 部署平台环境变量设置

### Vercel 设置
1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择你的项目
3. 进入 **Settings** → **Environment Variables**
4. 添加以下变量:

```
Name: VITE_EMAILJS_SERVICE_ID
Value: service_zhongpu
Environments: ☑️ Production ☑️ Preview ☑️ Development

Name: VITE_EMAILJS_CONTACT_TEMPLATE_ID  
Value: template_contact
Environments: ☑️ Production ☑️ Preview ☑️ Development

Name: VITE_EMAILJS_QUICK_INQUIRY_TEMPLATE_ID
Value: template_quick_inquiry
Environments: ☑️ Production ☑️ Preview ☑️ Development

Name: VITE_EMAILJS_PUBLIC_KEY
Value: lxg3--SargfI9rJNI
Environments: ☑️ Production ☑️ Preview ☑️ Development

Name: VITE_CONTACT_EMAIL
Value: zhongpualu@outlook.com
Environments: ☑️ Production ☑️ Preview ☑️ Development
```

### Netlify 设置
1. 访问 [Netlify Dashboard](https://app.netlify.com/)
2. 选择你的站点
3. 进入 **Site settings** → **Environment variables**
4. 点击 **Add a variable** 并添加上述变量

### GitHub Pages 设置 (使用GitHub Actions)
在 `.github/workflows/deploy.yml` 中添加:

```yaml
env:
  VITE_EMAILJS_SERVICE_ID: ${{ secrets.VITE_EMAILJS_SERVICE_ID }}
  VITE_EMAILJS_CONTACT_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_CONTACT_TEMPLATE_ID }}
  VITE_EMAILJS_QUICK_INQUIRY_TEMPLATE_ID: ${{ secrets.VITE_EMAILJS_QUICK_INQUIRY_TEMPLATE_ID }}
  VITE_EMAILJS_PUBLIC_KEY: ${{ secrets.VITE_EMAILJS_PUBLIC_KEY }}
  VITE_CONTACT_EMAIL: ${{ secrets.VITE_CONTACT_EMAIL }}
```

然后在GitHub仓库的 **Settings** → **Secrets and variables** → **Actions** 中添加这些变量。

## 🔒 安全注意事项

### ✅ 安全的做法：
- ✅ 使用环境变量存储配置
- ✅ Public Key 可以在前端暴露（这是EmailJS的设计）
- ✅ 在EmailJS控制台设置域名限制
- ✅ 定期轮换密钥

### ❌ 不安全的做法：
- ❌ 不要将Private Key暴露在前端
- ❌ 不要在代码中硬编码密钥
- ❌ 不要将.env文件提交到Git

## 🧪 测试环境变量

### 本地测试
```bash
# 创建 .env.local 文件进行本地测试
cp .env.example .env.local
# 编辑 .env.local 填入真实值
npm run dev
```

### 生产环境测试
部署后在浏览器控制台检查：
```javascript
// 检查环境变量是否正确加载（仅用于调试）
console.log('EmailJS配置检查:');
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
```

## 🎯 EmailJS 最佳实践

### 1. 域名限制
在EmailJS控制台设置允许的域名：
- `localhost:3000` (开发环境)
- `zhongpu-aluminum.com` (生产环境)
- `*.vercel.app` (如果使用Vercel)

### 2. 速率限制
EmailJS 免费账户限制：
- 200封邮件/月
- 如需更多，考虑升级到付费计划

### 3. 监控和分析
- 在EmailJS控制台查看邮件发送统计
- 设置邮件发送失败通知

## 🚨 常见问题排查

### 1. 邮件发送失败
- 检查环境变量是否正确设置
- 验证模板ID是否匹配
- 确认域名是否在白名单中

### 2. 环境变量未加载
- 确保变量名以 `VITE_` 开头
- 重新部署应用
- 清除浏览器缓存

### 3. 模板参数不匹配
- 检查模板中的变量名与代码中是否一致
- 确认所有必需参数都已传递

## 📞 技术支持
如果遇到问题：
1. 检查EmailJS控制台的发送日志
2. 查看浏览器控制台错误信息
3. 参考EmailJS官方文档
4. 联系EmailJS技术支持