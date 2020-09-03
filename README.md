## 设计目标

1. 子项目支持单独开发，单独部署（避免前端巨无霸，多团队同时参与）
2. 单一的入口 HTML（不同项目之间切换时无白屏现象）
3. 支持多语言开发（JavaScript、TypeScript）

## 使用

detail.md

### 开发

```bash
# 安装依赖
npm run bootstrap

# 开发模式
npm run serve

# 打开: http://localhost:10240/
```

### 构建

```bash
# 生产构建
npm run build
```
