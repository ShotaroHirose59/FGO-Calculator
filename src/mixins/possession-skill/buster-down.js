export default {
  methods: {
    // バスター耐性ダウン
    setPossessionSkillBusterDown(character) {
      if (character.name === 'セミラミス') {
        this.cardBuff += 50
        this.possessionSkills.push({ description: 'Buster耐性ダウン(50%)' })
      } else if (character.name === 'アビゲイル〔夏〕') {
        this.cardBuff += 30
        this.possessionSkills.push({ description: 'Buster耐性ダウン(30%)' })
      } else if (
        character.name === 'ジル・ド・レェ（キャスター）' ||
        character.name === 'ダレイオス三世' ||
        character.name === '天草四郎'
      ) {
        this.cardBuff += 20
        this.possessionSkills.push({ description: 'Buster耐性ダウン(20%)' })
      }
    }
  }
}
