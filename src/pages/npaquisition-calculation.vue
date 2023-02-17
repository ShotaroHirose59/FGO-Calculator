<template>
  <v-row no-gutters>
    <v-card class="col-md-6">
      <v-toolbar class="title" elevation="4">
        宝具NP獲得 計算
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

      <!-- ダイアログ (使い方、計算項目の詳細) -->
      <Dialog ref="dlg" />

      <SelectCharacterDialog
        ref="selectCharacterDlg"
        :characters="characters"
        :select-history-characters="historyCharacters"
        @selectCharacter="selectCharacter"
        @deleteHistoryCharacter="deleteHistoryCharacter"
      />

      <SkillDialog
        ref="skillDlg"
        :class-skills="classSkills"
        :possession-skills="possessionSkills"
        :np-skills="npSkills"
        :oc-skills="ocSkills"
      />

      <v-card-text>
        <p class="mb-2">
          システム可能な敵のHPを確認できます
        </p>
        <v-row no-gutters>
          <v-col cols="12" sm="12" md="12" class="mt-2 mb-4">
            <SelectCharacterButton
              :character-select-text="$_characterSelectText"
              @openSelectCharacterDisplay="openSelectCharacterDisplay"
            />
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

          <v-col cols="4" sm="3" md="3">
            <v-text-field
              v-model.number="characterAtk"
              label="ATK"
              type="number"
              inputmode="numeric"
              class="mr-3"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="4" sm="3" md="3">
            <v-select
              v-model="fou"
              label="フォウくん"
              :items="selectFou"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="3" md="3">
            <v-select
              v-model="servantNpType"
              label="宝具"
              :items="selectServantNpType"
              :disabled="!isChangeableNpType"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="3" md="3">
            <v-text-field
              v-model.number="characterNpmultiplier"
              label="宝具倍率"
              suffix="％"
              type="number"
              inputmode="decimal"
              class="mr-3"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="6" sm="3" md="3">
            <v-select
              v-model="npChargeLv"
              label="宝具Lv."
              :items="items.npChargeLevel"
              class="mr-3"
              color="teal"
              @change="onChangeNpmultiplier(npChargeLv)"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="3" md="3">
            <v-select
              v-model="selectingOcUpPrcentage"
              label="OC"
              :items="selectableOcUpPrcentages"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <client-only>
            <v-col v-if="!$vuetify.breakpoint.xs" cols="6" sm="3" md="3">
              <v-switch
                v-model="isNpBoosted"
                label="宝具ブースト"
                color="yellow darken-3"
                class="np-boost-switch"
              ></v-switch>
            </v-col>
          </client-only>

          <v-col cols="4" sm="2" md="3" lg="2">
            <v-text-field
              v-model.number="cardBuff"
              label="カードバフ"
              suffix="％"
              type="number"
              inputmode="decimal"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="2" sm="1" md="1" lg="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (cardBuff >= 400) return false
                  if (cardBuff === '') cardBuff = 0
                  cardBuff += 10
                }
              "
              :on-click-minus-button="() => (cardBuff -= 10)"
            />
          </v-col>

          <!-- <v-col cols="4" sm="2" md="3" lg="2">
            <validation-provider
              ref="provider"
              rules="required|maxCardBuff"
            >
              <v-text-field
                v-model.number="cardBuff"
                label="カード耐性"
                suffix="％"
                type="number"
                inputmode="decimal"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="3" lg="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (cardBuff >= 400) return false
                  cardBuff += 10
                }
              "
              :on-click-minus-button="() => (cardBuff -= 10)"
            />
          </v-col> -->

          <v-col cols="4" sm="2" md="3" lg="2">
            <v-text-field
              v-model.number="npAcquisitionBuff"
              label="NP獲得量バフ"
              suffix="％"
              type="number"
              inputmode="decimal"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="2" sm="1" md="1" lg="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (npAcquisitionBuff >= 400) return false
                  if (npAcquisitionBuff === '') npAcquisitionBuff = 0
                  npAcquisitionBuff += 10
                }
              "
              :on-click-minus-button="() => (npAcquisitionBuff -= 10)"
            />
          </v-col>

          <v-col cols="4" sm="2" md="3" lg="2">
            <v-text-field
              v-model.number="atkBuff"
              label="攻撃力バフ"
              suffix="％"
              type="number"
              inputmode="decimal"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="2" sm="1" md="1" lg="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (atkBuff >= 400) return false
                  if (atkBuff === '') atkBuff = 0
                  atkBuff += 10
                }
              "
              :on-click-minus-button="() => (atkBuff -= 10)"
            />
          </v-col>

          <!-- <v-col cols="4" sm="2" md="3" lg="2">
            <v-text-field
              v-model.number="atkBuff"
              label="防御ダウン"
              suffix="％"
              type="number"
              inputmode="decimal"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="4" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="() => (atkBuff += 10)"
              :on-click-minus-button="() => (atkBuff -= 10)"
            />
          </v-col> -->

          <v-col cols="4" sm="2" md="3" lg="2">
            <v-text-field
              v-model.number="sAtkBuff"
              label="特攻バフ"
              suffix="％"
              type="number"
              inputmode="decimal"
              :class="{ 'event-buff-label': isEventCharacter }"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="2" sm="1" md="1" lg="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (sAtkBuff >= 1000) return false
                  if (sAtkBuff === '') sAtkBuff = 0
                  sAtkBuff += 10
                }
              "
              :on-click-minus-button="() => (sAtkBuff -= 10)"
            />
          </v-col>

          <v-col cols="4" sm="2" md="3" lg="2">
            <v-text-field
              v-model.number="npBuff"
              label="宝具威力バフ"
              suffix="％"
              type="number"
              inputmode="decimal"
              :hint="dressNpBuffHint"
              persistent-hint
              :class="{ 'event-buff-label': isNpBuffEventCharacter }"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="2" sm="1" md="1" lg="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (npBuff >= 500) return false
                  if (npBuff === '') npBuff = 0
                  npBuff += 10
                }
              "
              :on-click-minus-button="() => (npBuff -= 10)"
            />
          </v-col>

          <v-col cols="4" sm="2" md="3" lg="2">
            <v-text-field
              v-model.number="sNpAtkBuff"
              label="特攻宝具"
              suffix="％"
              type="number"
              inputmode="decimal"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="2" sm="1" md="1" lg="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (sNpAtkBuff === 100) return (sNpAtkBuff += 50)
                  if (sNpAtkBuff === '') sNpAtkBuff = 0
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

          <v-col cols="4" sm="2" md="3" lg="2">
            <v-text-field
              v-model.number="specialResist"
              label="特殊耐性"
              suffix="％"
              type="number"
              inputmode="decimal"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="2" sm="1" md="1" lg="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (npBuff >= 100) return false
                  if (specialResist === '') specialResist = 0
                  specialResist += 10
                }
              "
              :on-click-minus-button="
                () => {
                  if (specialResist === 0) return false
                  specialResist -= 10
                }
              "
            />
          </v-col>

          <v-col cols="4" sm="2" md="3" lg="2">
            <v-text-field
              v-model.number="dressAtk"
              label="礼装ATK"
              type="number"
              inputmode="numeric"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="2" sm="1" md="1" lg="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (dressAtk >= 3000) return false
                  if (dressAtk === '') dressAtk = 0
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

          <v-col cols="6" sm="3" md="3">
            <v-select
              v-model="craftEssence"
              label="概念礼装"
              :items="selectableCraftEssences"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="2" md="3" lg="2">
            <v-checkbox
              v-model="isActiveSpecialAtkBuff"
              label="特攻状態"
              color="yellow darken-3"
              class="np-boost-switch"
            ></v-checkbox>
          </v-col>

          <v-col cols="6" sm="2" md="3" lg="2">
            <v-checkbox
              v-model="isActiveSpecialNpAtkBuff"
              label="特攻宝具"
              color="yellow darken-3"
              class="np-boost-switch"
            ></v-checkbox>
          </v-col>

          <client-only>
            <v-col v-if="$vuetify.breakpoint.xs" cols="6">
              <v-switch
                v-model="isNpBoosted"
                label="宝具ブースト"
                color="yellow darken-3"
                class="np-boost-switch"
              ></v-switch>
            </v-col>
          </client-only>
        </v-row>
      </v-card-text>
    </v-card>
    <ResultCard
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
      :np-hit-count="npHitCount"
      :np-rate="npRate"
      :np-acquisition-buff="npAcquisitionBuff"
      :np-range="npRange"
      :np-recharge="npRecharge"
      :damage-addition-buff="damageAdditionBuff"
      :dress-np-buff="dressNpBuff"
      :special-resist="specialResist"
      @reset-data="onResetData"
    />
  </v-row>
