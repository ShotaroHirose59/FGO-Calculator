export default {
  methods: {
    // クイック性能アップ
    setNpSkillQuickBuff(character) {
      if (
        character.name === 'クーフーリン〔プロトタイプ〕' ||
        character.name === '佐々木小次郎'
      ) {
        this.cardBuff += 20
        this.npSkills.push({ description: 'Quick性能アップ(20%)' })
      }
    }
  }
}
