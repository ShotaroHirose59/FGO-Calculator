# FGO-Calculator (Wオルタと計算)

## サービス概要
スマホアプリ 「Fate/Grand Order」で使える計算アプリです。<br/>
宝具ダメージ計算、宝具NP獲得計算がメインの機能です。

## 使用画面
### ① 宝具ダメージ計算
サーヴァントの宝具ダメージを計算できる。
##### PC画面
<img width="800" alt="スクリーンショット 2020-06-16 15 09 11" src="https://user-images.githubusercontent.com/55835461/84737843-b4901580-afe3-11ea-91ca-4256d7f10136.png"> 

##### スマホ画面
<img width="311" alt="スクリーンショット 2020-06-16 17 13 01" src="https://user-images.githubusercontent.com/55835461/84749921-959a7f00-aff5-11ea-9b10-43c86b07f064.png">
<img width="311" alt="スクリーンショット 2020-06-16 17 12 50" src="https://user-images.githubusercontent.com/55835461/84750065-c7abe100-aff5-11ea-9cc0-4a26f6e61844.png">


### ②宝具NP獲得計算
サーヴァントが宝具を打った時、その宝具だけでどれだけNPを獲得できるかを計算できる。
##### PC画面
<img width="1440" alt="スクリーンショット 2020-06-16 15 13 37" src="https://user-images.githubusercontent.com/55835461/84738031-1f415100-afe4-11ea-9ff3-94c7d66112ad.png">

##### スマホ画面
固定フッターで結果をリアクティブに反映

<img width="310" alt="スクリーンショット 2020-06-16 17 16 03" src="https://user-images.githubusercontent.com/55835461/84750219-f5912580-aff5-11ea-936a-3521ff7dc6b0.png">
<img width="310" alt="スクリーンショット 2020-06-16 17 16 14" src="https://user-images.githubusercontent.com/55835461/84750240-fd50ca00-aff5-11ea-8c29-fd38f69652f6.png">

## 使用技術
#### Nuxt.js × Firebase

### フロントエンド
- Nuxt 2.12.2
- Vue 2.6.11
- Vuex 3.3.0
- VuexFire 3.10
- vee-validate 3.3.1
- Vuetify 2.2.27
- PWA 3.00
- dotenv 1.40
- eslint 6.8.0
- prettier 1.19.1

### Firebase
- Firebase 7.14.4 <br/>
    Cloud Firestore

### インフラストラクチャー
- CircleCI

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
