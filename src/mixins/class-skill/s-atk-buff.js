export default {
  methods: {
    setClassSkillSAtkBuff(character) {
      if (character.name === '千子村正') {
        // Note: 特攻バフは自動入力しない
        // this.sAtkBuff += 20
        this.classSkills.push({
          name: '[当代不吉]',
          description: '(王)特攻を付与(20%)'
        })
      } else if (character.name === '闇のコヤンスカヤ') {
        // this.sAtkBuff += 20
        this.classSkills.push({
          name: '[NFFサービス]',
          description: '(猛獣)特攻を付与(20%)'
        })
      }
    }
  }
}
