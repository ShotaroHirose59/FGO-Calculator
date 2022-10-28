<template>
  <v-row no-gutters>
    <v-card class="col-md-6">
      <v-toolbar class="title" elevation="4">
        宝具ダメージ 計算
        <v-row no-gutters>
          <v-col style="text-align: right;">
            <v-btn
              style="text-align: right;"
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
          単体 or 全体宝具を持つサーヴァントが対象
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
          <v-col cols="12" sm="3" md="4">
            <v-select
              v-model="characterClass"
              label="クラス"
              :items="items.class"
              class="mr-4"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="5" md="8">
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

          <v-col cols="4" sm="2" md="3">
            <v-select
              v-model="selectedLv"
              label="Lv."
              :items="selectableLv"
              :disabled="!characterName"
              class="mr-3"
              color="teal"
              @change="onChangeAtkByLv(selectedLv)"
            ></v-select>
          </v-col>

          <v-col cols="4" sm="2" md="3">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                v-model.number="characterAtk"
                label="ATK"
                :error-messages="errors"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="3">
            <v-select
              v-model="fou"
              label="フォウくん"
              :items="selectFou"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="2" md="3">
            <v-select
              v-model="servantNpType"
              label="宝具"
              :items="selectServantNpType"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="2" md="3">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                v-model.number="characterNpmultiplier"
                label="宝具倍率"
                suffix="％"
                :error-messages="errors"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="6" sm="2" md="3">
            <v-select
              v-model="npChargeLv"
              label="宝具Lv."
              :items="items.npChargeLevel"
              class="mr-3"
              color="teal"
              @change="onChangeNpmultiplier(npChargeLv)"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="2" md="3">
            <v-select
              v-model="selectingOcUpPrcentage"
              label="OC"
              :items="selectableOcUpPrcentages"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <client-only>
            <v-col v-if="!$vuetify.breakpoint.xs" cols="6" sm="2" md="3">
              <v-switch
                v-model="isNpBoosted"
                label="宝具ブースト"
                color="yellow darken-3"
                class="np-boost-switch"
              ></v-switch>
            </v-col>
          </client-only>

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                v-model.number="atkBuff"
                label="攻撃力バフ"
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
              :on-click-plus-button="() => (atkBuff += 10)"
              :on-click-minus-button="() => (atkBuff -= 10)"
            />
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
              rules="required|maxNpBuff"
            >
              <v-text-field
                v-model.number="sAtkBuff"
                label="特攻バフ"
                suffix="％"
                :error-messages="errors"
                type="number"
                class="mr-4"
                :class="{ 'event-buff-label': isEventCharacter }"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (sAtkBuff >= 500) return false
                  sAtkBuff += 10
                }
              "
              :on-click-minus-button="() => (sAtkBuff -= 10)"
            />
          </v-col>

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|maxNpBuff"
            >
              <v-text-field
                v-model.number="npBuff"
                label="宝具威力バフ"
                suffix="％"
                :error-messages="errors"
                type="number"
                class="mr-4"
                :class="{ 'event-buff-label': isNpBuffEventCharacter }"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (npBuff >= 500) return false
                  npBuff += 10
                }
              "
              :on-click-minus-button="() => (npBuff -= 10)"
            />
          </v-col>

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required"
            >
              <v-text-field
                v-model.number="sNpAtkBuff"
                label="特攻宝具"
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
                  if (sNpAtkBuff === 100) return (sNpAtkBuff += 50)
                  sNpAtkBuff += 10
                }
              "
              :on-click-minus-button="
                () => {
                  if (sNpAtkBuff === 0) return false
                  sNpAtkBuff -= 10
                }
              "
            />
          </v-col>

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|maxDressAtk"
            >
              <v-text-field
                v-model.number="dressAtk"
                label="礼装ATK"
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
                  if (dressAtk >= 3000) return false
                  dressAtk += 100
                }
              "
              :on-click-minus-button="
                () => {
                  if (dressAtk === 0) return false
                  dressAtk -= 100
                }
              "
            />
          </v-col>

          <client-only>
            <v-col v-if="$vuetify.breakpoint.xs" cols="7">
              <v-switch
                v-model="isNpBoosted"
                label="宝具威力ブースト"
                color="yellow darken-3"
                class="np-boost-switch"
              ></v-switch>
            </v-col>
          </client-only>

          <client-only>
            <v-col v-show="$vuetify.breakpoint.xs" cols="6" sm="4" md="4">
              <v-select
                v-model="classCompatibility"
                label="クラス相性"
                :items="selectClassCompatibility"
                class="mr-4"
                color="teal"
              ></v-select>
            </v-col>

            <v-col v-show="$vuetify.breakpoint.xs" cols="6" sm="4" md="4">
              <v-select
                v-model="attributeCompatibility"
                label="属性相性"
                :items="selectAttributeCompatibility"
                class="mr-4"
                color="teal"
              ></v-select>
            </v-col>

            <v-col
              v-show="$vuetify.breakpoint.xs"
              cols="6"
              style="text-align: center;"
            >
              <v-btn color="teal" outlined @click="openSkillDisplay()"
                >バフ詳細</v-btn
              >
            </v-col>

            <v-col
              v-show="$vuetify.breakpoint.xs"
              cols="6"
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
        ref="child"
        :character-class="characterClass"
        :character-name="characterName"
        :character-atk="characterAtk"
        :fou="fou"
        :np-charge-lv="npChargeLv"
        :character-npmultiplier="characterNpmultiplier"
        :servant-np-type="servantNpType"
        :atk-buff="atkBuff"
        :card-buff="cardBuff"
        :s-atk-buff="sAtkBuff"
        :np-buff="npBuff"
        :s-np-atk-buff="sNpAtkBuff"
        :dress-atk="dressAtk"
        :class-skills="classSkills"
        :possession-skills="possessionSkills"
        :np-skills="npSkills"
        :oc-skills="ocSkills"
        :is-np-boosted="isNpBoosted"
        @reset-data="onResetData"
      />
      <!-- スマホの場合のみ、固定フッター用意 -->
      <FixedFooter
        v-if="$vuetify.breakpoint.xs"
        :character-class="characterClass"
        :character-name="characterName"
        :character-atk="characterAtk"
        :fou="fou"
        :np-charge-lv="npChargeLv"
        :character-npmultiplier="characterNpmultiplier"
        :servant-np-type="servantNpType"
        :atk-buff="atkBuff"
        :card-buff="cardBuff"
        :s-atk-buff="sAtkBuff"
        :np-buff="npBuff"
        :s-np-atk-buff="sNpAtkBuff"
        :dress-atk="dressAtk"
        :is-np-boosted="isNpBoosted"
        :class-compatibility="classCompatibility"
        :attribute-compatibility="attributeCompatibility"
      />
    </client-only>
  </v-row>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { collection, query, orderBy, getDocs } from 'firebase/firestore/lite'
