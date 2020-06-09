<template>
  <v-card class="col-md-6">
    <v-card-title class="headline" max-width="550">
      ダメージ結果
      <v-flex style="text-align: right;">
        <v-btn
          style="text-align: right;"
          outlined
          small
          fab
          color="purple lighten-1"
          @click="openResultDisplay()"
        >
          <v-icon>mdi-help</v-icon>
        </v-btn>
      </v-flex>
    </v-card-title>
    <v-card-subtitle class="mt-1">
      宝具ダメージには数値が強制的に0.9~1.1倍される乱数調整が発生する
      周回では確実に相手を倒すことが重要なので最小ダメージを参考にすると良い。
    </v-card-subtitle>

    <!-- ダイアログ(計算方法) -->
    <ResultDialog ref="rstDlg" />

    <v-container>
      <v-row no-gutters>
        <v-flex xs6 sm6 md6>
          <!-- イラストと吹き出しを差し込む -->
          <SpeechBubble
            :character-name="characterName"
            :average-damage="averageDamage"
          />
        </v-flex>

        <v-flex xs6 sm6 md6>
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
        </v-flex>

        <v-flex xs6 sm4 md4>
          <v-select
            v-model="classCompatibility"
            label="クラス相性"
            :items="selectClassCompatibility"
            class="ml-2 mr-5"
            color="teal accent-4"
          ></v-select>
        </v-flex>

        <v-flex xs6 sm4 md4>
          <v-select
            v-model="attributeCompatibility"
            label="属性相性"
            :items="selectAttributeCompatibility"
            class="ml-2 mr-5"
            color="teal accent-4"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm4 md4>
          <v-btn
            color="error"
            :block="$vuetify.breakpoint.xs"
            class="mt-3"
            outlined
            @click="reset()"
            >計算リセット</v-btn
          >
        </v-flex>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import ResultDialog from '@/components/calculator/Npatk/ResultDialog'
import SpeechBubble from '@/components/calculator/Npatk/SpeechBubble'

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
    servantNPType: {
      type: String,
      required: true
    },
    atkBuff: {
      type: Number,
      required: true
    },
    cardBuff: {
      type: Number,
      required: true
    },
    sAtkBuff: {
      type: Number,
      required: true
    },
    npBuff: {
      type: Number,
      required: true
    },
    sNpAtkBuff: {
      type: Number,
      required: true
    },
    dressAtk: {
      type: Number,
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
      switch (this.servantNPType) {
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

<style scoped>
.v-card {
  border: solid teal 1px;
  margin: 5px 10px;
}
</style>
