-- react clone coding

## react Next study

```
- next js proj inital

npx create-next-app@latest --typescript
```

```
- 18 version set
npm i next@latest react@rc react-dom@rc
```

### tail-wind css setup

#### ref: https://tailwindcss.com/docs/installation/using-postcss

```
- package.json 에 tailwind css, postcss autoprefixer 추가
1. npm install -D tailwindcss postcss autoprefixer
- tailwindcss + postcss 추가
2. npx tailwindcss init -p

 -> Object.fromEntries is not a function 에러가 났다면 node version 이 16 이상이 아닌것.
```

#### content / feat tailwind.css 읽는 방법

```
  content: [
      
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
  
  이렇게 셋팅해 놓으면 tailwind 가 위 파일에 tailwind 문법이 쓰인걸 찾아내서 적용시켜준다.
  ex) ./페이지하위/모든폴더/모든파일.{js 파일,jsx,ts,tsx} 허용하라.
  -> "./pages/**/*.{js,jsx,ts,tsx}",

    content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  * 주의 ! content 부분 설정할때 띄어서 쓰면 적용이 안되요 :) 
```
+@ (플러스 알파)
> Prettier를 통한 TailwindCSS 클래스 자동 정렬 플러그인
  (TailwindCSS 공식 Prettier플러그인)
  blueschist님이 소개해주신 TailwindCSS 클래스 자동 정렬 플러그인 이다.
  사용 방법은 아래와 같이 설치 후, 파일 저장시 클래스가 순서에 맞게 자동으로 정렬되도록 도와줍니다.
  npm install -D prettier prettier-plugin-tailwindcss

#### tail-wind ui

```
modifiers for form 
```

### prisma
```
ORM 진영의 js <-> DataBase 를 편리하게 사용할 수 있게끔 해주는 친구이다. 
```

### PlanetScale 
```
MySQL 과 호환되는 serverless 데이터베이스 플랫폼.

brew install planetscale/tap/pscale

brew install mysql-client

pscale

pscale database create carrot-market --region ap-northeast


schema 설정이 끝난뒤, 바로 db 푸쉬.
```