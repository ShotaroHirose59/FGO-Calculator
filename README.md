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
##### スマホ画面
| 宝具ダメージ 計算 | 宝具ダメージ 結果 |
| :---: | :---: |
| <img src="https://gyazo.com/5acf3bd303b157d2f42a877ed9727ad6.png" width="265px"> | <img src="https://gyazo.com/f578b27438c77775a1cd073b0f9d3c64.png" width="265px"> | 
<br/>
<br/>

### ②宝具NP獲得計算
サーヴァントが宝具を打った時、その宝具だけでどれだけNPを獲得できるかを計算できる。
##### PC画面
<img width="1440" alt="スクリーンショット 2020-06-16 15 13 37" src="https://user-images.githubusercontent.com/55835461/84738031-1f415100-afe4-11ea-9ff3-94c7d66112ad.png">

##### スマホ画面
固定フッターで結果をリアクティブに反映。<br/>
結果の数値に応じてセリフを変更。

| 宝具NP獲得 計算 | ヘルプ & セリフ画面 | ヘルプ & セリフ画面 |
| :---: | :---: | :---: |
| <img src="https://gyazo.com/f1712710db35b8dd1b56cee92d8c3495.png" width="265px"> | <img src="https://gyazo.com/3e5e394bc770c2eebb9b4d7a2a1cf7fe.png" width="265px"> | <img src="https://gyazo.com/86f80e25c36cea86a69abd826c94359b.png" width="265px"> |  
<br/>
<br/>
<br/>

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
