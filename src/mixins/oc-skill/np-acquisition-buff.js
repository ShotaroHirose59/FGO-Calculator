export default {
  methods: {
    setOcSkillNpAcquisitionBuff(characterName) {
      const buffDescription = 'NP獲得量アップ'

      if (characterName === 'メリュジーヌ') {
        const ocUpPrcentages = [20, 25, 30, 35, 40]
        this.changeNpAcquisitionBuff(ocUpPrcentages, buffDescription)
      }
    }
  }
}
