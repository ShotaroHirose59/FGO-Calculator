import OcUpPrcentage from './oc-up-prcentage'
export default {
  mixins: [OcUpPrcentage],
  methods: {
    // クイック性能アップ
    setOcSkillQuickBuff(characterName) {
      const buffDescription = 'Quick性能アップ'

      if (
        characterName === 'アキレウス' ||
        characterName === '水着イシュタル'
      ) {
        const ocUpPrcentages = [20, 30, 40, 50, 60]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === 'アストルフォ（セイバー）' ||
        characterName === '水着沖田総司〔オルタ〕' ||
        characterName === 'カーマ' ||
        characterName === 'カルナ〔サンタ〕' ||
        characterName === '謎のアイドルX〔オルタ〕' ||
        characterName === '呼延灼'
      ) {
        const ocUpPrcentages = [20, 25, 30, 35, 40]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === '坂田金時（ライダー）') {
        const ocUpPrcentages = [10, 30, 50, 70, 90]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === '水着イリヤ') {
        const ocUpPrcentages = [10, 20, 30, 40, 50]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === '鬼一法眼') {
        const ocUpPrcentages = [10, 15, 20, 25, 30]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      }
    }
  }
}
