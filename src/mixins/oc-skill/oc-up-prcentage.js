export default {
  methods: {
    changeCardBuff(ocUpPrcentages, buffDescription) {
      if (this.hadSelectedOcUpPrcentage !== null) {
        const downCont = ocUpPrcentages[this.hadSelectedOcUpPrcentage - 1]
        if (this.cardBuff - downCont >= 0) {
          this.cardBuff -= downCont
        } else {
          this.cardBuff = 0
        }
      }
      const upCont = ocUpPrcentages[this.selectingOcUpPrcentage - 1]
      this.cardBuff += upCont

      if (this.hadSelectedOcUpPrcentage === null) {
        this.setBuffDescription(ocUpPrcentages, buffDescription)
      }
      this.setHadSelectedOcUpPrcentage()
    },
    changeAtkBuff(ocUpPrcentages, buffDescription) {
      if (this.hadSelectedOcUpPrcentage !== null) {
        const downCont = ocUpPrcentages[this.hadSelectedOcUpPrcentage - 1]
        if (this.atkBuff - downCont >= 0) {
          this.atkBuff -= downCont
        } else {
          this.atkBuff = 0
        }
      }
      const upCont = ocUpPrcentages[this.selectingOcUpPrcentage - 1]
      this.atkBuff += upCont

      if (this.hadSelectedOcUpPrcentage === null) {
        this.setBuffDescription(ocUpPrcentages, buffDescription)
      }
      this.setHadSelectedOcUpPrcentage()
    },
    changeNpBuff(ocUpPrcentages, buffDescription) {
      if (this.hadSelectedOcUpPrcentage !== null) {
        const downCont = ocUpPrcentages[this.hadSelectedOcUpPrcentage - 1]
        if (this.npBuff - downCont >= 0) {
          this.npBuff -= downCont
        } else {
          this.npBuff = 0
        }
      }
      const upCont = ocUpPrcentages[this.selectingOcUpPrcentage - 1]
      this.npBuff += upCont

      if (this.hadSelectedOcUpPrcentage === null) {
        this.setBuffDescription(ocUpPrcentages, buffDescription)
      }
      this.setHadSelectedOcUpPrcentage()
    },
    changeNpAcquisitionBuff(ocUpPrcentages, buffDescription) {
      if (this.hadSelectedOcUpPrcentage !== null) {
        const downCont = ocUpPrcentages[this.hadSelectedOcUpPrcentage - 1]
        if (this.npAcquisitionBuff - downCont >= 0) {
          this.npAcquisitionBuff -= downCont
        } else {
          this.npAcquisitionBuff = 0
        }
      }
      const upCont = ocUpPrcentages[this.selectingOcUpPrcentage - 1]
      this.npAcquisitionBuff += upCont

      if (this.hadSelectedOcUpPrcentage === null) {
        this.setBuffDescription(ocUpPrcentages, buffDescription)
      }
      this.setHadSelectedOcUpPrcentage()
    },
    // カラミティ・ジェーン専用
    changeJaneOcBuffs(ocUpPrcentages) {
      if (this.hadSelectedOcUpPrcentage !== null) {
        const downCont = ocUpPrcentages[this.hadSelectedOcUpPrcentage - 1]
        if (this.atkBuff - downCont >= 0) {
          this.atkBuff -= downCont
        } else {
          this.atkBuff = 0
        }
        if (this.cardBuff - downCont >= 0) {
          this.cardBuff -= downCont
        } else {
          this.cardBuff = 0
        }
      }
      const upCont = ocUpPrcentages[this.selectingOcUpPrcentage - 1]
      this.cardBuff += upCont
      this.atkBuff += upCont

      if (this.hadSelectedOcUpPrcentage === null) {
        this.ocSkills.push({
          description: `防御力&クイック耐性ダウン(OC：10~30%)`
        })
      }
      this.setHadSelectedOcUpPrcentage()
    },
    setHadSelectedOcUpPrcentage() {
      this.hadSelectedOcUpPrcentage = this.selectingOcUpPrcentage
    },
    setBuffDescription(ocUpPrcentages, buffDescription) {
      this.ocSkills.push({
        description: `${buffDescription}(OC：${ocUpPrcentages[0]}~${ocUpPrcentages[4]}%)`
      })
    }
  }
}
