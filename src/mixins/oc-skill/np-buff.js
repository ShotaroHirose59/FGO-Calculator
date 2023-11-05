export default {
  methods: {
    // 宝具威力アップ
    setOcSkillNpBuff(characterName) {
      const buffDescription = '宝具威力アップ'

      if (characterName === '宮本武蔵') {
        const ocUpPrcentages = [30, 45, 60, 75, 90]
        this.changeNpBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === '水着葛飾北斎' ||
        characterName === 'イヴァン雷帝' ||
        characterName === 'オデュッセウス' ||
        characterName === 'ダヴィンチ（キャスター）'
      ) {
        const ocUpPrcentages = [30, 40, 50, 60, 70]
        this.changeNpBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === 'ブラダマンテ' ||
        characterName === '哪吒' ||
        characterName === '水着ネロ' ||
        characterName === '項羽' ||
        characterName === 'スペースイシュタル'
      ) {
        const ocUpPrcentages = [20, 30, 40, 50, 60]
        this.changeNpBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === '坂本龍馬（ランサー）' ||
        characterName === 'パーシヴァル' ||
        characterName === 'アヴィケブロン' ||
        characterName === 'ガラテア' ||
        characterName === 'モリアーティ（ルーラー）' ||
        characterName === '水着ダヴィンチ' ||
        characterName === 'ボイジャー' ||
        characterName === 'ジャック・ド・モレー' ||
        characterName === 'テスカトリポカ' ||
        characterName === 'トラロック' ||
        characterName === 'プトレマイオス'
      ) {
        const ocUpPrcentages = [20, 25, 30, 35, 40]
        this.changeNpBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === 'アーサー' ||
        characterName === 'セミラミス' ||
        characterName === 'ヘファイスティオン'
      ) {
        const ocUpPrcentages = [10, 20, 30, 40, 50]
        this.changeNpBuff(ocUpPrcentages, buffDescription)
      } else if (
        characterName === 'カイニス' ||
        characterName === 'ネモ' ||
        characterName === '水着武則天' ||
        characterName === '張角' ||
        characterName === 'カレン' ||
        characterName === 'ニトクリス〔オルタ〕' ||
        characterName === '九紋竜エリザ' ||
        characterName === 'ワンジナ'
      ) {
        const ocUpPrcentages = [10, 15, 20, 25, 30]
        this.changeNpBuff(ocUpPrcentages, buffDescription)
      }
    }
  }
}
