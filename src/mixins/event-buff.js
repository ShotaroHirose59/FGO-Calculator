export default {
  methods: {
    setEventCharacterBuff(character) {
      // CBC 2023
      if (character.name === '高杉晋作' || character.name === '魔王信長') {
        this.isEventCharacter = true
        this.sAtkBuff += 100
      } else if (
        character.name === 'エミヤ〔オルタ〕' ||
        character.name === 'ヘクトール' ||
        character.name === '佐々木小次郎' ||
        character.name === '出雲阿国'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 50
      }
    }
  }
}
