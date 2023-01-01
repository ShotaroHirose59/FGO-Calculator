import OcUpPrcentage from './oc-up-prcentage'
export default {
  mixins: [OcUpPrcentage],
  methods: {
    // アーツ性能アップ
    setOcSkillArtsBuff(characterName) {
      const buffDescription = 'Arts性能アップ'

      if (
        characterName === 'イアソン' ||
        characterName === 'ダヴィンチ（ライダー）' ||
        characterName === 'マンドリカルド' ||
        characterName === 'ラスプーチン（言峰綺礼）'
      ) {
        const ocUpPrcentages = [20, 25, 30, 35, 40]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === '千子村正' ||
        characterName === 'メアリー・アニング' ||
        characterName === '水着宇津見エリセ'
      ) {
        const ocUpPrcentages = [10, 15, 20, 25, 30]
        this.changeCardBuff(ocUpPrcentages, buffDescription)
      }
    }
  }
}
