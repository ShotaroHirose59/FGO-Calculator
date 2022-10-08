export default {
  computed: {
    $_filteredCharacters() {
      const characters = this.characters.filter(
        (character) => character.class === this.characterClass
      )
      return characters.map((character) => character.name)
    },
    $_placeholder() {
      if (this.characterClass === '') return '先にクラスを選択'
      if (this.$_is_empty) return '対象がいません'

      return 'サーヴァントを選択'
    },
    $_is_empty() {
      if (this.$_filteredCharacters.length === 0) return true
    }
  }
}
