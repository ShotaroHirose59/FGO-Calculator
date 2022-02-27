export default {
  methods: {
    setClassSkillNpBuff(character) {
      if (character.name === 'ディオスクロイ') {
        this.npAcquisitionBuff = 5
        this.classSkillName = '【双神の神核】'
        this.classSkillDescription = 'NP獲得量アップ(5%)'
      }
    }
  }
}
