<template>
  <v-footer app fixed height="72" color="grey darken-4" elevation="24">
    <v-row no-gutters>
      <v-col cols="8">
        <v-progress-linear
          :value="totalAcquisitionAmount"
          rounded
          color="yellow darken-2"
          height="10"
          reactive
          class="mt-4 mb-2"
        ></v-progress-linear>
        <strong class="mt-1">
          NP {{ totalAcquisitionAmount }}％
          <span v-if="npRecharge > 0" style="font-size: 14px">
            + リチャージ {{ npRecharge }}％
          </span>
        </strong>
      </v-col>

      <v-col cols="4">
        <v-img :src="image_src" width="56" class="ml-8"></v-img>
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
    },
    npRecharge: {
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
        case '1.0':
          return 1.0
        case '0.8(狂)':
          return 0.8
        case '0.9(殺)':
          return 0.9
        case '1.1(騎)':
          return 1.1
        case '1.2(術・月)':
          return 1.2
        default:
          return 1.0
      }
    }
  }
}
</script>
