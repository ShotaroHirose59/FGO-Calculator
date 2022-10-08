import OcUpPrcentage from './oc-up-prcentage'
export default {
  mixins: [OcUpPrcentage],
  methods: {
    // バスター耐性ダウン
    setOcSkillBusterDown(characterName) {
      const buffDescription = 'Buster耐性ダウン'

      if (characterName === 'アルジュナ〔オルタ〕') {
        const ocUpPrcentages = [20, 30, 40, 50, 60]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      }
    }
  }
}
