export default {
  methods: {
    // バスター性能アップ
    setNpSkillBusterBuff(character) {
      if (
        character.name === 'キングプロテア' ||
        character.name === 'クーフーリン（キャスター）' ||
        character.name === 'マルタ'
      ) {
        this.cardBuff += 20
        this.npSkills.push({ description: 'Buster性能アップ(20%)' })
      }
    }
  }
}
