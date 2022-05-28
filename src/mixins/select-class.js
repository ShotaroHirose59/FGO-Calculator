export default {
  computed: {
    // クラスが選択されたら「そのクラスのキャラクターのみ」をセレクトボックスに表示
    $_filteredCharacters() {
      return this.characters
        .filter((character) => character.class === this.characterClass)
        .map((character) => character.name)
    },
    $_placeholder() {
      if (this.characterClass === '') return '先にクラスを選択'

      return 'サーヴァントを選択'
    }
  }
}
