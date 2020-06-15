<template>
  <v-dialog v-model="isDisplay" scrollable max-width="800px">
    <v-card>
      <v-toolbar height="75px">
        <v-img :src="image_src" max-width="70px" class="mr-5"></v-img>
        <v-toolbar-title>使い方と詳細</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <h3 class="mt-3 mb-1">
          使い方
        </h3>
        <p>
          ①クラスを選択するとサーヴァントが選択可能になります。<br />
          ②サーヴァントを選択するとNPレート、宝具ヒット数、宝具タイプが自動入力され「NP獲得結果」が表示されます。<br />
          ③お好みで入力値を変更すると「NP獲得結果」に反映されます。
        </p>
        <h3 class="mt-5 mb-1">
          入力項目の詳細
        </h3>
        <ul class="mb-3">
          <li>
            カード性能UP ・・・ カード性能UPバフ
          </li>
          <li>
            NP獲得量UP ・・・ NP獲得量UPバフ
          </li>
          <li>
            敵クラス ・・・ 敵のクラスによって獲得できるNP量に変化が生じる。
          </li>
          <li>
            敵の数 ・・・ 敵の数によって獲得できるNP量に変化が生じる。
          </li>
          <li>
            オーバーキルHit数 ・・・
            オーバーキルHit数は敵を倒しきったタイミングを指す。
            (例）3Hitする宝具で2Hit目に敵を倒しきれば2Hitオーバーキルと表現し、数値も上昇する。
          </li>
        </ul>
      </v-card-text>
      <v-col style="text-align: right;">
        <v-btn
          color="red"
          text
          style="font-size: 18px;"
          @click="isDisplay = false"
        >
          Close
        </v-btn>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      image_src: require('assets/jeannearuta.png'),
      isDisplay: false
    }
  }
}
</script>
