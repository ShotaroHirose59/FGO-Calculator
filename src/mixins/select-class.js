export default {
  computed: {
    $_filteredCharacters() {
      const characters = this.characters.filter(
        (character) => character.class === this.characterClass
      )
      return characters.map((character) => character.name)
    },
    $_is_empty() {
      if (this.$_filteredCharacters.length === 0) return true
    }
  }
}
