export default {
  methods: {
    // 防御力ダウン(攻撃力UPバフ)
    setOcSkillDefensiveDown(characterName) {
      const buffDescription = '防御力ダウン'

      if (characterName === 'エルキドゥ') {
        const ocUpPrcentages = [30, 35, 40, 45, 50]
        this.changeAtkBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === '水着マルタ') {
        const ocUpPrcentages = [20, 30, 40, 50, 60]
        this.changeAtkBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === 'モリアーティ' ||
        characterName === 'ジーク' ||
        characterName === '李書文（アサシン）'
      ) {
        const ocUpPrcentages = [20, 25, 30, 35, 40]
        this.changeAtkBuff(ocUpPrcentages, buffDescription)
      }
    }
  }
}
