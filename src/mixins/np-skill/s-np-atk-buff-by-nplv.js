export default {
  methods: {
    // 特攻宝具 (宝具Lv)によって倍率変化)
    setNpSkillSNpAtkBuffByNpLv(characterName) {
      if (characterName === 'エウリュアレ') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          switch (this.npChargeLv) {
            case 1:
              this.sNpAtkBuff = 150
              break
            case 2:
              this.sNpAtkBuff = 200
              break
            case 3:
              this.sNpAtkBuff = 225
              break
            case 4:
              this.sNpAtkBuff = 237.5
              break
            case 5:
              this.sNpAtkBuff = 250
              break
          }
        }
        this.setNpSkills('敵単体に超強力な男性特攻攻撃(Lv:150~250%)')
      } else if (characterName === 'アルクェイド') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          switch (this.npChargeLv) {
            case 1:
              this.sNpAtkBuff = 150
              break
            case 2:
              this.sNpAtkBuff = 175
              break
            case 3:
              this.sNpAtkBuff = 187.5
              break
            case 4:
              this.sNpAtkBuff = 193.8
              break
            case 5:
              this.sNpAtkBuff = 200
              break
          }
        }
        this.setNpSkills('敵全体に強力な混沌特攻攻撃(LV:150〜200%)')
      }
    },
    setNpSkills(description) {
      if (
        !this.npSkills.some((npSkill) => npSkill.description === description)
      ) {
        this.npSkills.push({
          description
        })
      }
    }
  }
}
