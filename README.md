# react-no-webpack
POC for React UI library + CSS Modules + Sass (but without Webpack)

## Test components in browser
- `npm run build`
- Open "index.html" in browser.

## Export libary for consumption as external package in another project
- `npm run lib`
- `npm link` - one time operation to register library as a global package.
- In another project, `npm link react-no-webpack` - one time operation.
- Can now `import { WidgetCSS, WidgetSass } from 'react-no-webpack';` etc.
