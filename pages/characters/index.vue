<template>
  <v-row no-gutters>
    <v-card class="col-md-12">
      <v-toolbar class="title" elevation="4">
        サーヴァント一覧
      </v-toolbar>
      <v-list>
        <v-subheader>単体宝具、全体宝具を持つサーヴァントのみ</v-subheader>
        <v-list-item-group
          v-for="character in characters"
          :key="character.id"
          color="primary"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>{{ character.name }}</v-list-item-title>
              <span class="caption">
                ★{{ character.rarity }} / {{ character.class }} /
                {{ character.card }}宝具 / {{ character.attribute }}
              </span>
            </v-list-item-content>
            No. {{ character.number }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <!-- ボトムナビゲーション -->
    <BottomNavigation />
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
      menus: [
        { title: 'ホーム', icon: 'mdi-home', to: '/' },
        {
          title: '宝具ダメ計算',
          icon: 'mdi-sword-cross',
          to: '/npatk-calculation'
        },
        {
          title: '宝具NP計算',
          icon: 'mdi-gauge-full',
          to: '/npaquisition-calculation'
        },
        {
          title: '霊基一覧',
          icon: 'mdi-file-document-outline',
          to: '/characters'
        }
      ]
    }
  },
  computed: {
    characters() {
      return this.$store.getters['characters/orderdCharacters']
    }
  },
  created() {
    this.$store.dispatch('characters/init')
  },
  head() {
    return {
      title: '霊基一覧'
    }
  }
}
</script>