</template>

<script>
import { collection, query, orderBy, getDocs } from 'firebase/firestore/lite'
import db from '../plugins/firebase'

import ClassSkillAtkBuff from '../mixins/class-skill/atk-buff'
import classSkillsAtkBuff from '../mixins/class-skill/s-atk-buff'
import ClassSkillBusterBuff from '../mixins/class-skill/buster-buff'
import ClassSkillArtsBuff from '../mixins/class-skill/arts-buff'
import ClassSkillQuickBuff from '../mixins/class-skill/quick-buff'
import ClassSkillNpBuff from '../mixins/class-skill/np-buff'
import ClassSkillNpAcquisitionBuff from '../mixins/class-skill/np-acquisition-buff'
import ClassSkillNpRecharge from '../mixins/class-skill/np-charge'
import ClassSkillDamageAdditionBuff from '../mixins/class-skill/damage-addition-buff'

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
import PossessionSkillNpAcquisitionBuff from '../mixins/possession-skill/np-acquisition-buff'

import NpSkillArtsBuff from '../mixins/np-skill/arts-buff'
import NpSkillAtkBuff from '../mixins/np-skill/atk-buff'
import NpSkillDefensiveDown from '../mixins/np-skill/defensive-down'
import NpSkillBusterBuff from '../mixins/np-skill/buster-buff'
import NpSkillNpBuff from '../mixins/np-skill/np-buff'
import NpSkillQuickBuff from '../mixins/np-skill/quick-buff'
import NpSkillQuickDown from '../mixins/np-skill/quick-down'
import NpSkillsAtkBuff from '../mixins/np-skill/s-atk-buff'
import NpSkillNpRecharge from '../mixins/np-skill/np-recharge'
import NpSkillsNpAtkBuff from '../mixins/np-skill/s-np-atk-buff'
import NpSkillsNpAtkBuffByNplv from '../mixins/np-skill/s-np-atk-buff-by-nplv'
import NpSkillNpAcquisitionBuff from '../mixins/np-skill/np-acquisition-buff'

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
import OcSkillsNpAtkBuff from '../mixins/oc-skill/s-np-atk-buff'
import OcSkillNpmultiplierBuff from '../mixins/oc-skill/npmultiplier-buff'
import OcSkillNpAcquisitionBuff from '../mixins/oc-skill/np-acquisition-buff'
import OcSkillNpRecharge from '../mixins/oc-skill/np-recharge'

