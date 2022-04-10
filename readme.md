# Setup React app (TS and JS)

웹팩 셋팅 한번 해놓고 우려먹을려고 만듦

## 공통 셋팅

eslint
prettier
babel
react
react-router
axios

- 📁components
- 📁dist
- 📁layouts
- 📁pages
- 📁typings
- 📁utils
- 📃index.html
- 📃.eslintrc
- 📃.prettierrc
- 📃tsconfig.json (for TS)

## Webpack

- `loader`

```
module: {
  rules: [
    {
      test: '빌드할 파일 확장자 정규식'
      exclude: '제외할 파일 정규식'
      use: {
        loader: '사용할 로더 이름'
        option: '로더 옵션'
      }
    }
  ]
}
```

## vite

- 04 10
  - vite와 webpack 폴더 구조 대략적으로 잡고, webpack_JS 구성하는데
