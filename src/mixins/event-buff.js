export default {
  methods: {
    setEventCharacterBuff(character) {
      // 巡霊の祝祭 第1弾
      const eventCharacters = {
        '坂田金時（ライダー）': 50,
        '酒呑童子（キャスター）': 50,
        'ケツァル･コアトル〔サンバ／サンタ〕': 50
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
