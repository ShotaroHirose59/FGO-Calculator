export default {
  methods: {
    // 攻撃力アップバフ
    setOcSkillAtkBuff(characterName) {
      const buffDescription = '攻撃力アップ'

      if (characterName === 'クーフーリン〔オルタ〕') {
        const ocUpPrcentages = [30, 40, 50, 60, 70]
        this.changeAtkBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === 'エイリーク') {
        const ocUpPrcentages = [30, 35, 40, 45, 50]
        this.changeAtkBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === '謎のヒロインXX') {
        const ocUpPrcentages = [20, 30, 40, 50, 60]
        this.changeAtkBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === 'ローラン' ||
        characterName === 'エリザベート〔シンデレラ〕' ||
        characterName === '鬼女紅葉'
      ) {
        const ocUpPrcentages = [20, 25, 30, 35, 40]
        this.changeAtkBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === '水着ガレス' ||
        characterName === 'ランスロット（バーサーカー）' ||
        characterName === 'バゼット'
      ) {
        const ocUpPrcentages = [10, 15, 20, 25, 30]
        this.changeAtkBuff(ocUpPrcentages, buffDescription)
      }
    }
  }
}
