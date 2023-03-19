export default {
  methods: {
    setEventCharacterBuff(character) {
      // CBC 2023
      const eventCharacters = {
        高杉晋作: 100,
        魔王信長: 100,
        'エミヤ〔オルタ〕': 50,
        ヘクトール: 50,
        佐々木小次郎: 50,
        出雲阿国: 50
      }
      if (
        Object.prototype.hasOwnProperty.call(eventCharacters, character.name)
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += eventCharacters[character.name]
      }
    }
  }
}
