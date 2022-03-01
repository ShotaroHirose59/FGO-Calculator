export default {
  methods: {
    setClassSkillNpAcquisitionBuff(character) {
      if (character.name === 'ディオスクロイ') {
        this.npAcquisitionBuff = 5
        this.classSkills.push({
          name: '双神の神核',
          description: 'NP獲得量アップ(5%)'
        })
      }
    }
  }
}
