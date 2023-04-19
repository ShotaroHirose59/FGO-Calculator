import OcUpPrcentage from './oc-up-prcentage'
export default {
  mixins: [OcUpPrcentage],
  methods: {
    // バスター性能アップ
    setOcSkillBusterBuff(characterName) {
      const buffDescription = 'Buster性能アップ'

      if (characterName === 'メリュジーヌ' && this.servantNpType === 'Buster') {
        const ocUpPrcentages = [20, 30, 40, 50, 60]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === '虞美人') {
        const ocUpPrcentages = [50, 62.5, 75, 87.5, 100]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === 'ベディヴィエール') {
        const ocUpPrcentages = [30, 45, 60, 75, 90]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === 'クレオパトラ') {
        const ocUpPrcentages = [30, 40, 50, 60, 70]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === 'イリヤ') {
        const ocUpPrcentages = [20, 40, 60, 80, 100]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === 'イシュタル' ||
        characterName === '水着ブリュンヒルデ' ||
        characterName === 'キングプロテア'
      ) {
        const ocUpPrcentages = [20, 30, 40, 50, 60]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === 'バーゲスト' ||
        characterName === 'エウロペ' ||
        characterName === 'ニキチッチ' ||
        characterName === '水着アルトリア（ルーラー）'
      ) {
        const ocUpPrcentages = [20, 25, 30, 35, 40]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === 'エレシュキガル') {
        const ocUpPrcentages = [10, 20, 30, 40, 50]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === '黄飛虎') {
        const ocUpPrcentages = [10, 12.5, 15, 17.5, 20]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (characterName === 'ラーヴァ／ティアマト') {
        const ocUpPrcentages = [30, 37.5, 45, 52.5, 60]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      }
    }
  }
}
