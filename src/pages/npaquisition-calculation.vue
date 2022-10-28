<template>
  <v-row no-gutters>
    <v-card class="col-md-6">
      <v-toolbar class="title" elevation="4">
        宝具NP獲得 計算
        <v-row no-gutters>
          <v-col style="text-align: right;">
            <v-btn
              outlined
              small
              fab
              class="mr-4"
              color="purple lighten-1"
              @click="openDisplay()"
            >
              <v-icon>mdi-help</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
      <!-- スマホだと幅取るからいらない -->
      <client-only>
        <v-card-subtitle v-if="!$vuetify.breakpoint.xs">
          単体 or 全体宝具を持つArts Quickのサーヴァントが対象
        </v-card-subtitle>
      </client-only>

      <!-- ダイアログ (使い方、計算項目の詳細) -->
      <Dialog ref="dlg" />

      <SkillDialog
        ref="skillDlg"
        :class-skills="classSkills"
        :possession-skills="possessionSkills"
        :np-skills="npSkills"
        :oc-skills="ocSkills"
      />

      <v-card-text>
        <v-row no-gutters>
          <v-col cols="12" sm="4" md="4">
            <v-select
              v-model="characterClass"
              label="クラス"
              :items="items.class"
              class="mr-4"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="8" md="8">
            <v-select
              v-model="characterName"
              label="サーヴァント"
              :items="$_filteredCharacters"
              :disabled="!characterClass || $_is_empty"
              class="mr-4"
              color="teal"
              @input="onChangeVal(characterName)"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="2" md="2">
            <v-select
              v-model="servantNpType"
              label="宝具"
              :items="selectServantNpType"
              class="mr-4"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="2" md="2">
            <v-select
              v-model="selectingOcUpPrcentage"
              label="OC"
              :items="selectableOcUpPrcentages"
              class="mr-4"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|maxCardBuff"
            >
              <v-text-field
                v-model.number="cardBuff"
                label="カードバフ"
                suffix="％"
                :error-messages="errors"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (cardBuff >= 400) return false
                  cardBuff += 10
                }
              "
              :on-click-minus-button="() => (cardBuff -= 10)"
            />
          </v-col>

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|maxCardBuff"
            >
              <v-text-field
                v-model.number="npAcquisitionBuff"
                label="NP獲得量バフ"
                suffix="％"
                :error-messages="errors"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (npAcquisitionBuff >= 400) return false
                  npAcquisitionBuff += 10
                }
              "
              :on-click-minus-button="() => (npAcquisitionBuff -= 10)"
            />
          </v-col>

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                v-model.number="overkillHits"
                label="オーバーキル"
                suffix="hit"
                :error-messages="errors"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (overkillHits >= npHits) return false
                  overkillHits += 1
                }
              "
              :on-click-minus-button="
                () => {
                  if (overkillHits === 0) return false
                  overkillHits -= 1
                }
              "
            />
          </v-col>

          <v-col cols="6" sm="3" md="4">
            <v-select
              v-model="enemyClass"
              label="敵クラス補正"
              :items="items.selectEnemyClass"
              class="mr-4"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="3" md="4">
            <v-select
              v-model.number="enemyCount"
              label="敵の数"
              :items="items.selectEnemyCount"
              class="mr-4"
              color="teal"
            ></v-select>
          </v-col>

          <client-only>
            <v-col v-show="$vuetify.breakpoint.xs" cols="12">
              <span>NPレート : {{ npRate }}</span>
              <span>/</span>
              <span>宝具ヒット数 : {{ npHits }}</span>
            </v-col>

            <v-col
              v-show="$vuetify.breakpoint.xs"
              cols="6"
              class="mt-8"
              style="text-align: center;"
            >
              <v-btn color="teal" outlined @click="openSkillDisplay()"
                >バフ詳細</v-btn
              >
            </v-col>

            <v-col
              v-show="$vuetify.breakpoint.xs"
              cols="6"
              class="mt-8"
              style="text-align: center;"
            >
              <v-btn color="error" outlined @click="onResetData()">
                リセット
              </v-btn>
            </v-col>
          </client-only>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- 結果カード スマホの場合は表示しない -->
    <client-only>
      <ResultCard
        v-if="!$vuetify.breakpoint.xs"
        :character-name="characterName"
        :servant-np-type="servantNpType"
        :card-buff="cardBuff"
        :np-rate="npRate"
        :np-hits="npHits"
        :overkill-hits="overkillHits"
        :enemy-class="enemyClass"
        :enemy-count="enemyCount"
        :np-acquisition-buff="npAcquisitionBuff"
        :class-skills="classSkills"
        :possession-skills="possessionSkills"
        :np-skills="npSkills"
        :oc-skills="ocSkills"
        :np-recharge="npRecharge"
        @reset-data="onResetData"
      />
      <!-- スマホの場合、固定フッター用意 -->
      <FixedFooter
        v-if="$vuetify.breakpoint.xs"
        :character-name="characterName"
        :servant-np-type="servantNpType"
        :card-buff="cardBuff"
        :np-rate="npRate"
        :np-hits="npHits"
        :overkill-hits="overkillHits"
        :enemy-class="enemyClass"
        :enemy-count="enemyCount"
        :np-acquisition-buff="npAcquisitionBuff"
        :np-recharge="npRecharge"
      />
    </client-only>
  </v-row>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { collection, query, orderBy, getDocs } from 'firebase/firestore/lite'
