<template>
  <v-dialog v-model="isDisplay" scrollable max-width="700px">
    <v-card>
      <v-card-title class="headline">
        使い方と詳細
        <v-spacer />
      </v-card-title>
      <v-divider />
      <v-card-text>
        <h3 class="mt-3 mb-1">
          使い方
        </h3>
        <p>
          ①クラスを選択するとサーヴァントが選択可能になります。<br />
          ②サーヴァントを選択するとATK、宝具レベル、宝具倍率、そしてダメージ結果が自動入力されます。<br />
          ③お好みで入力値を変更するとダメージ結果に反映されます。<br />
          ④ダメージ結果や選択したサーヴァントによって邪ンヌのセリフが変わるのでお楽しみください。
        </p>
        <h3 class="mt-3 mb-1">
          入力項目の詳細
        </h3>
        <ul class="mb-3">
          <li>
            攻撃力UP ・・・ 攻撃力アップスキル
          </li>
          <li>
            カード性能UP ・・・ カード性能アップスキル
          </li>
          <li>
            特攻バフ ・・・ 特攻付与スキル (例 スカサハの〔神性〕特攻を付与)
          </li>
          <li>
            宝具威力UP ・・・ 宝具威力アップスキル
          </li>
          <li>
            特攻宝具 ・・・ 宝具時に乗る特攻倍率 (例 ギルのサーヴァント特攻)
          </li>
          <li>
            礼装ATK ・・・ 概念礼装のATK
          </li>
        </ul>
      </v-card-text>
      <v-col style="text-align: right;">
        <v-btn icon large color="purple lighten-1" @click="isDisplay = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isDisplay: false
    }
  }
}
</script>
