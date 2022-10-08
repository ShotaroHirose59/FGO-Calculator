export default {
  methods: {
    // 防御力ダウン(攻撃力UPバフ)
    setNpSkillDefensiveDown(character) {
      if (character.name === 'ジナコ') {
        this.atkBuff += 30
        this.npSkills.push({ description: '防御力ダウン(30%)' })
      }
    }
  }
}
