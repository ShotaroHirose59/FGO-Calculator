export default {
  methods: {
    setClassSkillAtkBuff(character) {
      if (character.name === 'カレン') {
        this.atkBuff = 20
        this.classSkills.push({
          name: '[被虐霊媒体質]',
          description: '弱体状態時に攻撃力UP(20%)'
        })
      }
    }
  }
}
