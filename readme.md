# Setup React app (TS and JS)

웹팩 셋팅 한번 해놓고 우려먹을려고 만듦

## 폴더 구조

- 📁components : 공통 컴포넌트
- 📁layouts : 페이지들간의 공통 레이아웃
- 📁pages : 서비스 페이지
- 📁typings : TS 타입
- 📁utils :
- 📃index.html
- 📃.eslintrc
- 📃.prettierrc
- 📃tsconfig.json (for TS)

## tsconfig.json

- compilerOptions
  - https://www.typescriptlang.org/tsconfig
  - https://codingapple.com/unit/typescript-tsconfig-json/

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

# npm 의존 패키지 정리

- `forktscheckerwebpackplugin`
  - Webpack plugin that runs TypeScript type checker on a separate process
  - 타입 채킹 더 빨리 해주는 플러그인, 웹펙 옵션은 아래 링크 확인
  - https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#options

- `@emotion/react`
  - css in js

- `@loadable/component`
  - 코드 스플리팅이 가능하게 해주는 패키지, react18 부터 `React.lazy`와 `Suspense`가 서버사이드 렌더링 지원이 되서 걷어내던가 해야할듯 (이전엔 안됐음)

- `eslint` : JS 정적 분석(코드를 컴파일 혹은 실행하기 이전에 미리 디버깅) 도구
  - `eslint-config-react-app` : CRA 팀의 eslint 설정
  - `eslint-config-prettier` : 불필요하거나 prettier랑 충돌날 가능성 있는 규칙 해제
  - ~`eslint-config-airbnb` : airbnb 스타일 eslint 적용~

- `cross-env`
  - 사용할 커멘드 앞에 `cross-env [<key>=<value>, ...]` 를 붙여 실행하면 됨
  - `NODE_ENV` 값에 development 랑 production 지정하려고 씀

- `babel` : 트랜스 파일러(다른 실행 환경에서도 돌아갈 수 있도록 형태만 바꾸는 작업)
  - `babel/core`
    - 바벨 사용하는데 필요한 패키지
  - `@babel/preset-env`
    - 웹펙에서 바벨 적용할 프리셋, https://babeljs.io/docs/en/babel-preset-env
  - `@babel/preset-react`
    - JSX 들을 createElement로 변환해주는 바벨 플러그인
    - https://babeljs.io/docs/en/babel-preset-react
  - `@babel/preset-typescript`
    - ts 타입채크 바벨 플러그인
  - ~`@babel/eslint-parser`~
    - ~.eslintrc 에서 import 문 파싱하려고 씀~
    - CRA팀의 `eslint-config-react-app` 으로 대체함 (이걸 쓰면 내가 규칙 다 정해야할거같아서 ㅋㅋ..)

- `core-js`
  - 런타임 폴리필, `babel-loader`가 필요로 함

- `ts-loader`

## 변경 사항

- 22/04/10
  - 폴더 구조 잡고 webpack 의존 패키지 셋팅
- 22/04/17
  - TS webpack에 eslint 적용함
  - airbnb는 너무 기준이 까다로운 것 같아 CRA의 `eslint-config-react-app` 을 적용함
- 22/04/21
  - webpack_JS 설정 완료, 백틱이랑 홑따옴표랑 햇갈려서 prettier 설정 doubleQuote로 적용
- 22/04/22
  - vite_JS
    - 일단 devServer는 오지게 빠름 ㄷㄷ
    - devServer 에서 eslint 적용 아직 못함
    - build 결과물인 `index.html` 의 script src 경로 설정 번잡하게 다시 해줘야함
    - 구글링해도 vite는 아직 정보가 별로 없는게 큰 문제점...webpack에 비해서 커뮤니티가 작다

## vite 구성 참고 메모
- https://fullstackcode.dev/2022/02/02/migrating-create-react-app-application-to-vite/
