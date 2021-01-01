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
            color="teal accent-4"
          ></v-text-field>
        </v-col>
      </v-row>
      <div>
        <v-list disabled>
          <v-list-item-group
            v-for="character in characterLists"
            :key="character.id"
            color="primary"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ character.name }}</v-list-item-title>
                <span class="caption">
                  ★{{ character.rarity }} / {{ character.class }} /
                  {{ character.attribute }}
                </span>
              </v-list-item-content>
              No. {{ character.number }}
            </v-list-item>
            <v-divider />
          </v-list-item-group>
        </v-list>
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="length"
            color="purple lighten-1"
            class="mt-4"
            @input="pageChange"
          ></v-pagination>
        </div>
      </div>
    </v-card>
    <!-- ボトムナビゲーション -->
    <client-only>
      <BottomNavigation v-if="$vuetify.breakpoint.xs" />
    </client-only>
  </v-row>
</template>
<script>
import BottomNavigation from '@/components/shared/BottomNavigation'
export default {
  components: {
    BottomNavigation
  },
  data() {
    return {
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
      },
      page: 1,
      pageSize: 60
    }
  },
  computed: {
    characters() {
      return this.$store.getters['characters/orderdCharacters']
    },
    searchCharacters() {
      const searchCharacters = []
      for (let i = 0; i < this.characters.length; i++) {
        const character = this.characters[i]
        if (character.name.includes(this.search)) {
          searchCharacters.push(character)
        }
      }
      return searchCharacters
    },
    characterLists: {
      get() {
        return this.searchCharacters.slice(
          this.pageSize * (this.page - 1),
          this.pageSize * this.page
        )
      },
      set(value) {}
    },
    length() {
      return Math.ceil(this.searchCharacters.length / this.pageSize)
    }
  },
  created() {
    this.$store.dispatch('characters/init')
  },
  methods: {
    pageChange(pageNumber) {
      this.characterLists = this.searchCharacters.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      )
    }
  },
  head() {
    return {
      title: '霊基一覧'
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
