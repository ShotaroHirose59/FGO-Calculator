import OcUpPrcentage from './oc-up-prcentage'
export default {
  mixins: [OcUpPrcentage],
  methods: {
    // アーツ耐性ダウン
    setOcSkillArtsDown(characterName) {
      const buffDescription = 'Arts耐性ダウン'

      if (characterName === '斎藤一' || characterName === '水着アナスタシア') {
        const ocUpPrcentages = [20, 25, 30, 35, 40]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      }
    }
  }
}