import db from '../plugins/firebase'

// TODO: mixinのimport先を1つにする
import ClassSkillArtsBuff from '../mixins/class-skill/arts-buff'
import ClassSkillQuickBuff from '../mixins/class-skill/quick-buff'
import ClassSkillNpAcquisitionBuff from '../mixins/class-skill/np-acquisition-buff'
import ClassSkillNpRecharge from '../mixins/class-skill/np-charge'

import PossessionSkillArtsBuff from '../mixins/possession-skill/arts-buff'
import PossessionSkillArtsDown from '../mixins/possession-skill/arts-down'
import PossessionSkillQuickBuff from '../mixins/possession-skill/quick-buff'
import PossessionSkillQuickDown from '../mixins/possession-skill/quick-down'
import PossessionSkillNpAcquisitionBuff from '../mixins/possession-skill/np-acquisition-buff'

import NpSkillArtsBuff from '../mixins/np-skill/arts-buff'
import NpSkillQuickBuff from '../mixins/np-skill/quick-buff'
import NpSkillQuickDown from '../mixins/np-skill/quick-down'
import NpSkillNpRecharge from '../mixins/np-skill/np-recharge'

import OcSkillArtsBuff from '../mixins/oc-skill/arts-buff'
import OcSkillArtsDown from '../mixins/oc-skill/arts-down'
import OcSkillQuickBuff from '../mixins/oc-skill/quick-buff'
import OcSkillQuickDown from '../mixins/oc-skill/quick-down'
import OcSkillNpAcquisitionBuff from '../mixins/oc-skill/np-acquisition-buff'
import OcSkillNpRecharge from '../mixins/oc-skill/np-recharge'

import SelectClass from '../mixins/select-class'
import Dialog from '@/components/calculator/NpAcquisition/Dialog'
import SkillDialog from '@/components/calculator/SkillDialog'
import PlusMinusButton from '@/components/calculator/PlusMinusButton'
import ResultCard from '@/components/calculator/NpAcquisition/ResultCard'
import FixedFooter from '@/components/calculator/NpAcquisition/FixedFooter'

