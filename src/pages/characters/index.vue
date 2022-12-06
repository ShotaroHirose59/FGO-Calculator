<template>
  <v-row no-gutters>
    <v-card class="col-md-12">
      <v-toolbar class="title" elevation="4">
        サーヴァント一覧
      </v-toolbar>
      <v-subheader>
        単体宝具、全体宝具を持つサーヴァントのみ
      </v-subheader>
      <v-row no-gutters>
        <v-col cols="12" sm="12" md="12">
          <v-text-field
            v-model="searchText"
            label="サーヴァント名"
            class="ml-4 mr-4"
            prepend-inner-icon="mdi-magnify"
            autofocus
            type="text"
            color="teal"
          ></v-text-field>
        </v-col>
      </v-row>
      <div v-if="shouldUseFuse">
        <v-list disabled>
          <v-list-item-group
            v-for="character in searchedCharacters"
            :key="character.item.id"
            color="primary"
          >
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>{{ character.item.name }}</v-list-item-title>
                <v-list-item-subtitle class="caption">
                  ★{{ character.item.rarity }} / {{ character.item.class }} /
                  {{ character.item.attribute }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <div>No. {{ character.item.number }}</div>
            </v-list-item>
            <v-divider />
          </v-list-item-group>
        </v-list>
      </div>
      <div v-else>
        <v-list disabled>
          <v-list-item-group
            v-for="character in searchedCharacters"
            :key="character.id"
            color="primary"
          >
            <v-list-item two-line>
              <v-list-item-content>
                <v-list-item-title>{{ character.name }}</v-list-item-title>
                <v-list-item-subtitle class="caption">
                  ★{{ character.rarity }} / {{ character.class }} /
                  {{ character.attribute }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <div>No. {{ character.number }}</div>
            </v-list-item>
            <v-divider />
          </v-list-item-group>
        </v-list>
      </div>
    </v-card>
  </v-row>
</template>

<script>
import { getDocs, collection, query, orderBy } from 'firebase/firestore/lite'
import Fuse from 'fuse.js'
import db from '../../plugins/firebase'
export default {
  data() {
    return {
      characters: [],
      searchText: '',
      selectedClass: '',
      fuseJsOptions: {
        threshold: 0.2,
        keys: ['kanaName'],
        shouldSort: true
      },
      regexpKanji: /([\u{3005}\u{3007}\u{303B}\u{3400}-\u{9FFF}\u{F900}-\u{FAFF}\u{20000}-\u{2FFFF}][\u{E0100}-\u{E01EF}\u{FE00}-\u{FE02}]?)/mu
    }
  },
  computed: {
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
  async created() {
    if (!db) return

    const q = query(collection(db, 'characters'), orderBy('number', 'asc'))
    const querySnapshot = await getDocs(q)
    this.characters = querySnapshot.docs.map((doc) => {
      return { ...doc.data() }
    })
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
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: '【FGO】霊基一覧 ~Wオルタと計算~',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'FGOの計算アプリです。このページではサーヴァントの一覧と「天地人」属性を確認することがきます。'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
