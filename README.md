# Bingo Blog

这是我的个人博客仓库，基于 Firefly 主题进行定制和维护。

## 项目说明

- 博客源码位于 `src/`
- 文章内容位于 `src/content/posts/`
- 配置文件主要位于 `src/config/`
- 站点构建命令：`pnpm run build`

## 本地开发

```bash
pnpm install
pnpm dev
```

然后在浏览器打开：

```text
http://localhost:4321
```

## 构建

```bash
pnpm run build
```

## 部署

本仓库支持将构建产物部署到你自己的静态站点托管环境中。

如果你修改了主题、文章或配置，记得重新构建并同步到你的发布环境。

## 说明

这个仓库会持续记录我的博客内容、主题配置和站点改动。
