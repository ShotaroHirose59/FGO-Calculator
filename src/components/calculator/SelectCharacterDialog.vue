<template>
  <v-dialog
    v-model="isOpen"
    max-width="720px"
    scrollable
    :fullscreen="$vuetify.breakpoint.xsOnly"
    hide-overlay
    :transition="transitionMode"
  >
    <v-card style="border-radius: 12px;">
      <v-toolbar>
        <v-icon class="mr-2" @click="isOpen = false">
          mdi-close
        </v-icon>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="searchText"
              class="ml-4 mr-4 mt-6"
              filled
              rounded
              dense
              flat
              clearable
              placeholder="サーヴァント名"
              autofocus
              type="text"
              color="white"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-toolbar>
      <!-- <v-subheader>{{ searchedCharacterCount }}騎</v-subheader> -->
      <v-tabs v-model="tabTitle" color="purple lighten-1" grow>
        <v-tab v-for="tabItem in tabItems" :key="tabItem" :value="tabItem">
          {{ tabItem }}
        </v-tab>
      </v-tabs>
      <div class="mx-4 my-4">
        <div style="display: flex">
          <h4 style="margin-top: 2px">絞り込み</h4>
          <template v-if="$vuetify.breakpoint.xs">
            <v-btn text small class="ml-auto mr-4" @click="resetFilter">
              クリア
            </v-btn>
          </template>
          <template v-else>
            <v-btn text small class="ml-4 mr-4" @click="resetFilter">
              クリア
            </v-btn>
          </template>
        </div>
        <v-row no-gutters class="mt-4">
          <v-col cols="6" sm="4" md="3">
            <v-select
              v-model="filterdClass"
              label="クラス"
              :items="items.filterableClass"
              class="mr-4"
              color="teal"
              dense
            ></v-select>
          </v-col>
          <v-col cols="6" sm="4" md="3">
            <v-select
              v-model="filterdRarity"
              label="レアリティ"
              :items="items.filterableRarities"
              class="mr-4"
              color="teal"
              dense
            ></v-select>
          </v-col>
          <v-col cols="6" sm="4" md="3">
            <v-select
              v-model="filterdCard"
              label="宝具タイプ"
              :items="items.filterableCards"
              class="mr-4"
              color="teal"
              dense
            ></v-select>
          </v-col>
          <v-col cols="6" sm="4" md="3">
            <v-select
              v-model="filterdNprange"
              label="宝具効果"
              :items="items.filterableNprange"
              class="mr-4"
              color="teal"
              dense
            ></v-select>
          </v-col>
        </v-row>
      </div>
      <v-divider />
      <v-card-text>
        <template v-if="tabTitle === 0">
          <v-list>
            <v-list-item-group color="white">
              <template v-if="shouldUseFuse">
                <v-list-item
                  v-for="character in searchedCharacters"
                  :key="character.item.id"
                >
                  <v-list-item-content
                    @click="onSelectCharacter(character.item.name)"
                  >
                    <v-list-item-title>{{
                      character.item.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="caption">
                      ★{{ character.item.rarity }} / {{ character.item.class }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div style="color: #ffffffb3;">
                    No. {{ character.item.number }}
                  </div>
                </v-list-item>
              </template>
              <template v-else>
                <v-list-item
                  v-for="character in searchedCharacters"
                  :key="character.id"
                >
                  <v-list-item-content
                    @click="onSelectCharacter(character.name)"
                  >
                    <v-list-item-title>{{ character.name }}</v-list-item-title>
                    <v-list-item-subtitle class="caption">
                      ★{{ character.rarity }} / {{ character.class }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div style="color: #ffffffb3;">
                    No. {{ character.number }}
                  </div>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </template>
        <template v-if="tabTitle === 1">
          <v-list>
            <v-list-item-group color="white">
              <template v-if="shouldUseFuse">
                <v-list-item
                  v-for="character in searchedEventCharacters"
                  :key="character.item.id"
                >
                  <v-list-item-content
                    @click="onSelectCharacter(character.item.name)"
                  >
                    <v-list-item-title>{{
                      character.item.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="caption">
                      ★{{ character.item.rarity }} / {{ character.item.class }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div style="color: #ffffffb3;">
                    No. {{ character.item.number }}
                  </div>
                </v-list-item>
              </template>
              <template v-else>
                <v-list-item
                  v-for="character in searchedEventCharacters"
                  :key="character.id"
                >
                  <v-list-item-content
                    @click="onSelectCharacter(character.name)"
                  >
                    <v-list-item-title>{{ character.name }}</v-list-item-title>
                    <v-list-item-subtitle class="caption">
                      ★{{ character.rarity }} / {{ character.class }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div style="color: #ffffffb3;">
                    No. {{ character.number }}
                  </div>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </template>
        <template v-if="tabTitle === 2">
          <v-list>
            <v-list-item-group color="white">
              <template v-if="shouldUseFuse">
                <v-list-item
                  v-for="character in searchedSelectHistoryCharacters.reverse()"
                  :key="character.item.id"
                >
                  <v-list-item-content
                    @click="onSelectCharacter(character.item.name)"
                  >
                    <v-list-item-title>{{
                      character.item.name
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="caption">
                      ★{{ character.item.rarity }} / {{ character.item.class }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="mr-2" style="color: #ffffffb3;">
                    No. {{ character.item.number }}
                  </div>
                  <div>
                    <v-icon
                      class="mr-2"
                      color="white"
                      @click="onDeleteHistoryCharacter(character.item.number)"
                    >
                      mdi-close
                    </v-icon>
                  </div>
                </v-list-item>
              </template>
              <template v-else>
                <v-list-item
                  v-for="character in searchedSelectHistoryCharacters.reverse()"
                  :key="character.id"
                >
                  <v-list-item-content
                    @click="onSelectCharacter(character.name)"
                  >
                    <v-list-item-title>{{ character.name }}</v-list-item-title>
                    <v-list-item-subtitle class="caption">
                      ★{{ character.rarity }} / {{ character.class }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <div class="mr-2" style="color: #ffffffb3;">
                    No. {{ character.number }}
                  </div>
                  <div>
                    <v-icon
                      class="mr-2"
                      color="white"
                      @click="onDeleteHistoryCharacter(character.number)"
                    >
                      mdi-close
                    </v-icon>
                  </div>
                </v-list-item>
              </template>
            </v-list-item-group>
          </v-list>
        </template>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import Fuse from 'fuse.js'
export default {
  // エミヤ、メリュ、Sイシュタル
  props: {
    characters: {
      type: Array,
      required: true
    },
    selectHistoryCharacters: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      eventCharacterNames: [
        // '水着アルトリア・キャスター',
        // 'ガウェイン',
        // 'ランスロット（セイバー）',
        // 'トリスタン',
        // '鈴鹿御前〔サマバケ〕',
        // 'トネリコ',
        // '水着クロエ',
        // 'オベロン',
        // 'ノクナレア',
        // '水着メリュジーヌ',
        // 'ＵＤＫ－バーゲスト',
        // 'ケット・クー・ミコケル'
      ],
      eventCharacters: [],
      tabTitle: null,
      tabItems: ['オール', 'イベ', '履歴'],
      isOpen: false,
      searchText: '',
      fuseJsOptions: {
        threshold: 0.2,
        keys: ['kanaName'],
        id: 'name',
        shouldSort: true
      },
      items: {
        filterableClass: [
          '指定なし',
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
          'プリテンダー',
          'ビースト'
        ],
        filterableRarities: ['指定なし', 5, 4, 3, 2, 1],
        filterableCards: ['指定なし', 'Q', 'A', 'B'],
        filterableNprange: ['指定なし', '全体', '単体']
      },
      filterdClass: '指定なし',
      filterdRarity: '指定なし',
      filterdCard: '指定なし',
      filterdNprange: '指定なし',
      regexpKanji: /([\u{3005}\u{3007}\u{303B}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)/mu
    }
  },
  computed: {
    transitionMode() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return 'dialog-bottom-transition'
      } else {
        return 'dialog-transition'
      }
    },
    filterdCharacters() {
      let characters = this.characters

      if (this.filterdClass !== '指定なし') {
        characters = characters.filter(
          (character) => character.class === this.filterdClass
        )
      }
      if (this.filterdRarity !== '指定なし') {
        characters = characters.filter(
          (character) => character.rarity === this.filterdRarity
        )
      }
      if (this.filterdCard !== '指定なし') {
        if (this.filterdCard === 'Q') {
          characters = characters.filter(
            (character) =>
              character.card === this.filterdCard ||
              character.name === 'スペースイシュタル'
          )
        } else {
          characters = characters.filter(
            (character) =>
              character.card === this.filterdCard ||
              character.name === 'エミヤ' ||
              character.name === 'スペースイシュタル' ||
              character.name === 'メリュジーヌ'
          )
        }
      }
      if (this.filterdNprange !== '指定なし') {
        if (this.filterdCard === 'B') {
          if (this.filterdNprange === '全体') {
            characters = characters.filter(
              (character) =>
                character.nprange === this.filterdNprange ||
                character.name === 'メリュジーヌ'
            )
          } else {
            characters = characters.filter(
              (character) =>
                character.nprange === this.filterdNprange &&
                character.name !== 'メリュジーヌ'
            )
          }
        } else {
          characters = characters.filter(
            (character) => character.nprange === this.filterdNprange
          )
        }
      }

      return characters
    },
    filterdSelectHistoryCharacters() {
      let characters = this.selectHistoryCharacters

      if (this.filterdClass !== '指定なし') {
        characters = characters.filter(
          (character) => character.class === this.filterdClass
        )
      }
      if (this.filterdRarity !== '指定なし') {
        characters = characters.filter(
          (character) => character.rarity === this.filterdRarity
        )
      }
      if (this.filterdCard !== '指定なし') {
        if (this.filterdCard === 'Q') {
          characters = characters.filter(
            (character) =>
              character.card === this.filterdCard ||
              character.name === 'スペースイシュタル'
          )
        } else {
          characters = characters.filter(
            (character) =>
              character.card === this.filterdCard ||
              character.name === 'エミヤ' ||
              character.name === 'スペースイシュタル' ||
              character.name === 'メリュジーヌ'
          )
        }
      }
      if (this.filterdNprange !== '指定なし') {
        if (this.filterdCard === 'B') {
          if (this.filterdNprange === '全体') {
            characters = characters.filter(
              (character) =>
                character.nprange === this.filterdNprange ||
                character.name === 'メリュジーヌ'
            )
          } else {
            characters = characters.filter(
              (character) =>
                character.nprange === this.filterdNprange &&
                character.name !== 'メリュジーヌ'
            )
          }
        } else {
          characters = characters.filter(
            (character) => character.nprange === this.filterdNprange
          )
        }
      }

      return characters
    },
    filterdEventCharacters() {
      let characters = this.eventCharacters

      if (this.filterdClass !== '指定なし') {
        characters = characters.filter(
          (character) => character.class === this.filterdClass
        )
      }
      if (this.filterdRarity !== '指定なし') {
        characters = characters.filter(
          (character) => character.rarity === this.filterdRarity
        )
      }
      if (this.filterdCard !== '指定なし') {
        if (this.filterdCard === 'Q') {
          characters = characters.filter(
            (character) =>
              character.card === this.filterdCard ||
              character.name === 'スペースイシュタル'
          )
        } else {
          characters = characters.filter(
            (character) =>
              character.card === this.filterdCard ||
              character.name === 'エミヤ' ||
              character.name === 'スペースイシュタル' ||
              character.name === 'メリュジーヌ'
          )
        }
      }
      if (this.filterdNprange !== '指定なし') {
        characters = characters.filter(
          (character) => character.nprange === this.filterdNprange
        )
      }

      return characters
    },
    searchedCharacterCount() {
      return this.searchedCharacters.length
    },
    searchedCharacters() {
      const fuse = new Fuse(this.filterdCharacters, this.fuseJsOptions)
      const searchedCharactersByfuse = fuse.search(this.hiraToKata)

      if (this.shouldUseFuse) {
        return searchedCharactersByfuse
      } else {
        return this.filterdCharacters.filter((character) =>
          character.name.includes(this.searchText)
        )
      }
    },
    searchedSelectHistoryCharacters() {
      const fuse = new Fuse(
        this.filterdSelectHistoryCharacters,
        this.fuseJsOptions
      )
      const searchedCharactersByfuse = fuse.search(this.hiraToKata)

      if (this.shouldUseFuse) {
        return searchedCharactersByfuse
      } else {
        return this.filterdSelectHistoryCharacters.filter((character) =>
          character.name.includes(this.searchText)
        )
      }
    },
    searchedEventCharacters() {
      const fuse = new Fuse(this.filterdEventCharacters, this.fuseJsOptions)
      const searchedCharactersByfuse = fuse.search(this.hiraToKata)

      if (this.shouldUseFuse) {
        return searchedCharactersByfuse
      } else {
        return this.filterdEventCharacters.filter((character) =>
          character.name.includes(this.searchText)
        )
      }
    },
    hiraToKata() {
      return this.searchText.replace(/[\u3041-\u3096]/g, (ch) =>
        String.fromCharCode(ch.charCodeAt(0) + 0x60)
      )
    },
    shouldUseFuse() {
      if (
        this.searchText !== '' &&
        !this.isIncludedKanji(this.searchText) &&
        !this.isIncludedEnglishLetter(this.searchText)
      ) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    searchText() {
      // Warn: テキストフィールドをクリアした時にnullになってしまう
      if (this.searchText === null) {
        this.searchText = ''
      }
    },
    characters() {
      if (this.eventCharacters.length > 0) return

      if (this.characters.length > 0) {
        this.setEventCharacters()
      }
    }
  },
  methods: {
    setEventCharacters() {
      this.eventCharacters = this.characters.filter((character) =>
        this.eventCharacterNames.includes(character.name)
      )
    },
    isIncludedKanji(text) {
      return this.regexpKanji.test(text)
    },
    isIncludedEnglishLetter(text) {
      if (text.match(/[a-zA-Z]/)) {
        return true
      } else {
        return false
      }
    },
    onSelectCharacter(characterName) {
      this.isOpen = false
      this.$emit('selectCharacter', characterName, this.filterdCard)
    },
    onDeleteHistoryCharacter(characterNumber) {
      this.$emit('deleteHistoryCharacter', characterNumber)
    },
    resetFilter() {
      this.filterdClass = '指定なし'
      this.filterdRarity = '指定なし'
      this.filterdCard = '指定なし'
      this.filterdNprange = '指定なし'
    }
  }
}
</script>

<style scoped>
/* v-dialogにscrollableを指定すると検索機能操作時に要素の高さが崩れるので指定 */
.v-toolbar {
  max-height: 56px;
}
.v-tabs {
  flex: none;
}
.v-card__text {
  height: 654px;
  padding: 0px !important;
}
.theme--dark.v-list-item--active:before {
  opacity: 0;
}
</style>
