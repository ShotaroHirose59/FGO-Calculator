<template>
  <v-row no-gutters>
    <v-card class="col-md-12">
      <v-toolbar class="title" elevation="8">
        サーヴァント一覧
      </v-toolbar>
      <v-card-subtitle>
        単体宝具、全体宝具を持つサーヴァントのみ
      </v-card-subtitle>
      <v-card-text v-for="character in characters" :key="character.id">
        <v-row no-gutters>
          <div>
            <div class="subtitle-1">{{ character.name }}</div>
            <span class="caption">
              ★{{ character.rarity }} / {{ character.class }} /
              {{ character.card }}宝具
            </span>
          </div>
          <v-spacer />
          No. {{ character.number }}
        </v-row>
      </v-card-text>
    </v-card>
    <!-- ボトムナヴィゲーション-->
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
    return {}
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
