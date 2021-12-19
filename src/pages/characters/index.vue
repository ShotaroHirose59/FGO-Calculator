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
            v-model="search"
            label="サーヴァント名"
            class="ml-4 mr-4"
            prepend-inner-icon="mdi-magnify"
            type="text"
            color="teal"
          ></v-text-field>
        </v-col>
      </v-row>
      <div>
        <v-list disabled>
          <v-list-item-group
            v-for="character in searchCharacters"
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
import db from '../../plugins/firebase'
export default {
  data() {
    return {
      characters: [],
      search: '',
      selectedClass: '',
      items: {
        class: [
          'ALL',
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
        ]
      }
    }
  },
  computed: {
    searchCharacters() {
      const searchCharacters = []
      for (let i = 0; i < this.characters.length; i++) {
        const character = this.characters[i]
        if (character.name.includes(this.search)) {
          searchCharacters.push(character)
        }
      }
      return searchCharacters
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
  methods: {},
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
