<template>
  <v-footer app color="grey darken-4" elevation="24">
    <v-row no-gutters>
      <v-col cols="9">
        <strong>NP {{ totalAcquisitionAmount }}％</strong>
        <v-progress-linear
          v-model="totalAcquisitionAmount"
          rounded
          color="yellow darken-2"
          height="10"
          reactive
        ></v-progress-linear>
        <div class="float-left mt-2">
          {{ characterName }} {{ servantNPType }}
        </div>
      </v-col>
      <v-col cols="2" class="ml-4">
        <v-img :src="image_src" width="65"></v-img>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  props: {
    characterName: {
      type: String,
      required: true
    },
    servantNPType: {
      type: [String, Number],
      required: true
    },
    cardBuff: {
      type: Number,
      required: true
    },
    npChargeAmount: {
      type: [String, Number],
      required: true
    },
    npHits: {
      type: Number,
      required: true
    },
    overkillHits: {
      type: Number,
      required: true
    },
    enemyClass: {
      type: String,
      required: true
    },
    enemyCount: {
      type: Number,
      required: true
    },
    npAcquisitionBuff: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      image_src: require('assets/altria.png')
    }
  },
  computed: {
    totalAcquisitionAmount() {
      return this.normalAcquisitionAmount + this.overAcquisitionAmount
    },
    normalAcquisitionAmount() {
      return Math.floor(
        this.npChargeAmount *
          (this.cardVal * ((100 + this.cardBuff) / 100)) *
          (this.npHits - this.overkillHits) *
          ((100 + this.npAcquisitionBuff) / 100) *
          this.enemyClassCorrection *
          this.enemyCount
      )
    },
    overAcquisitionAmount() {
      return Math.floor(
        this.npChargeAmount *
          (this.cardVal * ((100 + this.cardBuff) / 100)) *
          ((1 * (this.overkillHits * 1.5)) / 1) *
          ((100 + this.npAcquisitionBuff) / 100) *
          this.enemyClassCorrection *
          this.enemyCount
      )
    },
    // 宝具タイプ補正値
    cardVal() {
      switch (this.servantNPType) {
        case 'Arts':
          return 3.0
        case 'Quick':
          return 1.0
        default:
          return 0
      }
    },
    // クラス補正値
    enemyClassCorrection() {
      switch (this.enemyClass) {
        case 'セイバー (1.0)':
          return 1.0
        case 'アーチャー (1.0)':
          return 1.0
        case 'ランサー (1.0)':
          return 1.0
        case 'ライダー (1.1)':
          return 1.1
        case 'キャスター (1.2)':
          return 1.2
        case 'アサシン (0.9)':
          return 0.9
        case 'バーサーカー (0.8)':
          return 0.8
        case 'ルーラー (1.0)':
          return 1.0
        case 'アヴェンジャー (1.0)':
          return 1.0
        case 'ムーンキャンサー (1.2)':
          return 1.2
        case 'アルターエゴ (1.0)':
          return 1.0
        case 'フォーリナー (1.0)':
          return 1.0
        default:
          return 0
      }
    }
  },
  methods: {
    reset() {
      this.$emit('reset-val')
    }
  }
}
</script>

<style scoped></style>
