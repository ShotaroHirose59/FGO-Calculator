<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm6 md6>
      <v-row>
        <v-card class="col-md-6" max-width="550">
          <v-card-title class="headline">
            宝具ダメージ計算
            <v-flex style="text-align: right;">
              <v-btn
                outlined
                small
                fab
                color="purple lighten-1"
                @click="openDisplay()"
              >
                <v-icon>mdi-help</v-icon>
              </v-btn>
            </v-flex>
          </v-card-title>

          <!-- ダイアログ(使い方、計算項目の詳細) -->
          <Dialog ref="dlg" />

          <v-form>
            <v-container>
              <v-row no-gutters>
                <v-flex xs12 sm3 md4>
                  <v-select
                    v-model="characterClass"
                    label="クラス"
                    :items="items.class"
                    class="ml-2 mr-1"
                    color="teal accent-4"
                  ></v-select>
                </v-flex>

                <v-flex xs8 sm3 md6>
                  <v-select
                    v-model="characterName"
                    label="サーヴァント"
                    :items="filteredCharacters"
                    :disabled="!characterClass"
                    placeholder="先にクラス選択"
                    class="ml-2 mr-1"
                    color="teal accent-4"
                    @input="onChangeVal(characterName)"
                  ></v-select>
                </v-flex>

                <v-flex xs4 sm2 md2>
                  <v-text-field
                    v-model="servantNPType"
                    label="宝具タイプ"
                    disabled
                    placeholder="自動"
                    class="ml-2 mr-1"
                    color="teal accent-4"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm2 md3>
                  <v-select
                    v-model="npChargeLv"
                    label="宝具レベル"
                    :items="items.npChargeLevel"
                    class="ml-2 mr-1"
                    color="teal accent-4"
                    @change="onChangeNpmultiplier(npChargeLv)"
                  ></v-select>
                </v-flex>

                <v-flex xs6 sm2 md3>
                  <v-text-field
                    v-model.number="characterNpmultiplier"
                    label="宝具倍率"
                    disabled
                    suffix="％"
                    placeholder="自動"
                    class="ml-2 mr-1"
                    color="teal accent-4"
                  ></v-text-field>
                </v-flex>

                <v-flex xs6 sm2 md3>
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
                      class="ml-2 mr-1"
                      color="teal accent-4"
                    ></v-text-field>
                  </validation-provider>
                </v-flex>

                <v-flex xs6 sm2 md3>
                  <v-switch
                    v-model="atk"
                    label="Lv.100"
                    :disabled="!characterAtk"
                    hide-details
                    class="ml-5 mr-1"
                    color="teal accent-4"
                    @change="onSwitchAtk()"
                  ></v-switch>
                </v-flex>
              </v-row>

              <v-row no-gutters>
                <v-flex xs3 sm3 md3>
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
                      class="mt-4 ml-2 mr-1"
                      color="teal accent-4"
                    ></v-text-field>
                  </validation-provider>
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                      class="mt-4 ml-2 mr-1"
                      color="teal accent-4"
                    ></v-text-field>
                  </validation-provider>
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                      class="ml-2 mr-1"
                      color="teal accent-4"
                    ></v-text-field>
                  </validation-provider>
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                      class="ml-2 mr-1"
                      color="teal accent-4"
                    ></v-text-field>
                  </validation-provider>
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                      class="ml-2 mr-1"
                      color="teal accent-4"
                    ></v-text-field>
                  </validation-provider>
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                </v-flex>

                <v-flex xs3 sm3 md3>
                  <validation-provider
                    ref="provider"
                    v-slot="{ errors }"
                    rules="required|numeric"
                  >
                    <v-text-field
                      v-model.number="dressAtk"
                      label="礼装ATK"
                      :error-messages="errors"
                      class="ml-2 mr-1"
                      color="teal accent-4"
                    ></v-text-field>
                  </validation-provider>
                </v-flex>

                <v-flex xs3 sm3 md3>
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
                </v-flex>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
        <v-card class="col-md-6">
          <v-card-title class="headline" max-width="550">
            ダメージ結果
            <v-flex style="text-align: right;">
              <v-btn
                style="text-align: right;"
                outlined
                small
                fab
                color="purple lighten-1"
                @click="openResultDisplay()"
              >
                <v-icon>mdi-help</v-icon>
              </v-btn>
            </v-flex>
          </v-card-title>
          <v-card-subtitle class="mt-1">
            宝具ダメージには数値が強制的に0.9~1.1倍される乱数調整が発生する
            周回では確実に相手を倒すことが重要なので最小ダメージを参考にすると良い。
          </v-card-subtitle>

          <!-- ダイアログ(計算方法) -->
          <ResultDialog ref="rstDlg" />

          <v-container>
            <v-row no-gutters>
              <v-flex xs6 sm6 md6>
                <!-- イラストと吹き出しを差し込む -->
                <SpeechBubble
                  :character-name="characterName"
                  :average-damage="averageDamage"
                />
              </v-flex>

              <v-flex xs6 sm6 md6>
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
              </v-flex>

              <v-flex xs6 sm4 md4>
                <v-select
                  v-model="classCompatibility"
                  label="クラス相性"
                  :items="selectClassCompatibility"
                  class="ml-2 mr-5"
                  color="teal accent-4"
                ></v-select>
              </v-flex>

              <v-flex xs6 sm4 md4>
                <v-select
                  v-model="attributeCompatibility"
                  label="属性相性"
                  :items="selectAttributeCompatibility"
                  class="ml-2 mr-5"
                  color="teal accent-4"
                ></v-select>
              </v-flex>

              <v-flex xs12 sm4 md4>
                <v-btn
                  color="error"
                  :block="$vuetify.breakpoint.xs"
                  class="mt-3"
                  outlined
                  @click="reset()"
                  >計算リセット</v-btn
                >
              </v-flex>
            </v-row>
          </v-container>
        </v-card>
        <!-- スマホの場合だけ、固定フッターを用意 -->
        <v-footer
          v-if="$vuetify.breakpoint.xs"
          :fixed="$vuetify.breakpoint.xs"
          app
        >
          <v-progress-linear
            height="40"
            color="purple accent-3"
            style="color: white;"
            reactive
          >
            <v-flex xs12 sm12>
              <v-row algin="center">
                <v-col style="text-align: center; font-size: 1.2rem;">
                  <strong>TOTAL {{ averageDamage.toLocaleString() }}</strong>
                </v-col>
              </v-row>
            </v-flex>
          </v-progress-linear>
        </v-footer>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import Dialog from '@/components/calculator/Npatk/Dialog'
