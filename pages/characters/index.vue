<template>
  <v-row no-gutters>
    <v-card class="col-md-12">
      <v-toolbar class="title" elevation="8">
        サーヴァント一覧
        <v-row no-gutters>
          <v-col style="text-align: right;">
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
          </v-col>
        </v-row>
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
  </v-row>
</template>

<script>
export default {
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
  }
}
</script>
