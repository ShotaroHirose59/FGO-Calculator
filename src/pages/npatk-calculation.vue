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

          <v-col cols="12" sm="8" md="8">
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

          <v-col cols="4" sm="4" md="4">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric"
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

          <v-col cols="4" sm="4" md="4">
            <v-select
              v-model="fou"
              label="フォウくん"
              :items="selectFou"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="4" sm="4" md="4">
            <v-select
              v-model="selectedLv"
              label="Lv."
              :items="selectLv"
              :disabled="!characterName"
              class="mr-3"
              color="teal"
              @change="onChangeLv(selectedLv)"
            ></v-select>
          </v-col>

          <v-col cols="4" sm="4" md="4">
            <v-select
              v-model="servantNpType"
              label="宝具"
              :items="selectServantNpType"
              class="mr-3"
              color="teal"
            ></v-select>
          </v-col>

          <v-col cols="4" sm="4" md="4">
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

          <v-col cols="4" sm="4" md="4">
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

          <v-col cols="8" sm="2" md="2">
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

          <v-col cols="4" sm="2" md="2">
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

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric|maxCardBuff"
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

          <v-col cols="4" sm="2" md="2">
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

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric|maxNpBuff"
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
                  if (sAtkBuff >= 500) {
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

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric|maxNpBuff"
            >
              <v-text-field
                v-model.number="npBuff"
                label="宝具威力UP"
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
                  if (npBuff >= 500) {
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

          <v-col cols="8" sm="2" md="2">
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

          <v-col cols="4" sm="2" md="2">
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

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric|maxDressAtk"
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
                  if (dressAtk >= 3000) {
                    return false
                  }
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
        @reset-val="resetAll"
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
        :class-compatibility="classCompatibility"
        :attribute-compatibility="attributeCompatibility"
        @reset-val="resetAll"
      />
    </client-only>
  </v-row>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { collection, query, orderBy, getDocs } from 'firebase/firestore/lite'
import db from '../plugins/firebase'
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
      characters: [],
      characterClass: '', // 選択されたクラス
      characterName: '', // 選択されたキャラクター
      atk: [], // キャラクターの攻撃力の配列
      selectLv: [90, 100, 110, 120],
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
      sNpAtkBuff: 0, // 特攻宝具バフ倍率 (special noble phantasm atk buff)
      dressAtk: 0, // 概念礼装のATK
      characterRarity: null,
      isEventCharacter: false,
      isNpBuffEventCharacter: false
    }
  },
  computed: {
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
  watch: {
    servantNpType() {
      if (this.characterName === 'エミヤ' && this.servantNpType === 'Arts') {
        this.npmultiplier = [600, 750, 825, 862, 900]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      }
      if (this.characterName === 'エミヤ' && this.servantNpType === 'Buster') {
        this.npmultiplier = [400, 500, 550, 575, 600]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      }
      if (
        this.characterName === 'メリュジーヌ' &&
        this.servantNpType === 'Buster'
      ) {
        this.npmultiplier = [300, 400, 450, 475, 500]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      }
      if (
        this.characterName === 'メリュジーヌ' &&
        this.servantNpType === 'Arts'
      ) {
        this.npmultiplier = [900, 1200, 1350, 1425, 1500]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      }
      if (
        this.characterName === 'スペースイシュタル' &&
        this.servantNpType === 'Buster'
      ) {
        this.npmultiplier = [300, 400, 450, 475, 500]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      }
      if (
        this.characterName === 'スペースイシュタル' &&
        this.servantNpType === 'Quick'
      ) {
        this.npmultiplier = [600, 800, 900, 950, 1000]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      }
      if (
        this.characterName === 'スペースイシュタル' &&
        this.servantNpType === 'Arts'
      ) {
        this.npmultiplier = [450, 600, 675, 712, 750]
        this.characterNpmultiplier = this.npmultiplier[0]
        this.npChargeLv = 1
      }
    }
  },
  async created() {
    if (!db) {
      return
    }
    const q = query(collection(db, 'characters'), orderBy('number', 'asc'))
    await getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.characters.push(doc.data())
      })
    })
  },
  methods: {
    // 選択されたキャラクターが持つ値を取得
    onChangeVal(characterName) {
      for (let i = 0; i < this.characters.length; i++) {
        const character = this.characters[i]
        if (character.name === characterName) {
          this.resetBuffSystem()
          this.atk = character.atk // 「攻撃力」を一旦配列で取得
          this.characterAtk = this.atk[0] // デフォルトの攻撃力
          this.npChargeLv = 1 // 「宝具レベル」を１にする
          this.npmultiplier = character.npmultiplier // 「宝具倍率」を一旦配列で取得
          this.characterNpmultiplier = this.npmultiplier[0] // 「宝具レベル１時」の宝具倍率を取得
          this.characterRarity = character.rarity
          this.setSelectLv(this.characterRarity)
          this.setNpType(character)
          this.setClassCompatibility(character)
          // this.setEventCharacterBuff(character)
        }
      }
    },
    setSelectLv(characterRarity) {
      switch (characterRarity) {
        case 1:
          this.selectLv = [60, 70, 80, 90, 100, 110, 120]
          break
        case 2:
          this.selectLv = [65, 70, 80, 90, 100, 110, 120]
          break
        case 3:
          this.selectLv = [70, 80, 90, 100, 110, 120]
          break
        case 4:
          this.selectLv = [80, 90, 100, 110, 120]
          break
        case 5:
          this.selectLv = [90, 100, 110, 120]
          break
      }
      this.selectedLv = this.selectLv[0]
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
        case 'プリテンダー':
          this.classCompatibility = 1.5
          break
        default:
          this.classCompatibility = 2.0
          break
      }
    },
    setEventCharacterBuff(character) {
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      // 事件簿コラボ
      // グレイは宝具も50%
      if (character.name === 'グレイ') {
        this.isEventCharacter = true
        this.isNpBuffEventCharacter = true
        this.sAtkBuff = 100
        this.npBuff = 50
      } else if (
        character.name === 'アストライア' ||
        character.name === 'ヘファイスティオン'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 100
      } else if (
        character.name === 'アルトリア〔オルタ〕' ||
        character.name === 'モリアーティ' ||
        character.name === 'イスカンダル' ||
        character.name === 'アレキサンダー' ||
        character.name === 'ダヴィンチ（キャスター）' ||
        character.name === 'バベッジ' ||
        character.name === 'エミヤ（アサシン）'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 50
      } else if (
        character.name === 'アルトリア〔ランサーオルタ〕' ||
        character.name === 'ナーサリー' ||
        character.name === 'シェイクスピア' ||
        character.name === 'ジャック' ||
        character.name === '坂田金時' ||
        character.name === 'バニヤン' ||
        character.name === 'サリエリ'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 30
      }
    },
    onChangeLv(selectedLv) {
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
      } else if (this.characterRarity === 2) {
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
      this.sNpAtkBuff = 0
      this.dressAtk = 0
      this.characterRarity = null
      if (!this.$vuetify.breakpoint.xs) {
        this.$refs.child.resetCompatibility()
      } else {
        this.classCompatibility = 2.0
        this.attributeCompatibility = 1.0
      }
    },
    resetAll() {
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
      this.sNpAtkBuff = 0
      this.dressAtk = 0
      this.classCompatibility = 2.0
      this.attributeCompatibility = 1.0
      this.characterRarity = null
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
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
</style>
