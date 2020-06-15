<template>
  <v-card class="col-md-12 mt-6">
    <v-card-title class="headline">
      NP獲得結果
      <v-row no-gutters>
        <v-col style="text-align: right;">
          <v-btn
            outlined
            small
            fab
            class="mr-2"
            color="purple lighten-1"
            @click="openResultDisplay()"
          >
            <v-icon>mdi-help</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-title>

    <!-- ダイアログ(計算方法) -->
    <ResultDialog ref="rstDlg" />

    <v-card-text>
      <v-row no-gutters>
        <v-col cols="6" sm="6" md="5">
          <strong class="title">NP {{ totalAcquisitionAmount }}％</strong>
          <v-progress-linear
            v-model.number="totalAcquisitionAmount"
            rounded
            color="amber"
            height="10"
            reactive
          ></v-progress-linear>
          <v-list-item class="mt-2">
            <v-list-item-content>
              <v-list-item-title>
                サーヴァント: {{ characterName }}</v-list-item-title
              >
              <v-list-item-title> 宝具: {{ servantNpType }}</v-list-item-title>
              <v-list-item-title> 宝具ヒット数: {{ npHits }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>

        <v-col class="ml-5" md="5">
          <SpeechBubble
            :character-name="characterName"
            :total-acquisition-amount="totalAcquisitionAmount"
          />
        </v-col>

        <v-col class="mt-10" style="text-align: right;" md="1">
          <v-btn color="error" class="mt-10" outlined @click="reset()"
            >計算リセット</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import ResultDialog from '@/components/calculator/NpAcquisition/ResultDialog'
import SpeechBubble from '@/components/calculator/NpAcquisition/SpeechBubble'

export default {
  components: {
    ResultDialog,
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
      type: Number,
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
    openResultDisplay() {
      this.$refs.rstDlg.isResultDisplay = true
    },
    reset() {
      this.$emit('reset-val')
    }
  }
}
</script>

<style scoped></style>
