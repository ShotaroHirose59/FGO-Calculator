<template>
  <v-dialog v-model="isDisplay" scrollable max-width="800px">
    <v-card>
      <v-toolbar height="64px">
        <v-img :src="image_src" max-width="56px" class="mr-4"></v-img>
        <v-toolbar-title>使い方と詳細</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <h3 class="mt-4">
          単体 or 全体宝具を持つArts Quickのサーヴァントが対象
        </h3>
        <h3 class="mt-4 mb-2">
          使い方
        </h3>
        <p v-if="!$vuetify.breakpoint.xs">
          ①クラスを選択するとサーヴァントが選択可能になります。<br />
          ②サーヴァントを選択するとNPレート、宝具ヒット数、宝具タイプが自動入力され「NP獲得結果」が表示されます。<br />
          ③お好みで入力値を変更すると「NP獲得結果」に反映されます。
        </p>

        <p v-if="$vuetify.breakpoint.xs">
          ①クラスを選択するとサーヴァントが選択可能になります。<br />
          ②サーヴァントを選択するとNPレート、宝具ヒット数、宝具タイプが自動入力され「NP獲得結果」が表示されます。<br />
          ③お好みで入力値を変更すると「NP獲得結果」に反映されます。<br />
          ④アルトリア・オルタをタッチするとさらに楽しめます。
        </p>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          入力項目の詳細
        </h3>
        <ul>
          <li class="mb-2">
            カード性能UP ・・・ カード性能UPバフ
          </li>
          <li class="mb-2">
            NP獲得量UP ・・・ NP獲得量UPバフ
          </li>
          <li class="mb-2">
            敵クラス ・・・ 敵のクラスによって獲得できるNP量に変化が生じる。
          </li>
          <li class="mb-2">
            敵の数 ・・・ 敵の数によって獲得できるNP量に変化が生じる。
          </li>
          <li class="mb-2">
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
          style="font-size: 16px;"
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
