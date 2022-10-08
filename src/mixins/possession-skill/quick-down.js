export default {
  methods: {
    // クイック耐性ダウン
    setPossessionSkillQuickDown(character) {
      if (
        character.name === 'メドゥーサ（ランサー）' ||
        character.name === 'ボイジャー'
      ) {
        this.cardBuff += 20
        this.possessionSkills.push({ description: 'Quick耐性ダウン(20%)' })
      } else if (character.name === '佐々木小次郎') {
        this.cardBuff += 10
        this.possessionSkills.push({ description: 'Quick耐性ダウン(10%)' })
      }
    }
  }
}
