export default {
  methods: {
    setClassSkillNpAcquisitionBuff(character) {
      if (character.name === 'ディオスクロイ') {
        this.npAcquisitionBuff = 5
        this.classSkills.push({
          name: '双神の神核',
          description: 'NP獲得量アップ(5%)'
        })
      } else if (character.name === '千利休') {
        this.npAcquisitionBuff = 10
        this.classSkills.push({
          name: '融通無碍[B]',
          description: 'NP獲得量アップ(10%)'
        })
      }
    }
  }
}
