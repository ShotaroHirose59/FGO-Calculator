export default {
  methods: {
    setEventCharacterBuff(characterName) {
      // 聖杯戦線 ～白天の城、黒夜の城～
      const eventCharacters = {
        プトレマイオス: 100,
        杉谷善住坊: 50,
        テセウス: 50,
        エウリュアレ: 30,
        哪吒: 30,
        イスカンダル: 30,
        太公望: 30,
        黄飛虎: 30,
        ペンテシレイア: 30,
        闇のコヤンスカヤ: 30
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
