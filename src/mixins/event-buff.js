export default {
  methods: {
    setEventCharacterBuff(characterName) {
      // 風雲からくりイリヤ城
      const eventCharacters = {
        果心居士: 100,
        クロエ: 50,
        イリヤ: 50,
        加藤段蔵: 50,
        風魔小太郎: 50,
        シトナイ: 50
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
