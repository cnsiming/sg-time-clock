# sg-time-clock

一个纯静态单页网站：实时显示新加坡时区（Asia/Singapore, UTC+8）的当前时间与日期，每秒自动刷新。

## 本地预览

直接用浏览器打开 `index.html` 即可，或：

```bash
npx serve .
```

## 部署方式一：GitHub Pages（最快，2 分钟）

```bash
git init
git add .
git commit -m "init: singapore clock"
git branch -M main
git remote add origin https://github.com/<你的用户名>/sg-time-clock.git
git push -u origin main
```

然后到 GitHub 仓库 → **Settings → Pages → Source 选 `main` 分支 / (root)** → Save。
几分钟后即可通过 `https://<你的用户名>.github.io/sg-time-clock/` 访问。

## 部署方式二：Cloudflare Pages（推荐，全球 CDN）

### 方式 A：Git 连接（自动部署，推荐）

1. 把代码推送到 GitHub（见上）。
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages → Create → Pages → Connect to Git**。
3. 选中 `sg-time-clock` 仓库，构建设置：
   - Framework preset: `None`
   - Build command:（留空）
   - Build output directory: `/`（根目录）
4. Save & Deploy。Cloudflare 会分配 `https://sg-time-clock.pages.dev`，并在每次 push 时自动重新部署。

### 方式 B：Wrangler CLI 直接上传

```bash
npm install -g wrangler
wrangler login                      # 浏览器授权一次
wrangler pages deploy . --project-name=sg-time-clock
```

完成后访问 `https://sg-time-clock.pages.dev`。

### 绑定自定义域名

Cloudflare Dashboard → Pages 项目 → **Custom domains → Set up a custom domain**，输入你的域名即可（若域名 DNS 已托管在 Cloudflare，会自动配置；否则按提示添加 CNAME 记录）。

## 文件结构

```
sg-time-clock/
├── index.html    # 页面结构
├── style.css     # 样式（渐变卡片 + 毛玻璃）
├── script.js     # 新加坡时区时间逻辑（Intl API）
├── wrangler.toml # Cloudflare Pages 配置
└── .gitignore
```
