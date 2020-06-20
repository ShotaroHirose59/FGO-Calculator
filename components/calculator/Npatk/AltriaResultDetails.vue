<template>
  <v-dialog v-model="isAltriaResultDetails" scrollable>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>ダメージ結果 ＆ 漆黒の騎士王</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-row no-gutters>
          <v-col cols="6" sm="6" md="6" class="mt-8">
            <SpeechBubble
              :character-name="characterName"
              :average-damage="averageDamage"
            />
          </v-col>

          <v-col cols="6" sm="6" md="6" class="mt-12">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>TOTAL(最小)</v-list-item-subtitle>
                <v-list-item-title class="headline">{{
                  minimumDamage
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>TOTAL(平均)</v-list-item-subtitle>
                <v-list-item-title class="headline">{{
                  averageDamage.toLocaleString()
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>TOTAL(最大)</v-list-item-subtitle>
                <v-list-item-title class="headline">{{
                  maximumDamage
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-divider class="mt-8"></v-divider>
        <h3 class="mt-4 mb-1">
          計算方法
        </h3>
        <p>
          宝具ダメージ ＝ <br />
          ATK × 宝具倍率 × 0.23 × (カード補正 × カードバフ) × クラス相性補正 ×
          属性相性補正 × クラス補正 × 乱数補正 × 攻撃力バフ × (特攻バフ +
          宝具威力アップ) × 特攻宝具
        </p>
        <v-divider class="mt-8"></v-divider>
        <h3 class="mt-4 mb-1">
          計算項目の説明
        </h3>
        <ul>
          <li class="mb-1">
            0.23 ・・・ FGOのダメージ計算で必ず入る補正値。<br />
          </li>
          <li class="mb-1">
            カード補正 ・・・ 宝具タイプによって入る補正値
            (バスター1.5倍、アーツ1.0倍、クイック0.8倍)
          </li>
          <li class="mb-1">
            クラス相性補正 ・・・
            クラス相性によって入る補正値。(アルターエゴは1.5倍とする)
          </li>
          <li class="mb-1">
            属性相性補正 ・・・ FGOの裏設定である属性相性によって入る補正値。
            (等倍1.0倍、有利1.1倍、 不利0.9倍)
          </li>
          <li class="mb-1">
            クラス補正 ・・・ クラス別に入る補正値。
            (剣、騎、月、分、降、盾->1.0倍 弓->0.95倍 槍->1.05倍 術、殺->0.9倍
            狂、裁定、復讐->1.1倍)
          </li>
          <li class="mb-1">
            乱数補正 ・・・
            宝具ダメージには数値が強制的に0.9~1.1倍される乱数調整が発生する。
          </li>
        </ul>
      </v-card-text>
      <v-col style="text-align: right;">
        <v-btn
          color="red"
          text
          style="font-size: 18px;"
          @click="isAltriaResultDetails = false"
        >
          Close
        </v-btn>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
import SpeechBubble from '@/components/calculator/Npatk/AltriaSpeechBubble'

export default {
  components: {
    SpeechBubble
  },
  props: {
    characterName: {
      type: String,
      required: true
    },
    averageDamage: {
      type: Number,
      required: true
    },
    servantNpType: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      image_src: require('assets/altria.png'),
      isAltriaResultDetails: false
    }
  },
  computed: {
    // 宝具の最小ダメージ 乱数調整0.9倍
    minimumDamage() {
      return Math.floor(this.averageDamage * 0.9).toLocaleString()
    },
    // 宝具の最高ダメージ 乱数調整1.1倍
    maximumDamage() {
      return Math.floor(this.averageDamage * 1.1).toLocaleString()
    }
  }
}
</script>
