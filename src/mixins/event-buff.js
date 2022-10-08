export default {
  methods: {
    setEventCharacterBuff(character) {
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      // ぐだぐだ新邪馬台国
      if (
        character.name === '千利休' ||
        character.name === '山南敬助' ||
        character.name === '壱与'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 100
      } else if (
        character.name === '沖田総司' ||
        character.name === '斎藤一' ||
        character.name === '茶々' ||
        character.name === '森長可' ||
        character.name === '魔王信長' ||
        character.name === '沖田総司〔オルタ〕'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 50
      } else if (
        character.name === '水着沖田総司〔オルタ〕' ||
        character.name === '織田信長' ||
        character.name === '坂本龍馬' ||
        character.name === '長尾景虎' ||
        character.name === '坂本龍馬（ランサー）' ||
        character.name === 'メドゥーサ' ||
        character.name === '出雲阿国' ||
        character.name === '謎のヒロインX' ||
        character.name === '李書文（アサシン）' ||
        character.name === '水着沖田総司' ||
        character.name === '岡田以蔵' ||
        character.name === '土方歳三' ||
        character.name === '謎の蘭丸X' ||
        character.name === '水着織田信長'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 30
      }
    }
  }
}