import EventCharacterBuff from '../mixins/event-buff'
import CraftEssence from '../mixins/craft-essence'
import HistoryCharacter from '../mixins/history-character'
import SelectClass from '../mixins/select-class'

import Dialog from '@/components/calculator/NpAcquisition/Dialog'
import SelectCharacterDialog from '@/components/calculator/SelectCharacterDialog'
import SkillDialog from '@/components/calculator/SkillDialog'
import SelectCharacterButton from '@/components/calculator/SelectCharacterButton'
import PlusMinusButton from '@/components/calculator/PlusMinusButton'
import ResultCard from '@/components/calculator/NpAcquisition/ResultCard'

export default {
  components: {
    Dialog,
    SelectCharacterDialog,
    SkillDialog,
    SelectCharacterButton,
    PlusMinusButton,
    ResultCard
  },
  mixins: [
    ClassSkillAtkBuff,
    classSkillsAtkBuff,
    ClassSkillBusterBuff,
    ClassSkillArtsBuff,
    ClassSkillQuickBuff,
    ClassSkillNpBuff,
    ClassSkillNpAcquisitionBuff,
    ClassSkillNpRecharge,
    ClassSkillDamageAdditionBuff,
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
    PossessionSkillNpAcquisitionBuff,
    NpSkillArtsBuff,
    NpSkillAtkBuff,
    NpSkillDefensiveDown,
    NpSkillBusterBuff,
    NpSkillNpBuff,
    NpSkillQuickBuff,
    NpSkillQuickDown,
    NpSkillsAtkBuff,
    NpSkillNpRecharge,
    NpSkillsNpAtkBuff,
    NpSkillsNpAtkBuffByNplv,
    NpSkillNpAcquisitionBuff,
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
    OcSkillsNpAtkBuff,
    OcSkillNpmultiplierBuff,
    OcSkillNpAcquisitionBuff,
    OcSkillNpRecharge,
    EventCharacterBuff,
    CraftEssence,
    HistoryCharacter,
    SelectClass
  ],
  data() {
    return {
      characters: [],
      characterClass: '',
      characterName: '',
      atk: [],
      selectableLv: [90, 100, 110, 120],
      selectedLv: 0,
      characterAtk: 0,
      npmultiplier: [],
      characterNpmultiplier: 0,
      servantNpType: '',
      selectServantNpType: ['Arts', 'Quick'],
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
        npChargeLevel: [1, 2, 3, 4, 5]
      },
      classCompatibility: 2.0,
      selectClassCompatibility: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 2.0 },
        { text: '不利', value: 0.5 },
        { text: '狂・分・詐 有利', value: 1.5 }
      ],
      attributeCompatibility: 1.0,
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
      npChargeLv: 1,
      atkBuff: 0, // 攻撃力バフ倍率
      cardBuff: 0, // カードバフ倍率
      sAtkBuff: 0, // 特攻バフ倍率 (special atk buff)
      npBuff: 0, // 宝具威力バフ倍率
      sNpAtkBuff: 100, // 特攻宝具バフ倍率 (special noble phantasm atk buff)
      dressAtk: 0, // 概念礼装のATK
      characterRarity: null,
      isEventCharacter: false,
      isNpBuffEventCharacter: false,
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
      isNpBoosted: false,
      historyCharacterNumbers: [],
      historyCharacters: [],
      npAcquisitionBuff: 0,
      npHitCount: 0,
      npRate: 0,
      npRange: '',
      npRecharge: 0,
      damageAdditionBuff: 0,
      craftEssence: '指定なし',
      dressNpBuff: 0,
      dressNpBuffHint: '',
      specialResist: 0,
      isChangeableNpType: true,
      isActiveSpecialAtkBuff: false,
      isActiveSpecialNpAtkBuff: false
    }
  },
  watch: {
    atkBuff() {
      if (this.atkBuff > 400) this.atkBuff = 400
    },
    cardBuff() {
      if (this.cardBuff > 400) this.cardBuff = 400
    },
    sAtkBuff() {
      if (this.sAtkBuff > 1000) this.sAtkBuff = 1000
    },
    npBuff() {
      if (this.npBuff > 500) this.npBuff = 500
    },
    dressAtk() {
      if (this.dressAtk > 3000) this.dressAtk = 3000
    },
    npAcquisitionBuff() {
      if (this.npAcquisitionBuff > 400) this.npAcquisitionBuff = 400
    },
    specialResist() {
      if (this.specialResist > 100) this.specialResist = 100
      if (this.specialResist < 0) this.specialResist = 0
    },
    characterName() {
      if (
        this.characterName === 'エミヤ' ||
        this.characterName === 'メリュジーヌ' ||
        this.characterName === 'スペースイシュタル'
      ) {
        this.isChangeableNpType = true
      } else {
        this.isChangeableNpType = false
      }
    },
    servantNpType() {
      if (this.characterName === 'スペースイシュタル') {
        this.checkChangeableNpType()
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
      this.setOcSkillAtkBuff(this.characterName)
      this.setOcSkillDefensiveDown(this.characterName)
      this.setOcSkillNpBuff(this.characterName)
      this.setOcSkillSAtkBuff(this.characterName)
      this.setOcSkillSNpAtkBuff(this.characterName)
    },
    isActiveSpecialAtkBuff() {
      if (this.isActiveSpecialAtkBuff === true) {
        this.setPossessionSkillSAtkBuff(this.characterName)
        this.setNpSkillSAtkBuff(this.characterName)
        this.setOcSkillSAtkBuff(this.characterName)
        if (
          this.characterName === '千子村正' ||
          this.characterName === '闇のコヤンスカヤ' ||
          this.characterName === '殺生院キアラ'
        ) {
          this.setClassSkillSAtkBuff(this.characterName)
        }
      } else {
        this.sAtkBuff = 0
      }
    },
    isActiveSpecialNpAtkBuff() {
      if (this.isActiveSpecialNpAtkBuff === true) {
        this.setOcSkillSNpAtkBuff(this.characterName)
        this.setNpSkillSNpAtkBuff(this.characterName)
        this.setNpSkillSNpAtkBuffByNpLv(this.characterName)
      } else {
        this.sNpAtkBuff = 100
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

    if (process.client) {
      this.initialHistoryCharacters()
    }
  },
  methods: {
    selectCharacter(characterName, filterdCard) {
      const character = this.characters.find(
        (character) => character.name === characterName
      )
      this.resetBuffSystem()
      this.characterName = characterName
      this.characterClass = character.class
      this.atk = character.atk
      this.characterAtk = this.atk[0]
      this.npmultiplier = character.npmultiplier
      this.setInitialNpChargeLv(character)
      this.characterRarity = character.rarity
      this.setSelectableLv(this.characterRarity)
      this.selectedLv = this.selectableLv[0]
      this.npRate = character.npchargeatk
      this.npHitCount = character.nphitcount
      this.npRange = character.nprange
      this.setNpType(character, filterdCard)
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
      // 特状態付与
      this.setPossessionSkillSAtkBuff(character.name)
      // NP獲得量UP
      this.setPossessionSkillNpAcquisitionBuff(character)

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
      // 特状態付与
      this.setNpSkillSAtkBuff(character.name)
      // 特攻宝具
      this.setNpSkillSNpAtkBuff(this.characterName)
      // 宝具リチャージ
      this.setNpSkillNpRecharge(character)

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
      // 特攻状態付与
      this.setOcSkillSAtkBuff(this.characterName)
      // 宝具特攻
      this.setOcSkillSNpAtkBuff(this.characterName)
      // 宝具威力アップ(倍率)
      if (this.characterName === 'アーラシュ') {
        this.OcSkillNpmultiplierBuff(this.characterName)
      }
      // NP獲得量UP
      if (this.characterName === 'メリュジーヌ') {
        this.setOcSkillNpAcquisitionBuff(this.characterName)
      }
      // 宝具リチャージ
      this.setOcSkillNpRecharge(this.characterName)

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
        this.setClassSkillSAtkBuff(character.name)
      }
      if (character.name === 'ディオスクロイ' || character.name === '千利休') {
        this.setClassSkillNpAcquisitionBuff(character)
      }
      if (character.name === 'トラロック') {
        this.setNpSkillNpAcquisitionBuff(character)
      }
      // 毎ターンNPチャージ
      this.setClassSkillNpchargeEveryTurn(character)
      // 与ダメージプラス
      this.setClassSkillDamageAdditionBuff(character)
      this.checkCraftEssence(character.class)
      // イベント特攻
      this.setEventCharacterBuff(character)
      this.addHistoryCharacter(character.number)
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
    setNpType(character, filterdCard) {
      if (character.name === 'スペースイシュタル') {
        switch (filterdCard) {
          case 'A':
            this.servantNpType = 'Arts'
            break
          case 'Q':
            this.servantNpType = 'Quick'
            break
        }
        if (filterdCard === 'A' || filterdCard === 'Q') {
          return this.checkChangeableNpType()
        }
      }

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
    checkChangeableNpType() {
      if (
        this.characterName === 'スペースイシュタル' &&
        this.servantNpType === 'Quick'
      ) {
        this.npmultiplier = [600, 800, 900, 950, 1000]
        this.onChangeNpmultiplier(this.npChargeLv)
      } else if (
        this.characterName === 'スペースイシュタル' &&
        this.servantNpType === 'Arts'
      ) {
        this.npmultiplier = [450, 600, 675, 712.5, 750]
        this.onChangeNpmultiplier(this.npChargeLv)
      }
    },
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
    onChangeNpmultiplier(npChargeLv) {
      if (this.npmultiplier.length === 0) {
        this.characterNpmultiplier = 0
        return
      }

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
      if (
        this.characterName === 'エウリュアレ' ||
        this.characterName === 'アルクェイド'
      ) {
        this.setNpSkillSNpAtkBuffByNpLv(this.characterName)
      }
    },
    openDisplay() {
      this.$refs.dlg.isOpen = true
    },
    openSelectCharacterDisplay() {
      this.$refs.selectCharacterDlg.isOpen = true
      this.$refs.selectCharacterDlg.searchText = ''
    },
    openSkillDisplay() {
      this.$refs.skillDlg.isOpen = true
    },
    resetBuffSystem() {
      this.fou = 1000
      this.characterAtk = 0
      this.npChargeLv = 1
      this.characterNpmultiplier = 0
      this.servantNpType = ''
      this.atkBuff = 0
      this.cardBuff = 0
      this.npAcquisitionBuff = 0
      this.sAtkBuff = 0
      this.npBuff = 0
      this.sNpAtkBuff = 100
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
      this.damageAdditionBuff = 0
      this.npRecharge = 0
      this.isActiveSpecialAtkBuff = false
      this.isActiveSpecialNpAtkBuff = false
      if (this.craftEssence === '指定なし') {
        this.dressAtk = 0
      }
    },
    onResetData() {
      this.characterClass = ''
      this.characterName = ''
      this.atk = []
      this.fou = 1000
      this.selectedLv = 0
      this.characterAtk = 0
      this.npChargeLv = 1
      this.npmultiplier = []
      this.characterNpmultiplier = 0
      this.servantNpType = ''
      this.atkBuff = 0
      this.cardBuff = 0
      this.npAcquisitionBuff = 0
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
      this.damageAdditionBuff = 0
      this.npRecharge = 0
      this.craftEssence = '指定なし'
      this.specialResist = 0
      this.isActiveSpecialAtkBuff = false
      this.isActiveSpecialNpAtkBuff = false
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: '【FGO】宝具NP計算',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'このページでは宝具のNP回収計算ができます。各ヒットまでの累計ダメージとオーバーキルヒット数毎の獲得NPを計算できるので、宝具を連発できる敵の最大HPを確認できます。'
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
.v-messages__message {
  color: gold;
}
</style>
