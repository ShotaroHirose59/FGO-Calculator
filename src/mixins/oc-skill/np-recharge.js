export default {
  methods: {
    // NPリチャージ
    setOcSkillNpRecharge(characterName) {
      if (characterName === 'メディア') {
        const ocUpPrcentages = [20, 40, 60, 80, 100]
        this.changeNpRecharge(ocUpPrcentages)
      } else if (characterName === '水着アルトリア') {
        const ocUpPrcentages = [20, 25, 30, 35, 40]
        this.changeNpRecharge(ocUpPrcentages)
      } else if (characterName === 'パールヴァティー') {
        const ocUpPrcentages = [10, 15, 20, 25, 30]
        this.changeNpRecharge(ocUpPrcentages)
      } else if (characterName === '水着エレナ') {
        const ocUpPrcentages = [10, 12.5, 15, 17.5, 20]
        this.changeNpRecharge(ocUpPrcentages)
      }
    },
    changeNpRecharge(ocUpPrcentages) {
      this.npRecharge = ocUpPrcentages[this.selectingOcUpPrcentage - 1]

      if (this.hadSelectedOcUpPrcentage === null) {
        this.ocSkills.push({
          description: `NPチャージ(${ocUpPrcentages[0]}~${ocUpPrcentages[4]}%)`
        })
      }
      this.hadSelectedOcUpPrcentage = this.selectingOcUpPrcentage
    }
  }
}
