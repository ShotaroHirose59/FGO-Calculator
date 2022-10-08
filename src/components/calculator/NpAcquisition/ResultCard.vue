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
          <strong class="title">NP {{ totalAcquisitionAmount }}％</strong>
          <v-progress-linear
            :value="totalAcquisitionAmount"
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
            :total-acquisition-amount="totalAcquisitionAmount"
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
    }
  },
  data() {
    return {}
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
    openSkillDisplay() {
      this.$refs.skillDlg.isOpen = true
    },
    reset() {
      this.$emit('reset-val')
    }
  }
}
</script>

<style scoped></style>
