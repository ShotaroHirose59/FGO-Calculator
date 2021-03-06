<template>
  <v-card class="col-md-6">
    <v-toolbar class="title" elevation="4">
      宝具ダメージ 結果
      <v-row no-gutters>
        <v-col style="text-align: right;">
          <v-btn
            style="text-align: right;"
            outlined
            small
            fab
            class="mr-4"
            color="purple lighten-1"
            @click="openResultDisplay()"
          >
            <v-icon>mdi-help</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
    <v-card-subtitle>
      宝具ダメージには数値が強制的に0.9~1.1倍される乱数調整が発生する。<br />
      周回では確実に相手を倒すことが重要なので最小ダメージを参考にすると良い。
    </v-card-subtitle>

    <!-- ダイアログ(計算方法) -->
    <ResultDialog ref="rstDlg" />

    <v-card-text>
      <v-row no-gutters>
        <v-col cols="6" sm="6" md="6">
          <!-- イラストと吹き出しを差し込む -->
          <SpeechBubble
            :character-name="characterName"
            :average-damage="averageDamage"
          />
        </v-col>

        <v-col cols="6" sm="6" md="6" class="mt-8">
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

        <v-col cols="6" sm="4" md="4">
          <v-select
            v-model="classCompatibility"
            label="クラス相性"
            :items="selectClassCompatibility"
            class="mr-4"
            color="teal"
          ></v-select>
        </v-col>

        <v-col cols="6" sm="4" md="4">
          <v-select
            v-model="attributeCompatibility"
            label="属性相性"
            :items="selectAttributeCompatibility"
            class="mr-4"
            color="teal"
          ></v-select>
        </v-col>

        <v-col cols="12" sm="4" md="4" style="text-align: center;">
          <v-btn color="error" class="mt-4" outlined @click="reset()"
            >計算リセット</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ResultDialog from '@/components/calculator/Npatk/ResultDialog'
import SpeechBubble from '@/components/calculator/Npatk/JeanneSpeechBubble'

export default {
  components: {
    ResultDialog,
    SpeechBubble
  },
  props: {
    characterClass: {
      type: String,
      required: true
    },
    characterName: {
      type: String,
      required: true
    },
    characterAtk: {
      type: [String, Number],
      required: true
    },
    npChargeLv: {
      type: [String, Number],
      required: true
    },
    characterNpmultiplier: {
      type: [String, Number],
      required: true
    },
    servantNpType: {
      type: String,
      required: true
    },
    atkBuff: {
      type: [String, Number],
      required: true
    },
    cardBuff: {
      type: [String, Number],
      required: true
    },
    sAtkBuff: {
      type: [String, Number],
      required: true
    },
    npBuff: {
      type: [String, Number],
      required: true
    },
    sNpAtkBuff: {
      type: [String, Number],
      required: true
    },
    dressAtk: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      classCompatibility: 2.0, // クラス相性補正 デフォルトでselectClassCompatibilityを'有利'にする
      selectClassCompatibility: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 2.0 },
        { text: '不利', value: 0.5 },
        { text: '狂・分 有利', value: 1.5 }
      ],
      attributeCompatibility: 1.0, // 属性相性補正デフォルトでselectAttributeCompatibilityを'等倍'にする
      selectAttributeCompatibility: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 1.1 },
        { text: '不利', value: 0.9 }
      ]
    }
  },
  computed: {
    // 宝具の平均ダメージ 乱数調整1.0倍 (100で割ってる箇所は数値を％として扱っているから)
    // 0.23はFGOのダメージ処理で必ず入る固定補正値
    averageDamage() {
      return Math.floor(
        (this.characterAtk + this.dressAtk) *
          (this.characterNpmultiplier / 100) *
          0.23 *
          (this.cardVal * ((100 + this.cardBuff) / 100)) *
          this.classCompatibility *
          this.attributeCompatibility *
          this.classCorrection *
          ((100 + this.atkBuff) / 100) *
          ((100 + this.sAtkBuff + this.npBuff) / 100) *
          ((100 + this.sNpAtkBuff) / 100)
      )
    },
    // 宝具の最小ダメージ 乱数調整0.9倍
    minimumDamage() {
      return Math.floor(this.averageDamage * 0.9).toLocaleString()
    },
    // 宝具の最高ダメージ 乱数調整1.1倍
    maximumDamage() {
      return Math.floor(this.averageDamage * 1.1).toLocaleString()
    },
    // クラス補正値
    classCorrection() {
      switch (this.characterClass) {
        case 'セイバー':
          return 1.0
        case 'ライダー':
          return 1.0
        case 'ムーンキャンサー':
          return 1.0
        case 'アルターエゴ':
          return 1.0
        case 'フォーリナー':
          return 1.0
        case 'アーチャー':
          return 0.95
        case 'ランサー':
          return 1.05
        case 'キャスター':
          return 0.9
        case 'アサシン':
          return 0.9
        case 'バーサーカー':
          return 1.1
        case 'ルーラー':
          return 1.1
        case 'アヴェンジャー':
          return 1.1
        default:
          return 0
      }
    },
    // 宝具タイプ補正値
    cardVal() {
      switch (this.servantNpType) {
        case 'Buster':
          return 1.5
        case 'Arts':
          return 1.0
        case 'Quick':
          return 0.8
        default:
          return 0
      }
    }
  },
  methods: {
    openResultDisplay() {
      this.$refs.rstDlg.isResultDisplay = true
    },
    reset() {
      this.classCompatibility = 2.0
      this.attributeCompatibility = 1.0
      this.$emit('reset-val')
    }
  }
}
</script>

<style scoped></style>
