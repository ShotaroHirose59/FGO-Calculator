<template>
  <v-dialog v-model="isResultDisplay" scrollable max-width="700px">
    <v-card>
      <v-card-title class="headline">
        計算方法
        <v-spacer />
      </v-card-title>
      <v-divider />
      <v-card-text>
        <h3 class="mt-3 mb-1">
          計算方法
        </h3>
        <p>
          宝具ダメージ ＝ <br />
          ATK × 宝具倍率 × 0.23 × (カード補正 × カードバフ) × クラス相性補正 ×
          属性相性補正 × クラス補正 × 乱数補正 × 攻撃力バフ × (特攻バフ +
          宝具威力アップ) × 特攻宝具
        </p>
        <h3 class="mt-3 mb-1">
          計算項目の説明
        </h3>
        <ul class="mb-3">
          <li>0.23 ・・・ FGOのダメージ計算で必ず入る補正値。<br /></li>
          <li>
            カード補正 ・・・ 宝具タイプによって入る補正値
            (バスター1.5倍、アーツ1.0倍、クイック0.8倍)
          </li>
          <li>
            クラス相性補正 ・・・
            クラス相性によって入る補正値。(アルターエゴは1.5倍とする)
          </li>
          <li>
            属性相性補正 ・・・ FGOの裏設定である属性相性によって入る補正値。
            (等倍1.0倍、有利1.1倍、 不利0.9倍)
          </li>
          <li>
            クラス補正 ・・・ クラス別に入る補正値。
            (剣、騎、月、分、降、盾->1.0倍 弓->0.95倍 槍->1.05倍 術、殺->0.9倍
            狂、裁定、復讐->1.1倍)
          </li>
          <li>
            乱数補正 ・・・
            宝具ダメージには数値が強制的に0.9~1.1倍される乱数調整が発生する。
          </li>
        </ul>
      </v-card-text>
      <v-col style="text-align: right;">
        <v-btn
          color="red"
          text
          style="font-size: 16px;"
          @click="isResultDisplay = false"
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
      isResultDisplay: false
    }
  }
}
</script>
