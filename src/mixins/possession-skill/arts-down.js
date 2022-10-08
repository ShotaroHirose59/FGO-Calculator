export default {
  methods: {
    // アーツ耐性ダウン
    setPossessionSkillArtsDown(character) {
      if (
        character.name === '水着紫式部' ||
        character.name === '殺生院キアラ'
      ) {
        this.cardBuff += 30
        this.possessionSkills.push({ description: 'Arts耐性ダウン(30%)' })
      } else if (
        character.name === '水着女王メイヴ' ||
        character.name === 'モリアーティ（ルーラー）' ||
        character.name === '水着殺生院キアラ'
      ) {
        this.cardBuff += 20
        this.possessionSkills.push({ description: 'Arts耐性ダウン(20%)' })
      }
    }
  }
}
