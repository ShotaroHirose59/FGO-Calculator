export default {
  methods: {
    // アーツ性能アップ
    setNpSkillArtsBuff(character) {
      if (character.name === 'ランスロット（セイバー）') {
        this.cardBuff += 30
        this.npSkills.push({ description: 'Arts性能アップ(30%)' })
      } else if (character.name === '水着巴御前') {
        this.cardBuff += 20
        this.npSkills.push({ description: 'Arts性能アップ(20%)' })
      }
    }
  }
}
