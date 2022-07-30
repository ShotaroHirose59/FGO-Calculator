export default {
  computed: {
    $_filteredCharacters() {
      let users = this.characters.filter(
        (character) => character.class === this.characterClass
      )

      if (this.filterdRarity !== null) {
        users = users.filter(
          (character) => character.rarity === this.filterdRarity
        )
      }
      if (this.filterdServantNpType !== null) {
        switch (this.filterdServantNpType) {
          case 'Buster':
            users = users.filter((character) => character.card === 'B')
            break
          case 'Arts':
            users = users.filter(
              (character) =>
                character.card === 'A' || character.name === 'エミヤ'
            )
            break
          case 'Quick':
            users = users.filter((character) => character.card === 'Q')
            break
        }
      }
      if (this.filterdServantNpEffect !== null) {
        users = users.filter((character) => {
          if (character.card === 'B') {
            switch (this.filterdServantNpEffect) {
              case '全体宝具':
                return character.npmultiplier[0] <= 500
              case '単体宝具':
                users = users.filter(
                  (character) => character.npmultiplier[0] >= 600
                )
                return character.npmultiplier[0] >= 600
            }
          } else {
            switch (this.filterdServantNpEffect) {
              case '全体宝具':
                return (
                  character.npmultiplier[0] <= 800 || character.name === '陳宮'
                )
              case '単体宝具':
                return (
                  character.npmultiplier[0] >= 900 && character.name !== '陳宮'
                )
            }
          }
        })
      }
      return users.map((character) => character.name)
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
