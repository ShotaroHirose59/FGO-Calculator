<template>
  <v-footer app fixed height="56" color="grey darken-4" elevation="24">
    <v-row no-gutters>
      <v-col cols="3">
        <v-img
          :src="image_src"
          width="48"
          @click="displayJeanneDetails()"
        ></v-img>
      </v-col>
      <v-col cols="6" style="text-align: center;">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>TOTAL</v-list-item-subtitle>
            <h2>{{ averageDamage.toLocaleString() }}</h2>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="3">
        <v-img
          :src="image_src2"
          width="48"
          class="ml-8"
          @click="displayAltriaDetails()"
        ></v-img>
      </v-col>

      <!-- 結果の詳細-->
      <JeanneResultDetails
        ref="DetailsJ"
        :character-name="characterName"
        :servant-np-type="servantNpType"
        :average-damage="averageDamage"
      />

      <!-- 結果の詳細-->
      <AltriaResultDetails
        ref="DetailsA"
        :character-name="characterName"
        :servant-np-type="servantNpType"
        :average-damage="averageDamage"
      />
    </v-row>
  </v-footer>
</template>

<script>
import JeanneResultDetails from '@/components/calculator/Npatk/JeanneResultDetails'
import AltriaResultDetails from '@/components/calculator/Npatk/AltriaResultDetails'

export default {
  components: {
    JeanneResultDetails,
    AltriaResultDetails
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
    fou: {
      type: Number,
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
    },
    classCompatibility: {
      type: Number,
      required: true
    },
    attributeCompatibility: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      image_src: require('assets/jeannearuta.png'),
      image_src2: require('assets/altria.png')
    }
  },
  computed: {
    // 宝具の平均ダメージ 乱数調整1.0倍 (100で割ってる箇所は数値を％として扱っているから)
    // 0.23はFGOのダメージ処理で必ず入る固定補正値
    averageDamage() {
      return Math.floor(
        (this.characterAtk + this.fou + this.dressAtk) *
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
        case 'プリテンダー':
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
    displayJeanneDetails() {
      this.$refs.DetailsJ.isJeanneResultDetails = true
    },
    displayAltriaDetails() {
      this.$refs.DetailsA.isAltriaResultDetails = true
    }
  }
}
</script>

<style scoped>
.v-list-item__content {
  padding: 4px 0;
}
</style>
