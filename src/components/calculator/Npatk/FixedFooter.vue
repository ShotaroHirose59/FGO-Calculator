<template>
  <v-footer app fixed height="64" elevation="24">
    <v-row no-gutters>
      <!-- <v-col cols="3">
        <v-img
          :src="image_src"
          width="56"
          @click="displayJeanneDetails()"
        ></v-img>
      </v-col> -->
      <v-col cols="4" style="text-align: center;">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>最小</v-list-item-subtitle>
            <h4 class="damage-text">{{ minimumDamage }}</h4>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4" style="text-align: center;">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>平均</v-list-item-subtitle>
            <h4 class="damage-text">
              {{ (averageDamage + damageAdditionBuff).toLocaleString() }}
            </h4>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col cols="4" style="text-align: center;">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>最大</v-list-item-subtitle>
            <h4 class="damage-text">{{ maximumDamage }}</h4>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <!-- <v-col cols="3">
        <v-img :src="image_src2" width="56" class="ml-8"></v-img>
      </v-col> -->

      <!-- 結果の詳細-->
      <!-- <JeanneResultDetails
        ref="DetailsJ"
        :character-name="characterName"
        :servant-np-type="servantNpType"
        :average-damage="averageDamage"
      /> -->
    </v-row>
  </v-footer>
</template>

<script>
// import JeanneResultDetails from '@/components/calculator/Npatk/JeanneResultDetails'

export default {
  // components: {
  //   JeanneResultDetails
  // },
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
    },
    damageAdditionBuff: {
      type: Number,
      required: true
    },
    dressNpBuff: {
      type: Number,
      required: true
    },
    dressSatkBuff: {
      type: Number,
      required: true
    },
    dressCardBuff: {
      type: Number,
      required: true
    },
    specialResist: {
      type: Number,
      required: true
    },
    selectingOcUpPrcentage: {
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
    // 宝具の最小ダメージ
    minimumDamage() {
      const MINIMUM_RANDOM_NUMBER = 0.9

      return Math.floor(
        this.averageDamage * MINIMUM_RANDOM_NUMBER + this.damageAdditionBuff
      ).toLocaleString()
    },
    // 宝具の最高ダメージ
    maximumDamage() {
      const MAXIMUM__RANDOM_NUMBER = 1.099

      return Math.floor(
        this.averageDamage * MAXIMUM__RANDOM_NUMBER + this.damageAdditionBuff
      ).toLocaleString()
    },
    averageDamage() {
      // 固定補正値
      const FIXED_CORRECTION_NUMBER = 0.23

      // const sAtkBuff = this.sAtkBuff === '' ? 0 : this.sAtkBuff
      const specialResist = (100 - this.specialResist) * 0.01

      let result = Math.floor(
        (this.characterAtk + this.fou + this.dressAtk) *
          (this.characterNpmultiplier / 100) *
          FIXED_CORRECTION_NUMBER *
          (this.cardVal * ((100 + this.actualCardBuff) / 100)) *
          this.classCompatibility *
          this.attributeCompatibility *
          this.classCorrection *
          ((100 + this.atkBuff) / 100) *
          ((100 + this.actualSatkBuff + this.actualNpBuff) / 100) *
          (this.sNpAtkBuff / 100) *
          specialResist
      )
      if (
        this.characterName === 'ビーマ' &&
        this.selectingOcUpPrcentage !== 1
      ) {
        let npmultiplier = 0
        switch (this.selectingOcUpPrcentage) {
          case 2:
            npmultiplier = 200
            break
          case 3:
            npmultiplier = 300
            break
          case 4:
            npmultiplier = 400
            break
          case 5:
            npmultiplier = 500
            break
        }
        result += Math.floor(
          (this.characterAtk + this.fou + this.dressAtk) *
            (npmultiplier / 100) *
            FIXED_CORRECTION_NUMBER *
            (this.cardVal * ((100 + this.actualCardBuff) / 100)) *
            this.classCompatibility *
            this.attributeCompatibility *
            this.classCorrection *
            ((100 + this.atkBuff) / 100) *
            ((100 + this.actualSatkBuff + this.actualNpBuff) / 100) *
            (this.sNpAtkBuff / 100) *
            specialResist
        )
      }
      return result
    },
    actualNpBuff() {
      let npBuff = this.npBuff === '' ? 0 : this.npBuff
      npBuff += this.dressNpBuff
      if (this.isNpBoosted) return npBuff * 2

      return npBuff
    },
    actualSatkBuff() {
      let sAtkBuff = this.sAtkBuff === '' ? 0 : this.sAtkBuff
      sAtkBuff += this.dressSatkBuff

      return sAtkBuff
    },
    actualCardBuff() {
      return this.cardBuff + this.dressCardBuff
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

<style scoped lang="scss">
.v-footer {
  border-top: 1px solid hsla(0, 0%, 100%, 0.12);
}
.v-list-item__content {
  padding: 4px 0;
}
.v-list-item__subtitle {
  font-size: 0.7rem;
}
.damage-text {
  font-size: 18px;
  @media screen and (max-width: 393px) {
    font-size: 16px;
  }
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }
}
</style>
