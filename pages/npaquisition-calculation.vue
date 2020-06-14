<template>
  <v-row dense>
    <v-card class="col-md-12">
      <v-card-title class="headline">
        宝具NP獲得計算
        <v-flex style="text-align: right;">
          <v-btn
            outlined
            small
            fab
            class="mr-3"
            color="purple lighten-1"
            @click="openDisplay()"
          >
            <v-icon>mdi-help</v-icon>
          </v-btn>
        </v-flex>
      </v-card-title>
      <v-card-subtitle>
        Arts Quick宝具のサーヴァントのみ
      </v-card-subtitle>

      <!-- ダイアログ (使い方、計算項目の詳細) -->
      <Dialog ref="dlg" />

      <v-card-text>
        <v-row no-gutters>
          <v-col cols="12" sm="4" md="3">
            <v-select
              v-model="characterClass"
              label="クラス"
              :items="items.class"
              class="mr-3"
              color="teal accent-4"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">
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

          <v-col cols="4" sm="3" md="2">
            <v-text-field
              v-model.number="npChargeAmount"
              label="NPレート"
              disabled
              placeholder="自動"
              class="mr-3"
            ></v-text-field>
          </v-col>

          <v-col cols="4" sm="3" md="2">
            <v-text-field
              v-model.number="npHits"
              label="宝具ヒット数"
              disabled
              placeholder="自動"
              suffix="hit"
              class="mr-3"
            ></v-text-field>
          </v-col>

          <v-col cols="4" sm="3" md="2">
            <v-text-field
              v-model="servantNPType"
              label="宝具タイプ"
              disabled
              placeholder="自動"
              class="mr-3"
            ></v-text-field>
          </v-col>

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric|maxNumericalValue"
            >
              <v-text-field
                v-model.number="cardBuff"
                label="カード性能UP"
                suffix="％"
                :error-messages="errors"
                class="mr-3"
                color="teal accent-4"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="1">
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

          <v-col cols="8" sm="2" md="2">
            <validation-provider ref="provider" v-slot="{ errors }">
              <v-text-field
                v-model.number="npAcquisitionBuff"
                label="NP獲得量UP"
                suffix="％"
                :error-messages="errors"
                class="mr-3"
                color="teal accent-4"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  npAcquisitionBuff += 10
                }
              "
              :on-click-minus-button="
                () => {
                  if (npAcquisitionBuff === 0) {
                    return false
                  }
                  npAcquisitionBuff -= 10
                }
              "
            />
          </v-col>

          <v-col cols="8" sm="2" md="2">
            <validation-provider
              ref="provider"
              v-slot="{ errors }"
              rules="required|numeric|maxOverkillHits"
            >
              <v-text-field
                v-model.number="overkillHits"
                label="オーバーキルヒット数"
                suffix="hit"
                :error-messages="errors"
                class="mr-3"
                color="teal accent-4"
              ></v-text-field>
            </validation-provider>
          </v-col>

          <v-col cols="4" sm="2" md="1">
            <PlusMinusButton
              :on-click-plus-button="
                () => {
                  overkillHits += 1
                }
              "
              :on-click-minus-button="
                () => {
                  if (overkillHits === 0) {
                    return false
                  }
                  overkillHits -= 1
                }
              "
            />
          </v-col>

          <v-col cols="8" sm="2" md="2">
            <v-select
              v-model="enemyClass"
              label="敵クラス"
              :items="items.selectEnemyClass"
              class="mr-3"
              color="teal accent-4"
            ></v-select>
          </v-col>

          <v-col cols="4" sm="2" md="1">
            <v-select
              v-model.number="enemyCount"
              label="敵の数"
              :items="items.selectEnemyCount"
              class="mr-3"
              color="teal accent-4"
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
        </v-row>
      </v-card-text>
    </v-card>
    <!-- 結果のカード -->
    <ResultCard
      :character-name="characterName"
      :servant-n-p-type="servantNPType"
      :card-buff="cardBuff"
      :np-charge-amount="npChargeAmount"
      :np-hits="npHits"
      :overkill-hits="overkillHits"
      :enemy-class="enemyClass"
      :enemy-count="enemyCount"
      :np-acquisition-buff="npAcquisitionBuff"
      @reset-val="resetAll"
    />
    <!-- スマホの場合だけ、固定フッターにする -->
    <FixedFooter
      v-if="$vuetify.breakpoint.xs"
      :character-name="characterName"
      :servant-n-p-type="servantNPType"
      :card-buff="cardBuff"
      :np-charge-amount="npChargeAmount"
      :np-hits="npHits"
      :overkill-hits="overkillHits"
      :enemy-class="enemyClass"
      :enemy-count="enemyCount"
      :np-acquisition-buff="npAcquisitionBuff"
      @reset-val="resetAll"
    />
  </v-row>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import Dialog from '@/components/calculator/NpAcquisition/Dialog'
import PlusMinusButton from '@/components/calculator/PlusMinusButton'
import ResultCard from '@/components/calculator/NpAcquisition/ResultCard'
import FixedFooter from '@/components/calculator/NpAcquisition/FixedFooter'

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
      servantNPType: '', // キャラクターの宝具タイプ
      npChargeAmount: '', // NPレート
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
          'フォーリナー'
        ],
        selectEnemyClass: [
          'セイバー (1.0)',
          'アーチャー (1.0)',
          'ランサー (1.0)',
          'ライダー (1.1)',
          'キャスター (1.2)',
          'アサシン (0.9)',
          'バーサーカー (0.8)',
          'ルーラー (1.0)',
          'アヴェンジャー (1.0)',
          'ムーンキャンサー (1.2)',
          'アルターエゴ (1.0)',
          'フォーリナー (1.0)'
        ],
        selectEnemyCount: [1, 2, 3] // 敵の数
      },
      enemyClass: 'セイバー (1.0)',
      enemyCount: 3,
      cardBuff: 0, // カード性能UP倍率
      npAcquisitionBuff: 0 // NP獲得量UP倍率
    }
  },
  computed: {
    characters() {
      return this.$store.getters['characters/artsQuickCahracters']
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
  created() {
    this.$store.dispatch('characters/init')
  },
  methods: {
    // 選択されたキャラクターが持つ値を取得
    onChangeVal(characterName) {
      for (let i = 0; i < this.characters.length; i++) {
        const character = this.characters[i]
        if (character.name === characterName) {
          this.npChargeAmount = character.npchargeatk
          this.npHits = character.nphitcount
          this.setNpType(character)
          this.setEnemyCount(character)
        }
      }
    },
    // 選択されたキャラクターの「宝具タイプ」を返す
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
    // 単体宝具のキャラは敵の数を１に設定
    setEnemyCount(character) {
      if (character.npmultiplier[0] >= 900) {
        this.enemyCount = 1
      } else {
        this.enemyCount = 3
      }
    },
    openDisplay() {
      this.$refs.dlg.isDisplay = true
    },
    resetAll() {
      this.characterClass = ''
      this.characterName = ''
      this.servantNPType = ''
      this.npChargeAmount = ''
      this.npHits = 0
      this.overkillHits = 0
      this.enemyClass = 'セイバー (1.0)'
      this.enemyCount = 3
      this.cardBuff = 0
      this.npAcquisitionBuff = 0
    }
  }
}
</script>

<style scoped>
.v-card {
  border: solid teal 1px;
}
</style>
