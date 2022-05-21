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
      ./페이지하위/모든폴더/모든파일.{js 파일,jsx,ts,tsx} 허용하라.
    "./pages/**/*.{js,jsx,ts,tsx}"
  ],
```

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