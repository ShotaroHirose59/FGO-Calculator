export default {
  methods: {
    setEventCharacterBuff(character) {
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      // 水怪クライシス
      if (character.name === '徴姉妹' || character.name === '太歳星君') {
        this.isEventCharacter = true
        this.sAtkBuff = 100
      } else if (
        character.name === 'エレシュキガル' ||
        character.name === '謎のアルターエゴ・Λ' ||
        character.name === 'ダヴィンチ（ライダー）' ||
        character.name === 'セミラミス' ||
        character.name === '武則天' ||
        character.name === 'モルガン' ||
        character.name === 'メルトリリス'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 50
      }
    }
  }
}