export default {
  components: {
    ValidationProvider,
    Dialog,
    SkillDialog,
    PlusMinusButton,
    ResultCard,
    FixedFooter
  },
  mixins: [
    ClassSkillArtsBuff,
    ClassSkillQuickBuff,
    ClassSkillNpAcquisitionBuff,
    ClassSkillNpRecharge,
    PossessionSkillArtsBuff,
    PossessionSkillArtsDown,
    PossessionSkillQuickBuff,
    PossessionSkillQuickDown,
    PossessionSkillNpAcquisitionBuff,
    NpSkillArtsBuff,
    NpSkillQuickBuff,
    NpSkillQuickDown,
    NpSkillNpRecharge,
    OcSkillArtsBuff,
    OcSkillArtsDown,
    OcSkillQuickBuff,
    OcSkillQuickDown,
    OcSkillNpAcquisitionBuff,
    OcSkillNpRecharge,
    SelectClass
  ],
  data() {
    return {
      characters: [],
      characterClass: '', // 選択されたクラス
      characterName: '', // 選択されたキャラクター
      servantNpType: '', // キャラクターの宝具タイプ
      selectServantNpType: ['Arts', 'Quick', 'Buster'],
      npRate: 0, // NPレート
      npHits: 0, // 宝具ヒット回数
      overkillHits: 0,
      items: {
        class: [
          'セイバー',
          'アーチャー',
          'ランサー',
          'ライダー',
          'キャスター',
          'アサシン',
          'バーサーカー',
          'ルーラー',
          'アヴェンジャー',
          'アルターエゴ',
          'ムーンキャンサー',
          'フォーリナー',
          'プリテンダー'
        ],
        selectEnemyClass: [
          '0.8（狂）',
          '0.9（殺）',
          '1.0',
          '1.1（騎）',
          '1.2（術・月）'
        ],
        selectEnemyCount: [1, 2, 3, 4, 5, 6], // 敵の数
        filterableRarities: [1, 2, 3, 4, 5],
        filterableServantNpType: ['Arts', 'Quick'],
        filterableServantNpEffect: ['全体宝具', '単体宝具']
      },
      enemyClass: '1.0',
      enemyCount: 3,
      cardBuff: 0, // カード性能UP倍率
      npAcquisitionBuff: 0, // NP獲得量UP倍率
      classSkills: [
        {
          name: '',
          description: ''
        }
      ],
      possessionSkills: [
        {
          description: ''
        }
      ],
      npSkills: [
        {
          description: ''
        }
      ],
      ocSkills: [
        {
          description: ''
        }
      ],
      selectingOcUpPrcentage: 1,
      hadSelectedOcUpPrcentage: null,
      selectableOcUpPrcentages: [1, 2, 3, 4, 5],
      npRecharge: 0
    }
  },
  computed: {},
  watch: {
    selectingOcUpPrcentage() {
      // サーヴァントの宝具の色によって実行する関数を分岐する
      if (this.servantNpType === 'Arts') {
        this.setOcSkillArtsBuff(this.characterName)
        this.setOcSkillArtsDown(this.characterName)
      } else if (this.servantNpType === 'Quick') {
        this.setOcSkillQuickBuff(this.characterName)
        this.setOcSkillQuickDown(this.characterName)
      }
      if (this.characterName === 'メリュジーヌ') {
        this.setOcSkillNpAcquisitionBuff(this.characterName)
      }
      if (
        this.characterName === 'メディア' ||
        this.characterName === '水着アルトリア' ||
        this.characterName === 'パールヴァティー' ||
        this.characterName === '水着エレナ'
      ) {
        this.setOcSkillNpRecharge(this.characterName)
      }
    }
  },
  async created() {
    if (!db) return

    const q = query(collection(db, 'characters'), orderBy('number', 'asc'))
    const querySnapshot = await getDocs(q)
    this.characters = querySnapshot.docs
      .filter(
        (doc) =>
          doc.data().card === 'A' ||
          doc.data().card === 'Q' ||
          doc.data().name === 'エミヤ'
      )
      .map((doc) => {
        return { ...doc.data() }
      })
  },
  methods: {
    // 選択されたキャラクターが持つ値を代入
    onChangeVal(characterName) {
      const character = this.characters.find(
        (character) => character.name === characterName
      )
      this.resetBuffSystem()
      this.npRate = character.npchargeatk
      this.npHits = character.nphitcount
      this.setNpType(character)
      this.setEnemyCount(character)

      // スキルバフ
      // アーツ性能UP
      this.setPossessionSkillArtsBuff(character)
      // アーツ耐性ダウン
      this.setPossessionSkillArtsDown(character)
      // クイック性能UP
      this.setPossessionSkillQuickBuff(character)
      // クイック耐性ダウン
      this.setPossessionSkillQuickDown(character)
      // NP獲得量UP
      this.setPossessionSkillNpAcquisitionBuff(character)

      // 宝具バフ
      // アーツ性能UP
      this.setNpSkillArtsBuff(character)
      // クイック性能UP
      this.setNpSkillQuickBuff(character)
      // クイック耐性Down
      this.setNpSkillQuickDown(character)
      // 宝具リチャージ
      this.setNpSkillNpRecharge(character)

      // 宝具OC
      // アーツバフ
      this.setOcSkillArtsBuff(character.name)
      // アーツ耐性ダウン
      this.setOcSkillArtsDown(character.name)
      // クイックバフ
      this.setOcSkillQuickBuff(character.name)
      // クイック耐性ダウン
      this.setOcSkillQuickDown(character.name)
      // NP獲得量UP
      this.setOcSkillNpAcquisitionBuff(character.name)
      // 宝具リチャージ
      this.setOcSkillNpRecharge(character.name)

      // クラススキル
      if (character.card === 'A') {
        this.setClassSkillArtsBuff(character)
      } else if (character.card === 'Q') {
        this.setClassSkillQuickBuff(character)
      }
      if (character.name === 'ディオスクロイ' || character.name === '千利休') {
        this.setClassSkillNpAcquisitionBuff(character)
      }
      // 毎ターンNPチャージ
      this.setClassSkillNpchargeEveryTurn(character)
    },
    // 選択されたキャラクターの「宝具タイプ」を返す
    setNpType(character) {
      switch (character.card) {
        case 'B':
          this.servantNpType = 'Buster'
          break
        case 'A':
          this.servantNpType = 'Arts'
          break
        case 'Q':
          this.servantNpType = 'Quick'
          break
      }
      if (character.name === 'エミヤ') {
        this.servantNpType = 'Arts'
      }
    },
    setEnemyCount(character) {
      if (character.nprange === '全体') {
        this.enemyCount = 3
      } else if (character.nprange === '単体') {
        this.enemyCount = 1
      } else if (character.name === 'バゼット') {
        this.enemyCount = 1
      } else if (character.name === 'アンリマユ') {
        this.enemyCount = 3
      } else {
        this.enemyCount = 3
      }
    },
    openDisplay() {
      this.$refs.dlg.isOpen = true
    },
    openSkillDisplay() {
      this.$refs.skillDlg.isOpen = true
    },
    resetBuffSystem() {
      this.servantNpType = ''
      this.cardBuff = 0
      this.npAcquisitionBuff = 0
      this.overkillHits = 0
      this.classSkills = []
      this.possessionSkills = []
      this.npSkills = []
      this.ocSkills = []
      this.selectingOcUpPrcentage = 1
      this.hadSelectedOcUpPrcentage = null
      this.npRecharge = 0
    },
    onResetData() {
      this.characterClass = ''
      this.characterName = ''
      this.servantNpType = ''
      this.npRate = 0
      this.npHits = 0
      this.overkillHits = 0
      this.enemyClass = '1.0'
      this.enemyCount = 3
      this.cardBuff = 0
      this.npAcquisitionBuff = 0
      this.classSkills = []
      this.possessionSkills = []
      this.npSkills = []
      this.ocSkills = []
      this.selectingOcUpPrcentage = 1
      this.hadSelectedOcUpPrcentage = null
      this.npRecharge = 0
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: '【FGO】宝具NP計算 ~Wオルタと計算~',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'FGOの計算アプリです。このページでは宝具のNP獲得計算ができます。単体または全体宝具を持つArts Quickのサーヴァントが対象です。'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.class-skill-text-sp {
  font-size: 14px;
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
}
</style>
