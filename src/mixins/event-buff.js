export default {
  methods: {
    setEventCharacterBuff(characterName) {
      // ミスティックアイズ･シンフォニー / 巡霊の祝祭 第3弾
      const eventCharacters = {
        'メドゥーサ（セイバー）': 100,
        '水着ジャンヌ〔オルタ〕': 50,
        水着葛飾北斎: 50,
        水着スカサハ: 50
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
