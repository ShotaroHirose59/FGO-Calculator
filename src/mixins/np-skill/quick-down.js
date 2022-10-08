export default {
  methods: {
    // クイック耐性ダウン
    setNpSkillQuickDown(character) {
      if (character.name === '出雲阿国' || character.name === '大黒天') {
        this.cardBuff += 20
        this.npSkills.push({ description: 'Quick耐性ダウン(20%)' })
      }
    }
  }
}
