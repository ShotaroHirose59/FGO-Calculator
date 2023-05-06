export default {
  methods: {
    // 特攻バフ
    // 宝具、OCバフで重なる可能性アリ
    setOcSkillSAtkBuff(characterName) {
      if (characterName === '清少納言' || characterName === '水着清少納言') {
        if (this.isActiveSpecialAtkBuff === true) {
          const ocBuffs = [50, 62.5, 75, 87.5, 100]
          this.sAtkBuff += ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('(人属性)特攻を付与(50~100%)')
      } else if (characterName === '俵藤太') {
        if (this.isActiveSpecialAtkBuff === true) {
          const ocBuffs = [50, 62.5, 75, 87.5, 100]
          this.sAtkBuff += ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('(魔性)特攻を付与(50~100%)')
      } else if (characterName === 'ジャック') {
        if (this.isActiveSpecialAtkBuff === true) {
          const ocBuffs = [50, 62.5, 75, 87.5, 100]
          this.sAtkBuff += ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('(女性)特攻を付与(50~100%)')
      } else if (characterName === '紅閻魔') {
        if (this.isActiveSpecialAtkBuff === true) {
          const ocBuffs = [20, 25, 30, 35, 40]
          this.sAtkBuff += ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('(混沌・悪)特攻を付与(40~60%)')
      } else if (characterName === '渡辺綱') {
        if (this.isActiveSpecialAtkBuff === true) {
          const ocBuffs = [20, 25, 30, 35, 40]
          this.sAtkBuff += ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('(魔性)特攻を付与(20~40%)')
      }
    },
    setOcSkills(description) {
      if (
        !this.ocSkills.some((ocSkill) => ocSkill.description === description)
      ) {
        this.ocSkills.push({
          description
        })
      }
    }
  }
}
