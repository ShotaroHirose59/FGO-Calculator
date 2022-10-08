export default {
  methods: {
    // 攻撃力アップバフ
    setNpSkillAtkBuff(character) {
      if (
        character.name === '光のコヤンスカヤ' ||
        character.name === '闇のコヤンスカヤ'
      ) {
        this.atkBuff += 20
        this.npSkills.push({ description: '攻撃力アップ(20%)' })
      } else if (character.name === 'ゼノビア') {
        this.atkBuff += 10
        this.npSkills.push({ description: '攻撃力アップ(10%)' })
      }
    }
  }
}
