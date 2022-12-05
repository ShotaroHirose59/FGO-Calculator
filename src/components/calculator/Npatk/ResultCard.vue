<template>
  <v-card class="col-md-6">
    <v-toolbar class="title" elevation="4">
      結果
    </v-toolbar>
    <!-- <v-card-subtitle>
      宝具ダメージには数値が強制的に0.9~1.099倍される乱数調整が発生する。<br />
      周回では確実に相手を倒すことが重要なので最小ダメージを参考にすると良い。
    </v-card-subtitle> -->

    <!-- ダイアログ(計算方法) -->
    <ResultDialog ref="rstDlg" />

    <SkillDialog
      ref="skillDlg"
      :class-skills="classSkills"
      :possession-skills="possessionSkills"
      :np-skills="npSkills"
      :oc-skills="ocSkills"
    />

    <v-card-text class="mt-6">
      <v-row no-gutters>
        <v-col cols="6" sm="6" md="6">
          <!-- イラストと吹き出しを差し込む -->
          <SpeechBubble
            :character-name="characterName"
            :average-damage="averageDamage"
          />
        </v-col>

        <v-col cols="6" sm="6" md="6" class="mt-8">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>TOTAL(最小)</v-list-item-subtitle>
              <v-list-item-title class="headline">{{
                minimumDamage
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>TOTAL(平均)</v-list-item-subtitle>
              <v-list-item-title class="headline">{{
                averageDamage.toLocaleString()
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-subtitle>TOTAL(最大)</v-list-item-subtitle>
              <v-list-item-title class="headline">{{
                maximumDamage
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>

        <v-col cols="6" sm="3" md="3">
          <v-select
            v-model="classCompatibility"
            label="クラス相性"
            :items="selectClassCompatibility"
            class="mr-4"
            color="teal"
          ></v-select>
        </v-col>

        <v-col cols="6" sm="3" md="3">
          <v-select
            v-model="attributeCompatibility"
            label="属性相性"
            :items="selectAttributeCompatibility"
            class="mr-4"
            color="teal"
          ></v-select>
        </v-col>

        <v-col cols="12" sm="3" md="3" style="text-align: center;">
          <v-btn color="teal" class="mt-4" outlined @click="openSkillDisplay()"
            >バフ詳細</v-btn
          >
        </v-col>

        <v-col cols="12" sm="3" md="3">
          <v-btn color="error" class="mt-4" outlined @click="reset()"
            >リセット</v-btn
          >
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import SkillDialog from '@/components/calculator/SkillDialog'
import ResultDialog from '@/components/calculator/Npatk/ResultDialog'
import SpeechBubble from '@/components/calculator/Npatk/JeanneSpeechBubble'

export default {
  components: {
    SkillDialog,
    ResultDialog,
    SpeechBubble
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
    isNpBoosted: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      classCompatibility: 2.0, // クラス相性補正 デフォルトでselectClassCompatibilityを'有利'にする
      selectClassCompatibility: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 2.0 },
        { text: '不利', value: 0.5 },
        { text: '狂・分・詐 有利', value: 1.5 }
      ],
      attributeCompatibility: 1.0, // 属性相性補正デフォルトでselectAttributeCompatibilityを'等倍'にする
      selectAttributeCompatibility: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 1.1 },
        { text: '不利', value: 0.9 }
      ]
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
    // 宝具の最小ダメージ
    minimumDamage() {
      const MINIMUM_RANDOM_NUMBER = 0.9

      return Math.floor(
        this.averageDamage * MINIMUM_RANDOM_NUMBER
      ).toLocaleString()
    },
    // 宝具の最高ダメージ
    maximumDamage() {
      const MAXIMUM__RANDOM_NUMBER = 1.099

      return Math.floor(
        this.averageDamage * MAXIMUM__RANDOM_NUMBER
      ).toLocaleString()
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
  watch: {
    // クラス相性の設定
    characterName() {
      if (
        this.characterClass === 'ルーラー' ||
        this.characterClass === 'アヴェンジャー' ||
        this.characterClass === 'ムーンキャンサー' ||
        this.characterClass === 'フォーリナー'
      ) {
        this.classCompatibility = 1.0
      } else if (
        this.characterClass === 'バーサーカー' ||
        this.characterClass === 'アルターエゴ' ||
        this.characterClass === 'プリテンダー'
      ) {
        this.classCompatibility = 1.5
      } else {
        this.classCompatibility = 2.0
      }
    }
  },
  methods: {
    openResultDisplay() {
      this.$refs.rstDlg.isResultDisplay = true
    },
    openSkillDisplay() {
      this.$refs.skillDlg.isOpen = true
    },
    reset() {
      this.classCompatibility = 2.0
      this.attributeCompatibility = 1.0
      this.$emit('reset-data')
    },
    resetCompatibility() {
      this.classCompatibility = 2.0
      this.attributeCompatibility = 1.0
    }
  }
}
</script>
