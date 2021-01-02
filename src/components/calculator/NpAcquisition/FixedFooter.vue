<template>
  <v-footer app fixed height="64" color="grey darken-4" elevation="24">
    <v-row no-gutters>
      <v-col cols="9">
        <v-progress-linear
          :value="totalAcquisitionAmount"
          rounded
          color="yellow darken-2"
          height="10"
          reactive
          class="mt-4"
        ></v-progress-linear>
        <strong>NP {{ totalAcquisitionAmount }}％</strong>
      </v-col>

      <v-col cols="3">
        <v-img
          :src="image_src"
          width="56"
          class="ml-4"
          @click="displayDetails()"
        ></v-img>
      </v-col>

      <!-- 結果の詳細 -->
      <ResultDetails
        ref="Details"
        :character-name="characterName"
        :servant-np-type="servantNpType"
        :total-acquisition-amount="totalAcquisitionAmount"
      />
    </v-row>
  </v-footer>
</template>

<script>
import ResultDetails from '@/components/calculator/NpAcquisition/ResultDetails'
export default {
  components: {
    ResultDetails
  },
  props: {
    characterName: {
      type: String,
      required: true
    },
    servantNpType: {
      type: [String, Number],
      required: true
    },
    cardBuff: {
      type: [String, Number],
      required: true
    },
    npRate: {
      type: [String, Number],
      required: true
    },
    npHits: {
      type: Number,
      required: true
    },
    overkillHits: {
      type: [String, Number],
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
      type: [String, Number],
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
        this.npRate *
          (this.cardVal * ((100 + this.cardBuff) / 100)) *
          (this.npHits - this.overkillHits) *
          ((100 + this.npAcquisitionBuff) / 100) *
          this.enemyClassCorrection *
          this.enemyCount
      )
    },
    overAcquisitionAmount() {
      return Math.floor(
        this.npRate *
          (this.cardVal * ((100 + this.cardBuff) / 100)) *
          ((1 * (this.overkillHits * 1.5)) / 1) *
          ((100 + this.npAcquisitionBuff) / 100) *
          this.enemyClassCorrection *
          this.enemyCount
      )
    },
    // 宝具タイプ補正値
    cardVal() {
      switch (this.servantNpType) {
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
    displayDetails() {
      this.$refs.Details.isResultDetails = true
    }
  }
}
</script>

<style scoped></style>
