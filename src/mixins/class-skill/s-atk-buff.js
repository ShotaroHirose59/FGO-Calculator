export default {
  methods: {
    setClassSkillSAtkBuff(character) {
      if (character.name === '千子村正') {
        this.npBuff = 20
        this.classSkills.push({
          name: '[当代不吉]',
          description: '(王)特攻状態を付与(20%)'
        })
      } else if (character.name === '闇のコヤンスカヤ') {
        this.npBuff = 12
        this.classSkills.push({
          name: '[NFFサービス]',
          description: '(猛獣)特攻状態を付与(20%)'
        })
      }
    }
  }
}
