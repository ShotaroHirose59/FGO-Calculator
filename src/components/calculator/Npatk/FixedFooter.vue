<template>
  <v-footer app fixed height="72" color="grey darken-4" elevation="24">
    <v-row no-gutters>
      <v-col cols="3">
        <v-img
          :src="image_src"
          width="56"
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
        <v-img :src="image_src2" width="56" class="ml-8"></v-img>
      </v-col>

      <!-- 結果の詳細-->
      <JeanneResultDetails
        ref="DetailsJ"
        :character-name="characterName"
        :servant-np-type="servantNpType"
        :average-damage="averageDamage"
      />
    </v-row>
  </v-footer>
</template>

<script>
import JeanneResultDetails from '@/components/calculator/Npatk/JeanneResultDetails'

export default {
  components: {
    JeanneResultDetails
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
    isNpBoosted: {
      type: Boolean,
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
    averageDamage() {
      // 固定補正値
      const FIXED_CORRECTION_NUMBER = 0.23

      return Math.floor(
        (this.characterAtk + this.fou + this.dressAtk) *
          (this.characterNpmultiplier / 100) *
          FIXED_CORRECTION_NUMBER *
          (this.cardVal * ((100 + this.cardBuff) / 100)) *
          this.classCompatibility *
          this.attributeCompatibility *
          this.classCorrection *
          ((100 + this.atkBuff) / 100) *
          ((100 + this.sAtkBuff + this.actualNpBuff) / 100) *
          (this.sNpAtkBuff / 100)
      )
    },
    actualNpBuff() {
      if (this.isNpBoosted) return this.npBuff * 2

      return this.npBuff
    },
    // クラス補正値
    classCorrection() {
      if (this.characterClass === 'アーチャー') {
        return 0.95
      } else if (this.characterClass === 'ランサー') {
        return 1.05
      } else if (
        this.characterClass === 'キャスター' ||
        this.characterClass === 'アサシン'
      ) {
        return 0.9
      } else if (
        this.characterClass === 'バーサーカー' ||
        this.characterClass === 'ルーラー' ||
        this.characterClass === 'アヴェンジャー'
      ) {
        return 1.1
      } else {
        return 1.0
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
    }
  }
}
</script>

<style scoped>
.v-list-item__content {
  padding: 4px 0;
}
.v-list-item__subtitle {
  font-size: 0.7rem;
}
</style>
