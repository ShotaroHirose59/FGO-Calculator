export default {
  computed: {
    $_filteredCharacters() {
      if (this.filterdRarity !== null) {
        return this.characters
          .filter((character) => character.class === this.characterClass)
          .filter((character) => character.rarity === this.filterdRarity)
          .map((character) => character.name)
      }

      return this.characters
        .filter((character) => character.class === this.characterClass)
        .map((character) => character.name)
    },
    $_placeholder() {
      if (this.characterClass === '') return '先にクラスを選択'
      if (this.$_is_empty) return '対象がありません'

      return 'サーヴァントを選択'
    },
    $_is_empty() {
      if (this.$_filteredCharacters.length === 0) return true
    }
  }
}
