export default {
  methods: {
    setClassSkillSAtkBuff(characterName) {
      if (characterName === '千子村正') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff = 20
        this.setClassSkills('(王)特攻を付与(20%)')
      } else if (characterName === '闇のコヤンスカヤ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff = 20
        this.setClassSkills('(猛獣)特攻を付与(20%)')
      } else if (characterName === '殺生院キアラ') {
        this.setClassSkills(
          '自身にルーラー特攻を付与(ルーラーに対して攻撃1.5倍有利になる)'
        )
      }
    },
    setClassSkills(description) {
      if (
        !this.classSkills.some(
          (classSkill) => classSkill.description === description
        )
      ) {
        this.classSkills.push({
          description
        })
      }
    }
  }
}
