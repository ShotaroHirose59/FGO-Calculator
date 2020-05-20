<template>
  <v-layout column justify-center align-center>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">No.</th>
            <th class="text-left">キャラクター名</th>
            <th class="text-left">クラス</th>
            <th class="text-left">レア</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="character in characters" :key="character.id">
            <td>{{ character.number }}</td>
            <td>{{ character.name }}</td>
            <td>{{ character.class }}</td>
            <td>{{ character.rarity }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-layout>
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

<style scoped>
th {
  width: 200px;
}
</style>
