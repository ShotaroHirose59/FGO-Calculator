export default {
  methods: {
    setEventCharacterBuff(character) {
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      // 2022 ハロウィン
      if (
        character.name === '黄飛虎' ||
        character.name === '呼延灼' ||
        character.name === '九紋竜エリザ'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 100
      } else if (character.name === '燕青') {
        this.isEventCharacter = true
        this.sAtkBuff += 70
      } else if (
        character.name === 'ゼノビア' ||
        character.name === 'ロビンフッド' ||
        character.name === 'ドン･キホーテ' ||
        character.name === 'ナーサリー' ||
        character.name === '天草四郎' ||
        character.name === 'ヘシアン･ロボ' ||
        character.name === 'アビゲイル' ||
        character.name === 'ジャック・ド・モレー'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 50
      } else if (
        character.name === 'エリザベート〔ブレイブ〕' ||
        character.name === '柳生但馬守宗矩' ||
        character.name === 'フェルグス' ||
        character.name === '清少納言' ||
        character.name === 'エリザベート' ||
        character.name === '太公望' ||
        character.name === 'エリザベート〔シンデレラ〕' ||
        character.name === 'マンドリカルド' ||
        character.name === 'ティーチ' ||
        character.name === '紫式部' ||
        character.name === 'エリザベート〔ハロウィン〕' ||
        character.name === 'アヴィケブロン' ||
        character.name === '荊軻' ||
        character.name === '風魔小太郎' ||
        character.name === 'メカエリチャン' ||
        character.name === 'メカエリチャンⅡ号機'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 30
      }
    }
  }
}
