export default {
  methods: {
    setEventCharacterBuff(characterName) {
      // 巡霊の祝祭 第2弾
      const eventCharacters = {
        'エリザベート〔ブレイブ〕': 50,
        織田信長: 50,
        'エリザベート〔ハロウィン〕': 50,
        '謎のアイドルX〔オルタ〕': 50
      }
      if (
        Object.prototype.hasOwnProperty.call(eventCharacters, characterName)
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += eventCharacters[characterName]
      }
    }
  }
}
