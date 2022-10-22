<template>
  <v-dialog
    v-model="isDisplay"
    scrollable
    max-width="1200px"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar height="64px">
        <client-only>
          <v-icon
            v-if="$vuetify.breakpoint.xs"
            class="mr-2"
            large
            @click="isDisplay = false"
          >
            mdi-chevron-left
          </v-icon>
        </client-only>
        <v-toolbar-title class="ml-2">ヘルプ</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <h3 class="mt-4 mb-2">
          使い方
        </h3>
        <client-only>
          <p v-if="!$vuetify.breakpoint.xs">
            ①クラスの選択後、サーヴァントを選択してください。<br />
            ②サーヴァントを選択すると「ダメージ結果」が自動で反映されます。<br />
            ③入力値を変更すると「ダメージ結果」が更新されます。
          </p>

          <p v-if="$vuetify.breakpoint.xs">
            ①クラスの選択後、サーヴァントを選択してください。<br />
            ②サーヴァントを選択すると「ダメージ結果」が自動で反映されます。<br />
            ③入力値を変更すると「ダメージ結果」が更新されます。<br />
            ④邪ンヌ、アルトリア・オルタをタッチすると2人のセリフを楽しめます。
          </p>
        </client-only>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          入力項目の詳細
        </h3>
        <ul>
          <li class="mb-2">
            攻撃力UP ・・・ 攻撃力UPバフ
          </li>
          <li class="mb-2">
            カード性能UP ・・・ カード性能UPバフ
          </li>
          <li class="mb-2">
            特攻バフ ・・・ 特攻付与スキル (例 スカサハの〔神性〕特攻を付与)
          </li>
          <li class="mb-2">
            宝具威力UP ・・・ 宝具威力UPバフ
          </li>
          <li class="mb-2">
            特攻宝具 ・・・ 宝具時に乗る特攻バフ (例 ギルのサーヴァント特攻)
          </li>
          <li class="mb-2">
            礼装ATK ・・・ 概念礼装のATK
          </li>
        </ul>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          計算方法
        </h3>
        <p>
          宝具ダメージ = <br />
          ATK × 宝具倍率 × 0.23 × (カード補正 × カードバフ) × クラス相性補正 ×
          属性相性補正 × クラス補正 × 乱数補正 × 攻撃力バフ × (特攻バフ +
          宝具威力アップ) × 特攻宝具
        </p>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          計算項目の説明
        </h3>
        <ul>
          <li class="mb-2">
            0.23 ・・・ FGOのダメージ計算で必ず入る補正値。<br />
          </li>
          <li class="mb-2">
            カード補正 ・・・ 宝具タイプによって入る補正値
            (バスター1.5倍、アーツ1.0倍、クイック0.8倍)
          </li>
          <li class="mb-2">
            クラス相性補正 ・・・
            クラス相性によって入る補正値。(アルターエゴは1.5倍とする)
          </li>
          <li class="mb-2">
            属性相性補正 ・・・ FGOの裏設定である属性相性によって入る補正値。
            (等倍1.0倍、有利1.1倍、 不利0.9倍)
          </li>
          <li class="mb-2">
            クラス補正 ・・・ クラス別に入る補正値。
            (剣、騎、月、分、降、盾->1.0倍 弓->0.95倍 槍->1.05倍 術、殺->0.9倍
            狂、裁定、復讐->1.1倍)
          </li>
          <li class="mb-2">
            乱数補正 ・・・
            宝具ダメージには数値が強制的に0.9~1.099倍される乱数調整が発生する。
          </li>
        </ul>
      </v-card-text>
      <client-only>
        <v-col v-if="!$vuetify.breakpoint.xs" style="text-align: right;">
          <v-btn
            color="red"
            text
            style="font-size: 16px;"
            @click="isDisplay = false"
          >
            Close
          </v-btn>
        </v-col>
      </client-only>
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
