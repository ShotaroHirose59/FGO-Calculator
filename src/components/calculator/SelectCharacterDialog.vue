<template>
  <v-dialog
    v-model="isOpen"
    max-width="640px"
    scrollable
    :fullscreen="$vuetify.breakpoint.xsOnly"
    hide-overlay
    :transition="transitionMode"
  >
    <v-card>
      <v-toolbar>
        <v-icon class="mr-2" @click="isOpen = false">
          mdi-close
        </v-icon>
        <v-row>
          <v-col cols="12" sm="12" md="12">
            <v-text-field
              v-model="searchText"
              class="ml-4 mr-4 mt-6"
              solo
              dense
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
      tabTitle: null,
      tabItems: ['探す', '履歴'],
      isOpen: false,
      searchText: '',
      fuseJsOptions: {
        threshold: 0.2,
        keys: ['kanaName'],
        id: 'name',
        shouldSort: true
      },
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
    searchedCharacterCount() {
      return this.searchedCharacters.length
    },
    searchedCharacters() {
      const fuse = new Fuse(this.characters, this.fuseJsOptions)
      const searchedCharactersByfuse = fuse.search(this.hiraToKata)

      if (this.shouldUseFuse) {
        return searchedCharactersByfuse
      } else {
        return this.characters.filter((character) =>
          character.name.includes(this.searchText)
        )
      }
    },
    searchedSelectHistoryCharacters() {
      const fuse = new Fuse(this.selectHistoryCharacters, this.fuseJsOptions)
      const searchedCharactersByfuse = fuse.search(this.hiraToKata)

      if (this.shouldUseFuse) {
        return searchedCharactersByfuse
      } else {
        return this.selectHistoryCharacters.filter((character) =>
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
    }
  },
  methods: {
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
      this.searchText = ''
      this.$emit('selectCharacter', characterName)
    },
    onDeleteHistoryCharacter(characterNumber) {
      this.$emit('deleteHistoryCharacter', characterNumber)
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
