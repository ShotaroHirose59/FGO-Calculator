<template>
  <v-dialog v-model="isDisplay" scrollable max-width="800px">
    <v-card>
      <v-toolbar height="75px">
        <v-img :src="image_src" max-width="70px" class="mr-5"></v-img>
        <v-toolbar-title>使い方と詳細</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <h3 class="mt-3 mb-1">
          単体 or 全体宝具を持つ全てのサーヴァントが対象
        </h3>
        <h3 class="mt-5 mb-1">
          使い方
        </h3>
        <p>
          ①クラスを選択するとサーヴァントが選択可能になります。<br />
          ②サーヴァントを選択するとATK、宝具レベル、宝具倍率、そしてダメージ結果が自動入力されます。<br />
          ③お好みで入力値を変更するとダメージ結果に反映されます。
        </p>
        <h3 class="mt-5 mb-1">
          入力項目の詳細
        </h3>
        <ul class="mb-3">
          <li>
            攻撃力UP ・・・ 攻撃力UPバフ
          </li>
          <li>
            カードUP ・・・ カード性能UPバフ
          </li>
          <li>
            特攻バフ ・・・ 特攻付与スキル (例 スカサハの〔神性〕特攻を付与)
          </li>
          <li>
            宝具威力UP ・・・ 宝具威力UPバフ
          </li>
          <li>
            特攻宝具 ・・・ 宝具時に乗る特攻バフ (例 ギルのサーヴァント特攻)
          </li>
          <li>
            礼装ATK ・・・ 概念礼装のATK
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
      image_src: require('assets/altria.png'),
      isDisplay: false
    }
  }
}
</script>
