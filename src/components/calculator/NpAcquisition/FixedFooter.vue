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
      const result = Math.floor(this.acquisitionAmount)

      if (result === 99) {
        return 100
      } else {
        return result
      }
    },
    acquisitionAmount() {
      const base = Math.floor(
        100 *
          this.npRate *
          this.cardVal *
          ((100 + this.cardBuff) / 100) *
          ((100 + this.npAcquisitionBuff) / 100) *
          this.enemyClassCorrection
      )
      const result =
        ((base * (this.npHits + 0.5 * this.overkillHits)) / 100) *
        this.enemyCount

      if (this.characterName === '水着宇津見エリセ') {
        return result + 4.2
      } else if (this.characterName === '水着カーマ') {
        return result + 3.8
      } else if (
        this.characterName === 'スペースイシュタル' ||
        this.characterName === 'ヘシアン･ロボ'
      ) {
        return result + 3.5
      } else if (this.characterName === 'サリエリ') {
        return result + 3.3
      } else if (
        this.characterName === 'ディオスクロイ' ||
        this.characterName === '水着イリヤ' ||
        this.characterName === '巌窟王' ||
        this.characterName === '平景清' ||
        this.characterName === '謎の蘭丸X'
      ) {
        return result + 3
      } else if (this.characterName === 'アンリマユ') {
        return result + 2
      } else {
        return result
      }
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
        case '0.8（狂）':
          return 0.8
        case '0.9（殺）':
          return 0.9
        case '1.1（騎）':
          return 1.1
        case '1.2（術・月）':
          return 1.2
        default:
          return 1.0
      }
    }
  }
}
</script>
