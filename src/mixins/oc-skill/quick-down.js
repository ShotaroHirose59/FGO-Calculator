import OcUpPrcentage from './oc-up-prcentage'
export default {
  mixins: [OcUpPrcentage],
  methods: {
    // クイック耐性ダウン
    setOcSkillQuickDown(characterName) {
      // const buffDescription = 'Quick耐性ダウン'

      if (characterName === 'カラミティ・ジェーン') {
        const ocUpPrcentages = [10, 15, 20, 25, 30]
        this.changeJaneOcBuffs(ocUpPrcentages)
      }
    }
  }
}