import ResultDialog from '@/components/calculator/Npatk/ResultDialog'
import PlusMinusButton from '@/components/calculator/Npatk/PlusMinusButton'
import SpeechBubble from '@/components/calculator/Npatk/SpeechBubble'

export default {
  components: {
    ValidationProvider,
    Dialog,
    ResultDialog,
    PlusMinusButton,
    SpeechBubble
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
      servantNPType: '', // キャラクターの宝具タイプ
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
      selectClassCompatibility: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 2.0 },
        { text: '不利', value: 0.5 },
        { text: '狂・分 有利', value: 1.5 }
      ],
      classCompatibility: 1.0, // クラス相性補正 デフォルトでselectClassCompatibilityを'等倍'にする
      selectAttributeCompatibility: [
        { text: '等倍', value: 1.0 },
        { text: '有利', value: 1.1 },
        { text: '不利', value: 0.9 }
      ],
      attributeCompatibility: 1.0, // 属性相性補正。デフォルトでselectAttributeCompatibilityを'等倍'にする
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
    // 宝具の平均ダメージ 乱数調整1.0倍 (100で割ってる箇所は数値を％として扱っているから)
    // 0.23はFGOのダメージ処理で必ず入る固定補正値
    averageDamage: {
      get() {
        return Math.floor(
          (this.characterAtk + this.dressAtk) *
            (this.characterNpmultiplier / 100) *
            0.23 *
            (this.cardVal * ((100 + this.cardBuff) / 100)) *
            this.classCompatibility *
            this.attributeCompatibility *
            this.classCorrection *
            ((100 + this.atkBuff) / 100) *
            ((100 + this.sAtkBuff + this.npBuff) / 100) *
            ((100 + this.sNpAtkBuff) / 100)
        )
      }
    },
    // 宝具の最低ダメージ 乱数調整0.9倍
    minimumDamage: {
      get() {
        return Math.floor(this.averageDamage * 0.9).toLocaleString()
      }
    },
    // 宝具の最高ダメージ 乱数調整1.1倍
    maximumDamage: {
      get() {
        return Math.floor(this.averageDamage * 1.1).toLocaleString()
      }
    },
    // クラス補正値
    classCorrection: {
      get() {
        switch (this.characterClass) {
          case 'セイバー':
            return 1.0
          case 'ライダー':
            return 1.0
          case 'ムーンキャンサー':
            return 1.0
          case 'アルターエゴ':
            return 1.0
          case 'フォーリナー':
            return 1.0
          case 'アーチャー':
            return 0.95
          case 'ランサー':
            return 1.05
          case 'キャスター':
            return 0.9
          case 'アサシン':
            return 0.9
          case 'バーサーカー':
            return 1.1
          case 'ルーラー':
            return 1.1
          case 'アヴェンジャー':
            return 1.1
          default:
            return 0
        }
      }
    },
    // 宝具タイプ補正値
    cardVal: {
      get() {
        switch (this.servantNPType) {
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
          this.attributeCompatibility = 1 // 等倍
        }
      }
    },
    // 選択されたキャラクターの「宝具タイプ」を返す。
    setNpType(character) {
      switch (character.card) {
        case 'B':
          this.servantNPType = 'Buster'
          break
        case 'A':
          this.servantNPType = 'Arts'
          break
        case 'Q':
          this.servantNPType = 'Quick'
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
    openResultDisplay() {
      this.$refs.rstDlg.isResultDisplay = true
    },
    reset() {
      this.characterClass = ''
      this.characterName = ''
      this.atk = []
      this.characterAtk = ''
      this.npChargeLv = ''
      this.npmultiplier = []
      this.characterNpmultiplier = ''
      this.servantNPType = ''
      this.classCompatibility = 1.0 // 等倍
      this.attributeCompatibility = 1.0 // 等倍
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
  border: solid teal 1px;
  margin: 5px 10px;
}
</style>
