# 陈卿雯（Qingwen Chen）个人主页

Live site: https://qingwenchen0212.github.io/

极简、零依赖、支持中英双语切换的个人主页，直接部署于 GitHub Pages。

## 目录结构

```text
.
├── index.html                   # 入口页面
├── .nojekyll                    # GitHub Pages 静态直出标记
└── assets/
    ├── css/main.css             # 极简双栏排版与响应式样式
    ├── js/
    │   ├── site-data.js         # 全站中英双语内容单一数据源
    │   └── app.js               # 渲染与交互逻辑（语言切换、项目筛选、防爬虫邮箱展示）
    └── images/                  # 个人头像、校徽校标与个人形象图集
```

## 内容更新

编辑 `assets/js/site-data.js` 即可更新简介、核心数据、代表项目、工作与教育经历、能力标签或头像（内置 `avatar.jpg` 职业照与 `avatar-lifestyle.jpg` 生活照，一行切换）：

```bash
git add . && git commit -m "Update homepage" && git push
```
