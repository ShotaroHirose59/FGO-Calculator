export default {
  methods: {
    // 特攻バフ
    // 宝具、OCバフで重なる可能性アリ
    setNpSkillSAtkBuff(characterName) {
      if (characterName === '清少納言') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff = 50
        this.setNpSkills(
          '(中立のサーヴァント・シャドウサーヴァント)特攻を付与(50%)'
        )
      } else if (characterName === '水着清少納言') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff = 50
        this.setNpSkills(
          '(秩序のサーヴァント・シャドウサーヴァント)特攻を付与(50%)'
        )
      } else if (characterName === '謎のヒロインX〔オルタ〕') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff = 50
        this.setNpSkills('(善)特攻を付与(50%)')
      } else if (characterName === 'モルガン') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff = 50
        this.setNpSkills('(円卓の騎士・妖精)特攻を付与(50%)')
      } else if (characterName === 'ブリトマート') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff = 50
        this.setNpSkills('(騎乗スキル)特攻状態を付与(50%)')
      } else if (characterName === '曲亭馬琴') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff = 30
        this.setNpSkills('(魔性)特攻を付与(30%)')
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