import db from '../plugins/firebase'

import ClassSkillAtkBuff from '../mixins/class-skill/atk-buff'
import classSkillsAtkBuff from '../mixins/class-skill/s-atk-buff'
import ClassSkillBusterBuff from '../mixins/class-skill/buster-buff'
import ClassSkillArtsBuff from '../mixins/class-skill/arts-buff'
import ClassSkillQuickBuff from '../mixins/class-skill/quick-buff'
import ClassSkillNpBuff from '../mixins/class-skill/np-buff'

import PossessionSkillArtsBuff from '../mixins/possession-skill/arts-buff'
import PossessionSkillArtsDown from '../mixins/possession-skill/arts-down'
import PossessionSkillAtkBuff from '../mixins/possession-skill/atk-buff'
import PossessionSkillDefensiveDown from '../mixins/possession-skill/defensive-down'
import PossessionSkillBusterBuff from '../mixins/possession-skill/buster-buff'
import PossessionSkillBusterDown from '../mixins/possession-skill/buster-down'
import PossessionSkillNpBuff from '../mixins/possession-skill/np-buff'
import PossessionSkillQuickBuff from '../mixins/possession-skill/quick-buff'
import PossessionSkillQuickDown from '../mixins/possession-skill/quick-down'
import PossessionSkillsAtkBuff from '../mixins/possession-skill/s-atk-buff'

