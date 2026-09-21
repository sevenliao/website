# SevenLiao 导航网站

一个简洁实用的个人导航网站，基于 Next.js 15 + React 19 + TypeScript + Tailwind CSS 构建。

## 功能特点

- 🎯 分类清晰：常用网站、社交媒体、新闻资讯等分类导航
- 🌙 深色模式：支持自动跟随系统主题
- 📱 响应式设计：适配各种屏幕尺寸
- ⚡ 快速加载：基于 Next.js 静态生成，性能优异
- 🎨 Tailwind CSS：简洁优雅的样式设计

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由（如 items 接口）
│   ├── page.tsx           # 首页
│   ├── layout.tsx         # 布局组件
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── Nav.tsx           # 导航栏组件
│   └── NavigationCard.tsx # 网站卡片组件
├── data/                  # 静态数据
│   └── navigation.ts     # 导航数据配置
└── types/                 # TypeScript 类型定义
    ├── item.ts           # 数据项类型
    └── navigation.ts     # 导航类型定义

public/
├── images/               # 网站 favicon 图标
└── ...                  # 静态资源
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start

# 代码检查
npm run lint
```

## 添加新网站

在 `src/data/navigation.ts` 中的 `navigationData` 数组添加新网站：

```typescript
{
  title: "分类名称",
  type: "分类标识",
  websites: [
    { name: "网站名称", url: "https://example.com", description: "网站描述", logo: "/images/icon.ico" },
  ],
},
```

将网站图标放入 `public/images/` 目录即可。

## 技术栈

- **框架**: Next.js 15.1.8 (App Router)
- **UI库**: React 19.0.0
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 3.4.1
- **代码检查**: ESLint 9

## 部署

本项目可轻松部署到 Vercel、Netlify 或任何支持 Node.js 的平台。

```bash
# Vercel 部署
vercel

# 或构建后部署
npm run build
npm run start
```