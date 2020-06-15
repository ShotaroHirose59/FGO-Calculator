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
              class="mr-2"
              color="purple lighten-1"
              @click="openDisplay()"
            >
              <v-icon>mdi-help</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-toolbar>
      <v-card-subtitle v-if="!$vuetify.breakpoint.xs">
        単体宝具、全体宝具を持つサーヴァントが対象
      </v-card-subtitle>

      <!-- ダイアログ (使い方、計算項目の詳細) -->
      <Dialog ref="dlg" />

      <v-card-text>
        <v-row no-gutters>
          <v-col cols="12" sm="4" md="4">
            <v-select
              v-model="characterClass"
              label="クラス"
              :items="items.class"
              class="mr-3"
              color="teal accent-4"
            ></v-select>
          </v-col>

          <v-col cols="9" sm="6" md="6">
            <v-select
              v-model="characterName"
              label="サーヴァント"
              :items="filteredCharacters"
              :disabled="!characterClass"
              placeholder="先にクラス選択"
              class="mr-3"
              color="teal accent-4"
              @input="onChangeVal(characterName)"
            ></v-select>
          </v-col>

          <v-col cols="3" sm="2" md="2">
            <v-text-field
              v-model="servantNpType"
              label="宝具タイプ"
              disabled
              placeholder="自動"
              class="mr-3"
            ></v-text-field>
          </v-col>

          <v-col cols="6" sm="3" md="3">
            <v-select
              v-model="npChargeLv"
              label="宝具レベル"
              :items="items.npChargeLevel"
              :disabled="!characterName"
              class="mr-3"
              color="teal accent-4"
              @change="onChangeNpmultiplier(npChargeLv)"
            ></v-select>
          </v-col>

          <v-col cols="6" sm="3" md="3">
            <v-text-field
              v-model.number="characterNpmultiplier"
              label="宝具倍率"
              disabled
              suffix="％"
              placeholder="自動"
              class="mr-3"
              color="teal accent-4"
            ></v-text-field>
          </v-col>

          <v-col cols="6" sm="3" md="3">
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
                class="mr-3"
                color="teal accent-4"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="6" sm="3" md="3">
            <v-switch
              v-model="atk"
              label="Lv.100"
              :disabled="!characterName"
              hide-details
              class="mr-3"
              color="teal accent-4"
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
                class="mr-3"
                color="teal accent-4"
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
                class="mr-3"
                color="teal accent-4"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="3" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
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
                class="mr-3"
                color="teal accent-4"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="3" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
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
                class="mr-3"
                color="teal accent-4"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="3" sm="2" md="2">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
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
                class="mr-3"
                color="teal accent-4"
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
                class="mr-3"
                color="teal accent-4"
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
        </v-row>
      </v-card-text>
    </v-card>
    <ResultCard
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
      @reset-val="resetCalculation"
    />
  </v-row>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import Dialog from '@/components/calculator/Npatk/Dialog'
import PlusMinusButton from '@/components/calculator/PlusMinusButton'
import ResultCard from '@/components/calculator/Npatk/ResultCard'

export default {
  components: {
    ValidationProvider,
    Dialog,
    PlusMinusButton,
    ResultCard
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
    resetCalculation() {
      this.characterClass = ''
      this.characterName = ''
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
    }
  }
}
</script>

<style scoped>
.v-card {
  margin: 5px 0px;
}
</style>
