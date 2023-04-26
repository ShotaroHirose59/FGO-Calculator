<template>
  <v-card class="col-md-6">
    <v-toolbar v-if="!$vuetify.breakpoint.xs" class="title" elevation="4">
      結果
    </v-toolbar>

    <SkillDialog
      ref="skillDlg"
      :class-skills="classSkills"
      :possession-skills="possessionSkills"
      :np-skills="npSkills"
      :oc-skills="ocSkills"
    />

    <v-card-text>
      <p>各Hitまでの累計ダメージと獲得NP</p>
      <v-row no-gutters>
        <v-col cols="12" sm="8" md="8">
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="6">
              <v-select
                v-model="enemyClass"
                label="敵クラス"
                :items="enemyClasses"
                class="mr-4"
                color="teal"
              ></v-select>
            </v-col>

            <v-col cols="6" sm="3" md="3">
              <v-select
                v-model="attributeCompatibility"
                label="属性相性"
                :items="attributeCompatibilities"
                class="mr-4"
                color="teal"
              ></v-select>
            </v-col>

            <v-col cols="6" sm="3" md="3">
              <v-select
                v-model="selectedEnemyCount"
                label="敵の数"
                :items="selectEnemyCount"
                class="mr-4"
                color="teal"
              ></v-select>
            </v-col>
          </v-row>
          <v-simple-table style="color: white" dense>
            <template>
              <thead>
                <tr>
                  <th>オバキル判定</th>
                  <th>獲得NP</th>
                  <th>累計ダメ(最小)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(damege, index) in damegeArry" :key="index">
                  <td>{{ index + 1 }}Hit目</td>
                  <td>
                    {{
                      Number(
                        calculatedAcquisitionAmount(
                          (overkillHitCount = index)
                        ).toFixed(1)
                      )
                    }}
                  </td>
                  <td>{{ Math.floor(damege).toLocaleString() }}</td>
                </tr>
                <tr>
                  <td>なし</td>
                  <td>
                    {{
                      Number(
                        calculatedAcquisitionAmount(
                          (overkillHitCount = null)
                        ).toFixed(1)
                      )
                    }}
                  </td>
                  <td>
                    {{
                      damegeArry.length > 0
                        ? Math.floor(damegeArry.slice(-1)[0]).toLocaleString()
                        : 0
                    }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <ul class="mt-4">
            <li>
              宝具後リチャージ：
              {{ npRecharge > 0 ? `${npRecharge}` : 'なし' }}
            </li>
            <li>
              毎ターンNP獲得：
              {{ classSkillNp > 0 ? `${classSkillNp}` : 'なし' }}
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <p class="mt-4 mx-4">メモ</p>
          <div class="mt-4 mx-4">
            <v-text-field
              v-model.number="enemyFirstNp"
              label="敵1 獲得NP"
              outlined
              color="teal"
              type="number"
              inputmode="decimal"
              dense
            ></v-text-field>
            <v-text-field
              v-model.number="enemySecondNp"
              label="敵2 獲得NP"
              outlined
              color="teal"
              type="number"
              inputmode="decimal"
              dense
            ></v-text-field>
            <v-text-field
              v-model.number="enemyThirdNp"
              label="敵3 獲得NP"
              outlined
              color="teal"
              type="number"
              inputmode="decimal"
              dense
            ></v-text-field>
            <div>
              Total：
              <span class="font-weight-bold" style="font-size: 20px;">
                {{ Math.floor(totalNp) }} %
              </span>
            </div>
          </div>

          <div class="btn-group mt-8 mx-4">
            <v-btn
              color="teal"
              class="mr-4"
              outlined
              @click="openSkillDisplay()"
              >バフ詳細</v-btn
            >
            <v-btn color="error" class="mr-4 pl-4" outlined @click="reset()">
              リセット
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import SkillDialog from '@/components/calculator/SkillDialog'

export default {
  components: {
    SkillDialog
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
    npAcquisitionBuff: {
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
    },
    npHitCount: {
      type: Number,
      required: true
    },
    npRate: {
      type: Number,
      required: true
    },
    npRange: {
      type: String,
      required: true
    },
    npRecharge: {
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
    specialResist: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      enemyClasses: [
        'セイバー',
        'アーチャー',
        'ランサー',
        'ライダー',
        'アサシン',
        'キャスター',
        'バーサーカー',
        'ルーラー',
        'アヴェンジャー',
        'ムーンキャンサー',
        'アルターエゴ',
        'フォーリナー',
        'プリテンダー'
      ],
      enemyClass: 'バーサーカー',
      attributeCompatibilities: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 1.1 },
        { text: '不利', value: 0.9 }
      ],
      attributeCompatibility: 1.0,
      selectEnemyCount: [1, 2, 3, 4, 5, 6],
      selectedEnemyCount: 3,
      enemyFirstNp: 0,
      enemySecondNp: 0,
      enemyThirdNp: 0,
      classSkillNp: 0
    }
  },
  computed: {
    totalNp() {
      const firstNp = this.enemyFirstNp === '' ? 0 : Number(this.enemyFirstNp)
      const secondNp =
        this.enemySecondNp === '' ? 0 : Number(this.enemySecondNp)
      const thirdNp = this.enemyThirdNp === '' ? 0 : Number(this.enemyThirdNp)
      let totalNp = firstNp + secondNp + thirdNp

      if (this.classSkillNp > 0) totalNp = totalNp + this.classSkillNp
      if (this.npRecharge > 0) totalNp = totalNp + this.npRecharge

      if (this.shouldForceMax(totalNp)) return 100

      return totalNp
    },
    actualNpBuff() {
      let npBuff = this.npBuff === '' ? 0 : this.npBuff
      npBuff += this.dressNpBuff
      if (this.isNpBoosted) return npBuff * 2

      return npBuff
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
    },
    npHitDist() {
      switch (this.npHitCount) {
        case 1:
          return [100]
        case 2:
          if (this.characterName === 'ネロ〔ブライド〕') return [25, 75]
          if (this.characterName === 'ディルムッド') return [60, 40]
          return [33, 67]
        case 3:
          if (this.characterName === '李書文（ランサー）') return [12, 25, 63]
          return [16, 33, 51]
        case 4:
          if (this.characterName === '坂田金時（ライダー）') {
            return [35, 21, 14, 30]
          }
          return [10, 20, 30, 40]
        case 5:
          return [6, 13, 20, 26, 35]
        case 6:
          if (this.characterName === 'アン&メアリー') {
            return [5, 11, 17, 11, 23, 33]
          }
          return [4, 9, 14, 19, 23, 31]
        case 7:
          if (this.characterName === 'トリスタン') {
            return [5, 11, 16, 5, 11, 16, 36]
          }
          return [3, 7, 10, 14, 17, 21, 28]
        case 8:
          if (this.characterName === '巌窟王エドモン・ダンテス') {
            return [3, 6, 10, 13, 16, 13, 10, 29]
          }
          if (this.characterName === 'メルトリリス') {
            return [2, 5, 8, 11, 13, 16, 19, 26]
          }
          return [2, 5, 8, 11, 13, 16, 19, 26]
        case 9:
          return [2, 4, 6, 8, 11, 13, 15, 17, 24]
        case 10:
          if (this.characterName === '水着アルトリア') {
            return [2, 5, 8, 5, 8, 11, 13, 8, 11, 29]
          }
          if (
            this.characterName === 'ランスロット（バーサーカー）' ||
            this.characterName === 'アタランテ'
          ) {
            return [3, 5, 3, 7, 8, 10, 12, 14, 16, 22]
          }
          return [3, 5, 3, 7, 8, 10, 12, 14, 16, 22]
        case 11:
          return [1, 3, 4, 6, 7, 9, 10, 12, 13, 15, 20]
        case 12:
          if (this.characterName === '謎のヒロインX') {
            return [5, 7, 5, 7, 5, 7, 5, 7, 5, 7, 5, 35]
          }
          return [1, 2, 3, 5, 6, 7, 8, 10, 11, 12, 14, 21]
        case 13:
          return [16, 5, 11, 8, 11, 5, 8, 5, 2, 8, 2, 11, 8]
        case 15:
          return [6, 4, 8, 6, 8, 4, 6, 4, 2, 6, 2, 8, 2, 6, 28]
        default:
          return []
      }
    },
    classCompatibility() {
      switch (this.characterClass) {
        case 'セイバー':
          if (this.enemyClass === 'ランサー') return 2.0
          if (this.enemyClass === 'アーチャー') return 0.5
          if (this.enemyClass === 'バーサーカー') return 2.0
          return 1.0
        case 'アーチャー':
          if (this.enemyClass === 'セイバー') return 2.0
          if (this.enemyClass === 'ランサー') return 0.5
          if (this.enemyClass === 'バーサーカー') return 2.0
          return 1.0
        case 'ランサー':
          if (this.enemyClass === 'アーチャー') return 2.0
          if (this.enemyClass === 'セイバー') return 0.5
          if (this.enemyClass === 'バーサーカー') return 2.0
          return 1.0
        case 'ライダー':
          if (this.enemyClass === 'キャスター') return 2.0
          if (this.enemyClass === 'アサシン') return 0.5
          if (this.enemyClass === 'バーサーカー') return 2.0
          return 1.0
        case 'アサシン':
          if (this.enemyClass === 'ライダー') return 2.0
          if (this.enemyClass === 'キャスター') return 0.5
          if (this.enemyClass === 'バーサーカー') return 2.0
          return 1.0
        case 'キャスター':
          if (this.enemyClass === 'アサシン') return 2.0
          if (this.enemyClass === 'ライダー') return 0.5
          if (this.enemyClass === 'バーサーカー') return 2.0
          return 1.0
        case 'バーサーカー':
          if (this.enemyClass === 'シールダー') {
            return 1.0
          } else if (this.enemyClass === 'フォーリナー') {
            return 0.5
          } else {
            return 1.5
          }
        case 'ルーラー':
          if (this.enemyClass === 'ムーンキャンサー') return 2.0
          if (this.enemyClass === 'アヴェンジャー') return 0.5
          if (this.enemyClass === 'バーサーカー') return 2.0
          return 1.0
        case 'アヴェンジャー':
          if (this.enemyClass === 'ルーラー') return 2.0
          if (this.enemyClass === 'ムーンキャンサー') return 0.5
          if (this.enemyClass === 'バーサーカー') return 2.0
          return 1.0
        case 'ムーンキャンサー':
          if (this.enemyClass === 'アヴェンジャー') return 2.0
          if (this.enemyClass === 'ルーラー') return 0.5
          if (this.enemyClass === 'バーサーカー') return 2.0
          return 1.0
        case 'アルターエゴ':
          if (
            this.characterName === '殺生院キアラ' &&
            this.enemyClass === 'ルーラー'
          ) {
            return 1.5
          }
          if (this.enemyClass === 'フォーリナー') return 2.0
          if (this.enemyClass === 'バーサーカー') return 2.0
          if (
            this.enemyClass === 'ライダー' ||
            this.enemyClass === 'アサシン' ||
            this.enemyClass === 'キャスター'
          ) {
            return 1.5
          }
          if (
            this.enemyClass === 'セイバー' ||
            this.enemyClass === 'アーチャー' ||
            this.enemyClass === 'ランサー' ||
            this.enemyClass === 'プリテンダー'
          ) {
            return 0.5
          }
          return 1.0
        case 'フォーリナー':
          if (
            this.enemyClass === 'バーサーカー' ||
            this.enemyClass === 'プリテンダー' ||
            this.enemyClass === 'フォーリナー'
          ) {
            return 2.0
          }
          if (this.enemyClass === 'アルターエゴ') return 0.5
          return 1.0
        case 'プリテンダー':
          if (this.enemyClass === 'アルターエゴ') return 2.0
          if (this.enemyClass === 'バーサーカー') return 2.0
          if (
            this.enemyClass === 'セイバー' ||
            this.enemyClass === 'アーチャー' ||
            this.enemyClass === 'ランサー'
          ) {
            return 1.5
          }
          if (
            this.enemyClass === 'ライダー' ||
            this.enemyClass === 'アサシン' ||
            this.enemyClass === 'キャスター' ||
            this.enemyClass === 'フォーリナー'
          ) {
            return 0.5
          }
          return 1.0
        case 'ビースト':
          if (this.enemyClass === 'バーサーカー') return 2.0
          if (
            this.enemyClass === 'セイバー' ||
            this.enemyClass === 'アーチャー' ||
            this.enemyClass === 'ランサー' ||
            this.enemyClass === 'ライダー' ||
            this.enemyClass === 'キャスター' ||
            this.enemyClass === 'アサシン'
          ) {
            return 1.5
          }
          if (
            this.enemyClass === 'ルーラー' ||
            this.enemyClass === 'アヴェンジャー' ||
            this.enemyClass === 'ムーンキャンサー' ||
            this.enemyClass === 'アルターエゴ' ||
            this.enemyClass === 'フォーリナー' ||
            this.enemyClass === 'プリテンダー'
          ) {
            return 0.5
          }
      }
      return 1.0
    },
    minimumDamage() {
      // 固定補正値
      const FIXED_CORRECTION_NUMBER = 0.23
      const MINIMUM_RANDOM_NUMBER = 0.9

      const sAtkBuff = this.sAtkBuff === '' ? 0 : this.sAtkBuff
      const specialResist = (100 - this.specialResist) * 0.01

      return Math.floor(
        (this.characterAtk + this.fou + this.dressAtk) *
          (this.characterNpmultiplier / 100) *
          FIXED_CORRECTION_NUMBER *
          (this.cardVal * ((100 + this.cardBuff) / 100)) *
          this.classCompatibility *
          this.attributeCompatibility *
          this.classCorrection *
          ((100 + this.atkBuff) / 100) *
          ((100 + sAtkBuff + this.actualNpBuff) / 100) *
          (this.sNpAtkBuff / 100) *
          specialResist *
          MINIMUM_RANDOM_NUMBER +
          this.damageAdditionBuff
      )
    },
    damegeArry() {
      const damegeArr = [...Array(this.npHitCount)].map((_, i) => {
        return (this.minimumDamage * this.npHitDist[i]) / 100
      })
      let currentDamege = 0
      const newDamegeArr = [...Array(this.npHitCount)].map((_, i) => {
        if (i === 0) {
          return damegeArr[i]
        } else {
          if (currentDamege === 0) {
            currentDamege = damegeArr[i - 1] + damegeArr[i]
          } else {
            currentDamege += damegeArr[i]
          }
          return currentDamege
        }
      })
      return newDamegeArr
    },
    // 宝具タイプ補正値(NP)
    npCardVal() {
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
      if (this.enemyClass === 'バーサーカー') {
        return 0.8
      } else if (this.enemyClass === 'アサシン') {
        return 0.9
      } else if (this.enemyClass === 'ライダー') {
        return 1.1
      } else if (
        this.enemyClass === 'キャスター' ||
        this.enemyClass === 'ムーンキャンサー'
      ) {
        return 1.2
      } else {
        return 1.0
      }
    }
  },
  watch: {
    npRange() {
      if (this.npRange === '全体') {
        this.selectedEnemyCount = 3
      }
      if (this.npRange === '単体') {
        this.selectedEnemyCount = 1
      }
    },
    characterName() {
      this.enemyFirstNp = 0
      this.enemySecondNp = 0
      this.enemyThirdNp = 0
      this.classSkillNp = 0
      this.attributeCompatibility = 1.0

      if (this.characterName === '水着宇津見エリセ') {
        this.classSkillNp = 4.2
      } else if (this.characterName === '水着カーマ') {
        this.classSkillNp = 3.8
      } else if (
        this.characterName === 'スペースイシュタル' ||
        this.characterName === 'ヘシアン･ロボ' ||
        this.characterName === 'ニトクリス〔オルタ〕'
      ) {
        this.classSkillNp = 3.5
      } else if (this.characterName === 'サリエリ') {
        this.classSkillNp = 3.3
      } else if (
        this.characterName === 'ディオスクロイ' ||
        this.characterName === '水着イリヤ' ||
        this.characterName === '巌窟王エドモン・ダンテス' ||
        this.characterName === '平景清' ||
        this.characterName === '謎の蘭丸X'
      ) {
        this.classSkillNp = 3
      } else if (this.characterName === 'アンリマユ') {
        this.classSkillNp = 2
      }
    }
  },
  methods: {
    openSkillDisplay() {
      this.$refs.skillDlg.isOpen = true
    },
    reset() {
      this.attributeCompatibility = 1.0
      this.$emit('reset-data')
    },
    calculatedAcquisitionAmount(overkillHitCount) {
      let hit = 0
      if (overkillHitCount === null) {
        hit = 0
      } else {
        hit = this.npHitCount - overkillHitCount
      }
      const calcBase = Math.floor(
        100 *
          this.npRate *
          this.npCardVal *
          ((100 + this.cardBuff) / 100) *
          ((100 + this.npAcquisitionBuff) / 100) *
          this.enemyClassCorrection
      )

      const calcResult =
        ((calcBase * (this.npHitCount + 0.5 * hit)) / 100) *
        this.selectedEnemyCount

      return calcResult
    },
    shouldForceMax(num) {
      if (num === 99) return true

      return false
    }
  }
}
</script>

<style scoped lang="scss">
.v-data-table {
  border: solid 0.8px #ab47bc;
  padding: 8px;
  color: rgba(255, 255, 255, 0.7);
}
.btn-group {
  display: flex;
  @media screen and (max-width: 540px) {
    margin-left: 0px;
    margin: 0 auto;
    display: block;
    text-align: center;
  }
}
</style>
