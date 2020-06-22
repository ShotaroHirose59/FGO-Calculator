# FGO-Calculator (Wオルタと一緒に計算)
開発中。。。

## サービス概要
スマホアプリ 「Fate/Grand Order」で使える計算アプリです。<br/>
宝具ダメージ計算、宝具NP獲得計算がメインの機能です。

## 使用画面
### トップページ
#### PC画面
<img width="1440" alt="スクリーンショット 2020-06-23 7 49 54" src="https://user-images.githubusercontent.com/55835461/85342693-2c02ff00-b526-11ea-9d55-3c1cedb273a4.png">

#### スマホ画面
<img width="312" alt="スクリーンショット 2020-06-23 7 11 02" src="https://user-images.githubusercontent.com/55835461/85340380-f6a7e280-b520-11ea-86aa-dcc03b84bfb0.png">

### ② 宝具ダメージ計算
サーヴァントの宝具ダメージを計算できる。
##### PC画面
<img width="1440" alt="スクリーンショット 2020-06-16 15 09 11" src="https://user-images.githubusercontent.com/55835461/84737843-b4901580-afe3-11ea-91ca-4256d7f10136.png"> 

##### スマホ画面

| 宝具ダメージ 計算 | 結果 & セリフ画面① | 結果 & セリフ画面② |
| :---: | :---: | :---: |
| <img src="https://gyazo.com/52f764e058ccb42a5bbcd5b3b30995c3.png" width="265px"> | <img src="https://gyazo.com/9fd7211b5916d8113f564e26780be865.png" width="265px"> | <img src="https://gyazo.com/2180fc29eec2864ee070586fca3f407b.png" width="265px"> |  
<br/>
<br/>
<br/>

### ③ 宝具NP獲得計算
サーヴァントが宝具を打った時、その宝具だけでどれだけNPを獲得できるかを計算できる。
##### PC画面
<img width="1440" alt="スクリーンショット 2020-06-16 15 13 37" src="https://user-images.githubusercontent.com/55835461/84738031-1f415100-afe4-11ea-9ff3-94c7d66112ad.png">

##### スマホ画面
固定フッターで結果をリアクティブに反映。<br/>
結果の数値に応じてセリフを変更。

| 宝具NP獲得 計算 | ヘルプ & セリフ画面 | ヘルプ & セリフ画面 |
| :---: | :---: | :---: |
| <img src="https://gyazo.com/3ce847e31036b7b722f0a70014933ab4.png" width="265px"> | <img src="https://gyazo.com/a96ac00e54669184d35782cb6995ccda.png" width="265px"> | <img src="https://gyazo.com/64f9356a6da77934da030404fa7757b5.png" width="265px"> |  
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
  - Cloud Firestore
  - Hosting

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
