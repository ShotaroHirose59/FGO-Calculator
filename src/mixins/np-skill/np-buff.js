export default {
  methods: {
    // 宝具威力アップ
    setNpSkillNpBuff(character) {
      if (
        character.name === 'ギルガメッシュ' ||
        character.name === 'ハベトロット'
      ) {
        this.npBuff += 30
        this.npSkills.push({ description: '宝具威力アップ(30%)' })
      } else if (
        character.name === '水着カイニス' ||
        character.name === 'シェヘラザード'
      ) {
        this.npBuff += 20
        this.npSkills.push({ description: '宝具威力アップ(20%)' })
      } else if (character.name === '千子村正' || character.name === '壱与') {
        this.npBuff += 10
        this.npSkills.push({ description: '宝具威力アップ(10%)' })
      }
    }
  }
}
