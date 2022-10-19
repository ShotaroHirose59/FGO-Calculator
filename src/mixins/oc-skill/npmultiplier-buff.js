import OcUpPrcentage from './oc-up-prcentage'
export default {
  mixins: [OcUpPrcentage],
  methods: {
    // OCで宝具威力アップ(倍率)
    OcSkillNpmultiplierBuff(characterName) {
      if (characterName === 'アーラシュ') {
        this.characterNpmultiplier = this.npmultiplier[this.npChargeLv - 1]

        switch (this.selectingOcUpPrcentage) {
          case 1:
            this.characterNpmultiplier += 0
            break
          case 2:
            this.characterNpmultiplier += 200
            break
          case 3:
            this.characterNpmultiplier += 400
            break
          case 4:
            this.characterNpmultiplier += 600
            break
          case 5:
            this.characterNpmultiplier += 800
            break
        }
      }
      if (this.hadSelectedOcUpPrcentage === null) {
        this.ocSkills.push({
          description: `宝具威力UP(1: 0%, 2: 200%, 3: 400%, 4: 600%, 5: 800%)`
        })
      }
      this.setHadSelectedOcUpPrcentage()
    }
  }
}
