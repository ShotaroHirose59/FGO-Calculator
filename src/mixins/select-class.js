export default {
  computed: {
    $_characterSelectText() {
      if (this.characterName !== '') {
        return `${this.characterName}`
      } else {
        return 'サーヴァントを選択する'
      }
    }
  }
}
