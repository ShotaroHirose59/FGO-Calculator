<template>
  <v-card class="col-md-6">
    <v-toolbar class="title" elevation="4">
      結果
    </v-toolbar>

    <SkillDialog
      ref="skillDlg"
      :class-skills="classSkills"
      :possession-skills="possessionSkills"
      :np-skills="npSkills"
      :oc-skills="ocSkills"
    />

    <v-card-text class="mt-12">
      <v-row no-gutters>
        <v-col cols="6" sm="6" md="6">
          <strong class="title">
            NP {{ acquisitionAmountResult }}％
            <span v-if="npRecharge > 0" style="font-size: 16px">
              + リチャージ {{ npRecharge }}％
            </span>
          </strong>
          <v-progress-linear
            :value="acquisitionAmountResult"
            rounded
            class="mt-2"
            color="amber"
            height="10"
            reactive
          ></v-progress-linear>
          <v-list-item class="mt-4">
            <v-list-item-content>
              <v-list-item-title class="mt-1"
                >NPレート : {{ npRate }}</v-list-item-title
              >
              <v-list-item-title class="mt-1"
                >宝具ヒット数 : {{ npHits }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-btn
            color="teal"
            class="mt-4 mr-4"
            outlined
            @click="openSkillDisplay()"
            >バフ詳細</v-btn
          >
          <v-btn color="error" class="mt-4" outlined @click="reset()"
            >リセット</v-btn
          >
        </v-col>

        <v-col class="ml-4" sm="4" md="5">
          <SpeechBubble
            :character-name="characterName"
            :acquisition-amount-result="acquisitionAmountResult"
          />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import SkillDialog from '@/components/calculator/SkillDialog'
import SpeechBubble from '@/components/calculator/NpAcquisition/SpeechBubble'

export default {
  components: {
    SkillDialog,
    SpeechBubble
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
    },
    classSkills: {
      type: Array,
      required: true
    },
    possessionSkills: {
      type: Array,
      required: true
    },
    npSkills: {
      type: Array,
      required: true
    },
    ocSkills: {
      type: Array,
      required: true
    },
    npRecharge: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    acquisitionAmountResult() {
      const calcResult = Math.floor(this.calculatedAcquisitionAmount)
      if (this.shouldForceMax(calcResult)) return 100

      return calcResult
    },
    calculatedAcquisitionAmount() {
      const calcBase = Math.floor(
        100 *
          this.npRate *
          this.cardVal *
          ((100 + this.cardBuff) / 100) *
          ((100 + this.npAcquisitionBuff) / 100) *
          this.enemyClassCorrection
      )
      const calcResult =
        ((calcBase * (this.npHits + 0.5 * this.overkillHits)) / 100) *
        this.enemyCount

      if (this.characterName === '水着宇津見エリセ') {
        return calcResult + 4.2
      } else if (this.characterName === '水着カーマ') {
        return calcResult + 3.8
      } else if (
        this.characterName === 'スペースイシュタル' ||
        this.characterName === 'ヘシアン･ロボ'
      ) {
        return calcResult + 3.5
      } else if (this.characterName === 'サリエリ') {
        return calcResult + 3.3
      } else if (
        this.characterName === 'ディオスクロイ' ||
        this.characterName === '水着イリヤ' ||
        this.characterName === '巌窟王' ||
        this.characterName === '平景清' ||
        this.characterName === '謎の蘭丸X'
      ) {
        return calcResult + 3
      } else if (this.characterName === 'アンリマユ') {
        return calcResult + 2
      } else {
        return calcResult
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
  },
  methods: {
    shouldForceMax(num) {
      if (num === 99) return true

      return false
    },
    openSkillDisplay() {
      this.$refs.skillDlg.isOpen = true
    },
    reset() {
      this.$emit('reset-data')
    }
  }
}
</script>
