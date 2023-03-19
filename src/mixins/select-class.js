export default {
  computed: {
    $_characterSelectText() {
      return this.characterName ? this.characterName : 'サーヴァントを選択する'
    }
  }
}
