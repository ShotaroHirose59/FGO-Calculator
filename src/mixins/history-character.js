export default {
  computed: {
    historyName() {
      if (location.pathname.includes('npatk')) {
        return 'dcHistoryCharacterNumbers'
      }
      if (location.pathname.includes('npaquisition')) {
        return 'npHistoryCharacterNumbers'
      }
    }
  },
  methods: {
    initialHistoryCharacters() {
      this.setHistoryCharacterNumbers()

      this.historyCharacterNumbers.forEach((num) => {
        const historyCharacter = this.characters.find(
          (character) => character.number === num
        )
        this.historyCharacters.push(historyCharacter)
      })
    },
    setHistoryCharacterNumbers() {
      const localStoragehistoryCharacterNumbers = this.getHistoryFromLocalStorage()

      // Warn: 配列以外の代入を防ぐ
      if (Array.isArray(localStoragehistoryCharacterNumbers)) {
        this.historyCharacterNumbers = localStoragehistoryCharacterNumbers
      }
    },
    getHistoryFromLocalStorage() {
      return JSON.parse(localStorage.getItem(this.historyName))
    },
    setNewHistoryToLocalStorage() {
      localStorage.setItem(
        this.historyName,
        JSON.stringify(this.historyCharacterNumbers)
      )
    },
    addHistoryCharacter(characterNumber) {
      if (!this.historyCharacterNumbers.includes(characterNumber)) {
        this.historyCharacterNumbers.push(characterNumber)

        const historyCharacter = this.characters.find(
          (character) => character.number === characterNumber
        )
        this.historyCharacters.push(historyCharacter)
      }
      this.setNewHistoryToLocalStorage()
    },
    deleteHistoryCharacter(characterNumber) {
      this.deleteHistoryCharacterNumber(characterNumber)
      this.setNewHistoryToLocalStorage()

      this.historyCharacters = this.historyCharacters.filter(
        (character) => character.number !== characterNumber
      )
    },
    deleteHistoryCharacterNumber(characterNumber) {
      const index = this.historyCharacterNumbers.indexOf(characterNumber)
      this.historyCharacterNumbers.splice(index, 1)
    }
  }
}
