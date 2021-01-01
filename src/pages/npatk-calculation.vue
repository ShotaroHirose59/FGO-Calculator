<template>
  <v-row no-gutters>
    <v-card class="col-md-6">
      <v-toolbar class="title" elevation="4">
        宝具ダメージ 計算
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
          単体 or 全体宝具を持つ全てのサーヴァントが対象
        </v-card-subtitle>
      </client-only>

      <!-- ダイアログ (使い方、計算項目の詳細) -->
      <Dialog ref="dlg" />

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

          <v-col cols="12" sm="6" md="6">
            <v-select
              v-model="characterName"
              label="サーヴァント"
              :items="filteredCharacters"
              :disabled="!characterClass"
              :placeholder="placeholder"
              class="mr-4"
              color="teal"
              @input="onChangeVal(characterName)"
            ></v-select>
          </v-col>

          <v-col cols="4" sm="2" md="2">
            <v-select
              v-model="servantNpType"
              label="宝具"
              :items="selectServantNpType"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="4" sm="3" md="3">
            <v-select
              v-model="npChargeLv"
              label="宝具Lv."
              :items="items.npChargeLevel"
              :disabled="!characterName"
              class="mr-3"
              color="teal"
              @change="onChangeNpmultiplier(npChargeLv)"
            ></v-select>
          </v-col>

          <v-col cols="4" sm="3" md="3">
            <v-text-field
              v-model.number="characterNpmultiplier"
              label="宝具倍率"
              :disabled="!characterName"
              suffix="％"
              placeholder="自動"
              type="number"
              class="mr-4"
              color="teal"
            ></v-text-field>
          </v-col>

          <v-col cols="8" sm="3" md="3">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="numeric"
            >
              <v-text-field
                v-model.number="characterAtk"
                label="ATK"
                :error-messages="errors"
                placeholder="自動"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="3" md="3">
            <v-switch
              v-model="atk"
              label="Lv.100"
              :disabled="!characterName"
              hide-details
              class="ml-4"
              color="teal"
              @change="onSwitchAtk()"
            ></v-switch>
          </v-col>

          <v-col cols="3" sm="4" md="4">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric"
            >
              <v-text-field
                v-model.number="atkBuff"
                label="攻撃力UP"
                suffix="％"
                :error-messages="errors"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="3" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  atkBuff += 10
                }
              "
              :on-click-minus-button="
                () => {
                  if (atkBuff === 0) {
                    return false
                  }
                  atkBuff -= 10
                }
              "
            />
          </v-col>

          <v-col cols="3" sm="4" md="4">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric|maxNumericalValue"
            >
              <v-text-field
                v-model.number="cardBuff"
                label="カードUP"
                suffix="％"
                :error-messages="errors"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="3" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (cardBuff >= 400) {
                    return false
                  }
                  cardBuff += 10
                }
              "
              :on-click-minus-button="
                () => {
                  if (cardBuff === 0) {
                    return false
                  }
                  cardBuff -= 10
                }
              "
            />
          </v-col>

          <v-col cols="3" sm="4" md="4">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric|maxNumericalValue"
            >
              <v-text-field
                v-model.number="sAtkBuff"
                label="特攻バフ"
                suffix="％"
                :error-messages="errors"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="3" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (sAtkBuff >= 400) {
                    return false
                  }
                  sAtkBuff += 10
                }
              "
              :on-click-minus-button="
                () => {
                  if (sAtkBuff === 0) {
                    return false
                  }
                  sAtkBuff -= 10
                }
              "
            />
          </v-col>

          <v-col cols="3" sm="4" md="4">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric|maxNumericalValue"
            >
              <v-text-field
                v-model.number="npBuff"
                label="宝具威力UP"
                suffix="％"
                :error-messages="errors"
                type="number"
                class="mr-4"
                color="teal"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="3" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  if (npBuff >= 400) {
                    return false
                  }
                  npBuff += 10
                }
              "
              :on-click-minus-button="
                () => {
                  if (npBuff === 0) {
                    return false
                  }
                  npBuff -= 10
                }
              "
            />
          </v-col>

          <v-col cols="3" sm="4" md="4">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric"
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

          <v-col cols="3" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  sNpAtkBuff += 10
                }
              "
              :on-click-minus-button="
                () => {
                  if (sNpAtkBuff === 0) {
                    return false
                  }
                  sNpAtkBuff -= 10
                }
              "
            />
          </v-col>

          <v-col cols="3" sm="4" md="4">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric"
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

          <v-col cols="3" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  dressAtk += 100
                }
              "
              :on-click-minus-button="
                () => {
                  if (dressAtk === 0) {
                    return false
                  }
                  dressAtk -= 100
                }
              "
            />
          </v-col>

          <client-only>
            <v-col v-if="$vuetify.breakpoint.xs" cols="6" sm="4" md="4">
              <v-select
                v-model="classCompatibility"
                label="クラス相性"
                :items="selectClassCompatibility"
                class="mr-4"
                color="teal"
              ></v-select>
            </v-col>

            <v-col v-if="$vuetify.breakpoint.xs" cols="6" sm="4" md="4">
              <v-select
                v-model="attributeCompatibility"
                label="属性相性"
                :items="selectAttributeCompatibility"
                class="mr-4"
                color="teal"
              ></v-select>
            </v-col>

            <v-col
              v-if="$vuetify.breakpoint.xs"
              cols="12"
              style="text-align: center;"
            >
              <v-btn color="error" class="mt-3" outlined @click="resetAll()"
                >計算リセット</v-btn
              >
            </v-col>
          </client-only>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- 結果カード スマホの場合は表示しない -->
    <client-only>
      <ResultCard
        v-if="!$vuetify.breakpoint.xs"
        :character-class="characterClass"
        :character-name="characterName"
        :character-atk="characterAtk"
        :np-charge-lv="npChargeLv"
        :character-npmultiplier="characterNpmultiplier"
        :servant-np-type="servantNpType"
        :atk-buff="atkBuff"
        :card-buff="cardBuff"
        :s-atk-buff="sAtkBuff"
        :np-buff="npBuff"
        :s-np-atk-buff="sNpAtkBuff"
        :dress-atk="dressAtk"
        @reset-val="resetAll"
      />
      <!-- スマホの場合のみ、固定フッター用意 -->
      <FixedFooter
        v-if="$vuetify.breakpoint.xs"
        :character-class="characterClass"
        :character-name="characterName"
        :character-atk="characterAtk"
        :np-charge-lv="npChargeLv"
        :character-npmultiplier="characterNpmultiplier"
        :servant-np-type="servantNpType"
        :atk-buff="atkBuff"
        :card-buff="cardBuff"
        :s-atk-buff="sAtkBuff"
        :np-buff="npBuff"
        :s-np-atk-buff="sNpAtkBuff"
        :dress-atk="dressAtk"
        :class-compatibility="classCompatibility"
        :attribute-compatibility="attributeCompatibility"
        @reset-val="resetAll"
      />
    </client-only>
  </v-row>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import Dialog from '@/components/calculator/Npatk/Dialog'
