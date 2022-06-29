export default {
  methods: {
    setEventCharacterBuff(character) {
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      // 南溟弓張八犬伝
      if (character.name === '曲亭馬琴') {
        this.isEventCharacter = true
        this.sAtkBuff = 100
      } else if (
        character.name === 'バーゲスト' ||
        character.name === '岡田以蔵' ||
        character.name === 'ヘシアン・ロボ' ||
        character.name === '葛飾北斎'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 50
      } else if (character.class === 'アーチャー') {
        this.isEventCharacter = true
        this.sAtkBuff = 30
      }
    }
  }
}
