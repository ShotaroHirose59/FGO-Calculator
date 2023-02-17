export default {
  methods: {
    setEventCharacterBuff(character) {
      // 復刻クリスマス
      if (character.name === 'ヨハンナ') {
        this.isEventCharacter = true
        this.sAtkBuff += 100
      } else if (
        character.name === 'ネロ〔ブライド〕' ||
        character.name === '清少納言' ||
        character.name === '紫式部' ||
        character.name === 'セミラミス' ||
        character.name === '謎のヒロインX〔オルタ〕' ||
        character.name === 'カレン' ||
        character.name === 'バゼット'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 50
      }
    }
  }
}