import PlusMinusButton from '@/components/calculator/PlusMinusButton'
import ResultCard from '@/components/calculator/Npatk/ResultCard'
import FixedFooter from '@/components/calculator/Npatk/FixedFooter'

export default {
  components: {
    ValidationProvider,
    Dialog,
    PlusMinusButton,
    ResultCard,
    FixedFooter
  },
  data() {
    return {
      characterClass: '', // 選択されたクラス
      characterName: '', // 選択されたキャラクター
      atk: [], // キャラクターの攻撃力の配列
      switchAtk: false, // 真偽で攻撃力を変更
      characterAtk: '', // 配列から取得したサーヴァントの攻撃力
      npmultiplier: [], // キャラクターの宝具倍率の配列
      characterNpmultiplier: '', // 配列から取り出したサーヴァントの宝具倍率
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
          'フォーリナー'
        ],
        npChargeLevel: [1, 2, 3, 4, 5] // 宝具レベルの選択肢
      },
      classCompatibility: 2.0, // クラス相性補正 デフォルトでselectClassCompatibilityを'有利'にする
      selectClassCompatibility: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 2.0 },
        { text: '不利', value: 0.5 },
        { text: '狂・分 有利', value: 1.5 }
      ],
      attributeCompatibility: 1.0, // 属性相性補正デフォルトでselectAttributeCompatibilityを'等倍'にする
      selectAttributeCompatibility: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 1.1 },
        { text: '不利', value: 0.9 }
      ],
      npChargeLv: '', // 選択された宝具レベル
      atkBuff: 0, // 攻撃力バフ倍率
      cardBuff: 0, // カードバフ倍率
      sAtkBuff: 0, // 特攻バフ倍率 (special atk buff)
      npBuff: 0, // 宝具威力バフ倍率
      sNpAtkBuff: 0, // 特攻宝具バフ倍率 (special noble phantasm atk buff)
      dressAtk: 0 // 概念礼装のATK
    }
  },
  computed: {
    // stateから状態を取得
    characters() {
      return this.$store.getters['characters/orderdCharacters']
    },
    // クラスが選択されたら「そのクラスの値を持つキャラクターのみ」をセレクトボックスに表示
    filteredCharacters() {
      const filteredCharacters = []
      for (let i = 0; i < this.characters.length; i++) {
        const character = this.characters[i]
        if (character.class === this.characterClass) {
          filteredCharacters.push(character.name)
        }
      }
      return filteredCharacters
    },
    placeholder() {
      if (this.characterClass === '') {
        return '先にクラスを選択'
      } else {
        return 'サーヴァントを選択'
      }
    }
  },
  // データの初期化 Vuex
  created() {
    this.$store.dispatch('characters/init')
  },
  methods: {
    // 選択されたキャラクターが持つ値を取得
    onChangeVal(characterName) {
      for (let i = 0; i < this.characters.length; i++) {
        const character = this.characters[i]
        if (character.name === characterName) {
          this.atk = character.atk // 「攻撃力」を一旦配列で取得
          this.characterAtk = this.atk[0] // デフォルトの攻撃力
          this.npChargeLv = 1 // 「宝具レベル」を１にする
          this.npmultiplier = character.npmultiplier // 「宝具倍率」を一旦配列で取得
          this.characterNpmultiplier = this.npmultiplier[0] // 「宝具レベル１時」の宝具倍率を取得
          this.setNpType(character)
          this.setClassCompatibility(character)
          this.switchAtk = false
        }
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
    // クラス相性はdefaultで有利にする(数値が大きくなるからUX向上)
    setClassCompatibility(character) {
      switch (character.class) {
        case 'バーサーカー':
          this.classCompatibility = 1.5
          break
        case 'アルターエゴ':
          this.classCompatibility = 1.5
          break
        default:
          this.classCompatibility = 2.0
          break
      }
    },
    // キャラクターはデフォルト時([0])とLv.100時([1])の「攻撃力」を持つ。Switchすると値を変更
    onSwitchAtk() {
      if (this.switchAtk === false) {
        this.switchAtk = true
        this.characterAtk = this.atk[1]
      } else {
        this.switchAtk = false
        this.characterAtk = this.atk[0]
      }
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
    },
    openDisplay() {
      this.$refs.dlg.isDisplay = true
    },
    resetAll() {
      this.characterClass = ''
      this.characterName = ''
      this.atk = []
      this.switchAtk = false
      this.characterAtk = ''
      this.npChargeLv = ''
      this.characterNpmultiplier = ''
      this.servantNpType = ''
      this.atkBuff = 0
      this.cardBuff = 0
      this.sAtkBuff = 0
      this.npBuff = 0
      this.sNpAtkBuff = 0
      this.dressAtk = 0
      this.classCompatibility = 2.0
      this.attributeCompatibility = 1.0
    }
  },
  head() {
    return {
      title: 'FGO 宝具ダメージ計算'
    }
  }
}
</script>

<style>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