import NpSkillArtsBuff from '../mixins/np-skill/arts-buff'
import NpSkillAtkBuff from '../mixins/np-skill/atk-buff'
import NpSkillDefensiveDown from '../mixins/np-skill/defensive-down'
import NpSkillBusterBuff from '../mixins/np-skill/buster-buff'
import NpSkillNpBuff from '../mixins/np-skill/np-buff'
import NpSkillQuickBuff from '../mixins/np-skill/quick-buff'
import NpSkillQuickDown from '../mixins/np-skill/quick-down'
import NpSkillsAtkBuff from '../mixins/np-skill/s-atk-buff'

import OcSkillArtsBuff from '../mixins/oc-skill/arts-buff'
import OcSkillArtsDown from '../mixins/oc-skill/arts-down'
import OcSkillAtkBuff from '../mixins/oc-skill/atk-buff'
import OcSkillDefensiveDown from '../mixins/oc-skill/defensive-down'
import OcSkillBusterBuff from '../mixins/oc-skill/buster-buff'
import OcSkillBusterDown from '../mixins/oc-skill/buster-down'
import OcSkillNpBuff from '../mixins/oc-skill/np-buff'
import OcSkillQuickBuff from '../mixins/oc-skill/quick-buff'
import OcSkillQuickDown from '../mixins/oc-skill/quick-down'
import OcSkillsAtkBuff from '../mixins/oc-skill/s-atk-buff'
import OcSkillNpmultiplierBuff from '../mixins/oc-skill/npmultiplier-buff'

import EventCharacterBuff from '../mixins/event-buff'
import SelectClass from '../mixins/select-class'

import Dialog from '@/components/calculator/Npatk/Dialog'
import SkillDialog from '@/components/calculator/SkillDialog'
import PlusMinusButton from '@/components/calculator/PlusMinusButton'
import ResultCard from '@/components/calculator/Npatk/ResultCard'
import FixedFooter from '@/components/calculator/Npatk/FixedFooter'

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
    ClassSkillAtkBuff,
    classSkillsAtkBuff,
    ClassSkillBusterBuff,
    ClassSkillArtsBuff,
    ClassSkillQuickBuff,
    ClassSkillNpBuff,
    PossessionSkillArtsBuff,
    PossessionSkillArtsDown,
    PossessionSkillAtkBuff,
    PossessionSkillDefensiveDown,
    PossessionSkillBusterBuff,
    PossessionSkillBusterDown,
    PossessionSkillNpBuff,
    PossessionSkillQuickBuff,
    PossessionSkillQuickDown,
    PossessionSkillsAtkBuff,
    NpSkillArtsBuff,
    NpSkillAtkBuff,
    NpSkillDefensiveDown,
    NpSkillBusterBuff,
    NpSkillNpBuff,
    NpSkillQuickBuff,
    NpSkillQuickDown,
    NpSkillsAtkBuff,
    OcSkillArtsBuff,
    OcSkillArtsDown,
    OcSkillAtkBuff,
    OcSkillDefensiveDown,
    OcSkillBusterBuff,
    OcSkillBusterDown,
    OcSkillNpBuff,
    OcSkillQuickBuff,
    OcSkillQuickDown,
    OcSkillsAtkBuff,
    OcSkillNpmultiplierBuff,
    EventCharacterBuff,
    SelectClass
  ],
  data() {
    return {
      characters: [],
      characterClass: '', // 選択されたクラス
      characterName: '', // 選択されたキャラクター
      atk: [], // キャラクターの攻撃力の配列
      selectableLv: [90, 100, 110, 120],
      selectedLv: 0,
      characterAtk: 0, // 配列から取得したサーヴァントの攻撃力
      npmultiplier: [], // キャラクターの宝具倍率の配列
      characterNpmultiplier: 0, // 配列から取り出したサーヴァントの宝具倍率
      servantNpType: '', // キャラクターの宝具タイプ
      selectServantNpType: ['Buster', 'Arts', 'Quick'],
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
        filterableRarities: [1, 2, 3, 4, 5],
        filterableServantNpType: ['Buster', 'Arts', 'Quick'],
        filterableServantNpEffect: ['全体宝具', '単体宝具'],
        npChargeLevel: [1, 2, 3, 4, 5] // 宝具レベルの選択肢
      },
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
      ],
      fou: 1000, //  フォウくんの値
      selectFou: [
        { text: '+1000', value: 1000 },
        { text: '+2000', value: 2000 },
        { text: 'なし', value: 0 }
      ],
      npChargeLv: 0, // 選択された宝具レベル
      atkBuff: 0, // 攻撃力バフ倍率
      cardBuff: 0, // カードバフ倍率
      sAtkBuff: 0, // 特攻バフ倍率 (special atk buff)
      npBuff: 0, // 宝具威力バフ倍率
      sNpAtkBuff: 100, // 特攻宝具バフ倍率 (special noble phantasm atk buff)
      dressAtk: 0, // 概念礼装のATK
      characterRarity: null,
      isEventCharacter: false, // イベントで特攻が付与されるサーヴァントかどうか
      isNpBuffEventCharacter: false, // イベントで宝具威力がバフされるサーヴァントかどうか
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
      isNpBoosted: false
    }
  },
  computed: {},
  watch: {
    servantNpType() {
      if (this.characterName === 'エミヤ' && this.servantNpType === 'Arts') {
        this.npmultiplier = [600, 750, 825, 862, 900]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      } else if (
        this.characterName === 'エミヤ' &&
        this.servantNpType === 'Buster'
      ) {
        this.npmultiplier = [400, 500, 550, 575, 600]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      } else if (
        this.characterName === 'メリュジーヌ' &&
        this.servantNpType === 'Buster'
      ) {
        this.npmultiplier = [300, 400, 450, 475, 500]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
        // Note: BusterとArtsでOC効果が違うため
        this.hadSelectedOcUpPrcentage = null
        this.cardBuff = 0
        this.setOcSkillBusterBuff(this.characterName)
      } else if (
        this.characterName === 'メリュジーヌ' &&
        this.servantNpType === 'Arts'
      ) {
        this.npmultiplier = [900, 1200, 1350, 1425, 1500]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
        // Note: BusterとArtsでOC効果が違うため
        this.ocSkills = []
        this.cardBuff = 9
      } else if (
        this.characterName === 'スペースイシュタル' &&
        this.servantNpType === 'Buster'
      ) {
        this.npmultiplier = [300, 400, 450, 475, 500]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      } else if (
        this.characterName === 'スペースイシュタル' &&
        this.servantNpType === 'Quick'
      ) {
        this.npmultiplier = [600, 800, 900, 950, 1000]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      } else if (
        this.characterName === 'スペースイシュタル' &&
        this.servantNpType === 'Arts'
      ) {
        this.npmultiplier = [450, 600, 675, 712, 750]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      }
    },
    selectingOcUpPrcentage() {
      if (this.servantNpType === 'Buster') {
        this.setOcSkillBusterBuff(this.characterName)
        this.setOcSkillBusterDown(this.characterName)
      } else if (this.servantNpType === 'Arts') {
        this.setOcSkillArtsBuff(this.characterName)
        this.setOcSkillArtsDown(this.characterName)
      } else if (this.servantNpType === 'Quick') {
        this.setOcSkillQuickBuff(this.characterName)
        this.setOcSkillQuickDown(this.characterName)
      }
      if (this.characterName === 'アーラシュ') {
        this.OcSkillNpmultiplierBuff(this.characterName)
      }
      this.setOcSkillAtkBuff(this.characterName)
      this.setOcSkillDefensiveDown(this.characterName)
      this.setOcSkillNpBuff(this.characterName)
    }
  },
  async created() {
    if (!db) return

    const q = query(collection(db, 'characters'), orderBy('number', 'asc'))
    const querySnapshot = await getDocs(q)
    this.characters = querySnapshot.docs.map((doc) => {
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
      this.atk = character.atk // 「攻撃力」を一旦配列で取得
      this.characterAtk = this.atk[0] // デフォルトの攻撃力
      this.npmultiplier = character.npmultiplier // 「宝具倍率」を一旦配列で代入
      this.setInitialNpChargeLv(character) // 初期「宝具レベル」と宝具倍率を設定
      this.characterRarity = character.rarity
      this.setSelectableLv(this.characterRarity)
      this.selectedLv = this.selectableLv[0]
      this.setNpType(character)
      this.setClassCompatibility(character)

      // スキルバフ
      // 攻撃力UPバフ
      this.setPossessionSkillAtkBuff(character)
      // 防御力ダウン(攻撃力UPバフ)
      this.setPossessionSkillDefensiveDown(character)
      // バスター性能UP
      this.setPossessionSkillBusterBuff(character)
      // バスター耐性ダウン
      this.setPossessionSkillBusterDown(character)
      // アーツ性能UP
      this.setPossessionSkillArtsBuff(character)
      // アーツ耐性ダウン
      this.setPossessionSkillArtsDown(character)
      // クイック性能UP
      this.setPossessionSkillQuickBuff(character)
      // クイック耐性ダウン
      this.setPossessionSkillQuickDown(character)
      // 宝具威力UP
      this.setPossessionSkillNpBuff(character)
      // 特攻バフ
      this.setPossessionSkillSAtkBuff(character)

      // 宝具バフ
      // 攻撃力UPバフ
      this.setNpSkillAtkBuff(character)
      // 防御力ダウン(攻撃力UPバフ)
      this.setNpSkillDefensiveDown(character)
      // バスター性能UP
      this.setNpSkillBusterBuff(character)
      // アーツ性能UP
      this.setNpSkillArtsBuff(character)
      // クイック性能UP
      this.setNpSkillQuickBuff(character)
      // クイック耐性ダウン
      this.setNpSkillQuickDown(character)
      // 宝具威力UP
      this.setNpSkillNpBuff(character)
      // 特攻宝具
      this.setNpSkillSAtkBuff(character)

      // 宝具OC
      // 攻撃バフ
      this.setOcSkillAtkBuff(character.name)
      // 防御ダウン
      this.setOcSkillDefensiveDown(character.name)
      // バスターバフ
      this.setOcSkillBusterBuff(character.name)
      // バスター耐性ダウン
      this.setOcSkillBusterDown(character.name)
      // アーツバフ
      this.setOcSkillArtsBuff(character.name)
      // アーツ耐性ダウン
      this.setOcSkillArtsDown(character.name)
      // クイックバフ
      this.setOcSkillQuickBuff(character.name)
      // クイック耐性ダウン
      this.setOcSkillQuickDown(character.name)
      // 宝具威力バフ
      this.setOcSkillNpBuff(this.characterName)
      // 特攻
      this.setOcSkillSAtkBuff(character)
      // 宝具威力アップ(倍率)
      if (this.characterName === 'アーラシュ') {
        this.OcSkillNpmultiplierBuff(this.characterName)
      }

      if (character.card === 'B') {
        this.setClassSkillBusterBuff(character)
      } else if (character.card === 'A') {
        this.setClassSkillArtsBuff(character)
      } else if (character.card === 'Q') {
        this.setClassSkillQuickBuff(character)
      }
      if (
        character.name === '光のコヤンスカヤ' ||
        character.name === '水着殺生院キアラ' ||
        character.name === 'ヘファイスティオン' ||
        character.name === 'モリアーティ（ルーラー）'
      ) {
        this.setClassSkillNpBuff(character)
      } else if (character.name === 'カレン') {
        this.setClassSkillAtkBuff(character)
      } else if (
        character.name === '千子村正' ||
        character.name === '闇のコヤンスカヤ' ||
        character.name === '殺生院キアラ'
      ) {
        this.setClassSkillSAtkBuff(character)
      }
      this.setEventCharacterBuff(character)
    },
    setSelectableLv(characterRarity) {
      switch (characterRarity) {
        case 0:
          this.selectableLv = [65, 70, 80, 90, 100, 110, 120]
          break
        case 1:
          this.selectableLv = [60, 70, 80, 90, 100, 110, 120]
          break
        case 2:
          this.selectableLv = [65, 70, 80, 90, 100, 110, 120]
          break
        case 3:
          this.selectableLv = [70, 80, 90, 100, 110, 120]
          break
        case 4:
          this.selectableLv = [80, 90, 100, 110, 120]
          break
        case 5:
          this.selectableLv = [90, 100, 110, 120]
          break
      }
    },
    // 選択されたキャラクターの「宝具タイプ」を返す。
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
    },
    // クラス相性の設定
    setClassCompatibility(character) {
      if (
        character.class === 'ルーラー' ||
        character.class === 'アヴェンジャー' ||
        character.class === 'ムーンキャンサー' ||
        character.class === 'フォーリナー'
      ) {
        this.classCompatibility = 1.0
      } else if (
        character.class === 'バーサーカー' ||
        character.class === 'アルターエゴ' ||
        character.class === 'プリテンダー'
      ) {
        this.classCompatibility = 1.5
      } else {
        this.classCompatibility = 2.0
      }
    },
    onChangeAtkByLv(selectedLv) {
      if (this.characterRarity === 5) {
        if (selectedLv === 90) {
          this.characterAtk = this.atk[0]
        } else if (selectedLv === 100) {
          this.characterAtk = this.atk[1]
        } else if (selectedLv === 110) {
          this.characterAtk = this.atk[2]
        } else if (selectedLv === 120) {
          this.characterAtk = this.atk[3]
        }
      } else if (this.characterRarity === 4) {
        if (selectedLv === 80) {
          this.characterAtk = this.atk[0]
        } else if (selectedLv === 90) {
          this.characterAtk = this.atk[1]
        } else if (selectedLv === 100) {
          this.characterAtk = this.atk[2]
        } else if (selectedLv === 110) {
          this.characterAtk = this.atk[3]
        } else if (selectedLv === 120) {
          this.characterAtk = this.atk[4]
        }
      } else if (this.characterRarity === 3) {
        if (selectedLv === 70) {
          this.characterAtk = this.atk[0]
        } else if (selectedLv === 80) {
          this.characterAtk = this.atk[1]
        } else if (selectedLv === 90) {
          this.characterAtk = this.atk[2]
        } else if (selectedLv === 100) {
          this.characterAtk = this.atk[3]
        } else if (selectedLv === 110) {
          this.characterAtk = this.atk[4]
        } else if (selectedLv === 120) {
          this.characterAtk = this.atk[5]
        }
      } else if (this.characterRarity === 2 || this.characterRarity === 0) {
        if (selectedLv === 65) {
          this.characterAtk = this.atk[0]
        } else if (selectedLv === 70) {
          this.characterAtk = this.atk[1]
        } else if (selectedLv === 80) {
          this.characterAtk = this.atk[2]
        } else if (selectedLv === 90) {
          this.characterAtk = this.atk[3]
        } else if (selectedLv === 100) {
          this.characterAtk = this.atk[4]
        } else if (selectedLv === 110) {
          this.characterAtk = this.atk[5]
        } else if (selectedLv === 120) {
          this.characterAtk = this.atk[6]
        }
      } else if (this.characterRarity === 1) {
        if (selectedLv === 60) {
          this.characterAtk = this.atk[0]
        } else if (selectedLv === 70) {
          this.characterAtk = this.atk[1]
        } else if (selectedLv === 80) {
          this.characterAtk = this.atk[2]
        } else if (selectedLv === 90) {
          this.characterAtk = this.atk[3]
        } else if (selectedLv === 100) {
          this.characterAtk = this.atk[4]
        } else if (selectedLv === 110) {
          this.characterAtk = this.atk[5]
        } else if (selectedLv === 120) {
          this.characterAtk = this.atk[6]
        }
      }
    },
    setInitialNpChargeLv(character) {
      if (character.rarity <= 3) {
        this.npChargeLv = 5
      } else if (
        character.name === 'アルトリア〔リリィ〕' ||
        character.name === 'エリザベート〔ブレイブ〕' ||
        character.name === '水着葛飾北斎' ||
        character.name === 'カルナ〔サンタ〕' ||
        character.name === '織田信長' ||
        character.name === 'クロエ' ||
        character.name === 'アルテラ・ザ・サン〔タ〕' ||
        character.name === 'ナイチンゲール〔サンタ〕' ||
        character.name === 'ジャンヌサンタリリィ' ||
        character.name === '長尾景虎' ||
        character.name === '宇津見エリセ' ||
        character.name === '水着虞美人' ||
        character.name === 'アルトリア〔サンタオルタ〕' ||
        character.name === '坂田金時（ライダー）' ||
        character.name === '水着イシュタル' ||
        character.name === '坂本龍馬' ||
        character.name === 'エリザベート〔シンデレラ〕' ||
        character.name === 'エリザベート〔ハロウィン〕' ||
        character.name === 'ジーク' ||
        character.name === '酒呑童子（キャスター）' ||
        character.name === '両儀式（アサシン）' ||
        character.name === '水着スカサハ' ||
        character.name === 'グレイ' ||
        character.name === '鬼一法眼' ||
        character.name === 'スルーズ' ||
        character.name === 'ヒルド' ||
        character.name === 'オルトリンデ' ||
        character.name === '茶々' ||
        character.name === 'バニヤン' ||
        character.name === '水着ジャンヌ〔オルタ〕' ||
        character.name === 'ケツァルコアトル〔サンバ／サンタ〕' ||
        character.name === '水着ダヴィンチ' ||
        character.name === '壱与' ||
        character.name === '謎の蘭丸X' ||
        character.name === 'メカエリチャン' ||
        character.name === 'メカエリチャンⅡ号機' ||
        character.name === '太歳星君' ||
        character.name === 'BB' ||
        character.name === '謎のアイドルX〔オルタ〕' ||
        character.name === '九紋竜エリザ'
      ) {
        this.npChargeLv = 5
      } else {
        this.npChargeLv = 1
      }
      this.onChangeNpmultiplier(this.npChargeLv)
    },
    // キャラクターが持つ「宝具倍率」は「宝具レベル」によって変更される
    onChangeNpmultiplier(npChargeLv) {
      switch (npChargeLv) {
        case 1:
          this.characterNpmultiplier = this.npmultiplier[0]
          break
        case 2:
          this.characterNpmultiplier = this.npmultiplier[1]
          break
        case 3:
          this.characterNpmultiplier = this.npmultiplier[2]
          break
        case 4:
          this.characterNpmultiplier = this.npmultiplier[3]
          break
        case 5:
          this.characterNpmultiplier = this.npmultiplier[4]
          break
      }
      if (this.characterName === 'アーラシュ') {
        this.OcSkillNpmultiplierBuff(this.characterName)
      }
    },
    openDisplay() {
      this.$refs.dlg.isOpen = true
    },
    openSkillDisplay() {
      this.$refs.skillDlg.isOpen = true
    },
    resetBuffSystem() {
      this.fou = 1000
      this.characterAtk = 0
      this.npChargeLv = 0
      this.characterNpmultiplier = 0
      this.servantNpType = ''
      this.atkBuff = 0
      this.cardBuff = 0
      this.sAtkBuff = 0
      this.npBuff = 0
      this.sNpAtkBuff = 100
      this.dressAtk = 0
      this.characterRarity = null
      this.classSkills = []
      this.possessionSkills = []
      this.npSkills = []
      this.ocSkills = []
      this.selectingOcUpPrcentage = 1
      this.hadSelectedOcUpPrcentage = null
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      this.isNpBoosted = false
      if (!this.$vuetify.breakpoint.xs) {
        this.$refs.child.resetCompatibility()
      } else {
        this.classCompatibility = 2.0
        this.attributeCompatibility = 1.0
      }
    },
    onResetData() {
      this.characterClass = ''
      this.characterName = ''
      this.atk = []
      this.fou = 1000
      this.selectedLv = 0
      this.characterAtk = 0
      this.npChargeLv = 0
      this.characterNpmultiplier = 0
      this.servantNpType = ''
      this.atkBuff = 0
      this.cardBuff = 0
      this.sAtkBuff = 0
      this.npBuff = 0
      this.sNpAtkBuff = 100
      this.dressAtk = 0
      this.classCompatibility = 2.0
      this.attributeCompatibility = 1.0
      this.classSkills = []
      this.possessionSkills = []
      this.npSkills = []
      this.ocSkills = []
      this.selectingOcUpPrcentage = 1
      this.hadSelectedOcUpPrcentage = null
      this.characterRarity = null
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      this.isNpBoosted = false
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: '【FGO】宝具ダメージ計算 ~Wオルタと計算~',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'FGOの計算アプリです。このページでは宝具のダメージ計算ができます。単体または全体宝具を持つ全てのサーヴァントが対象です。'
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
.event-buff-label {
  .theme--dark.v-label {
    color: orange;
  }
}
.class-skill-text-sp {
  font-size: 14px;
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
}
.np-boost-switch {
  label {
    @media screen and (max-width: 540px) {
      font-size: 16px;
    }
    @media screen and (max-width: 375px) {
      font-size: 14px;
    }
  }
}
</style>
