export default {
  methods: {
    setPossessionSkillNpAcquisitionBuff(character) {
      if (character.name === 'ランスロット（バーサーカー）') {
        this.npAcquisitionBuff += 100
        this.possessionSkills.push({ description: 'NP獲得量アップ(100%)' })
      } else if (character.name === '水着フラン') {
        this.npAcquisitionBuff += 80
        this.possessionSkills.push({ description: 'NP獲得量アップ(80%)' })
      } else if (character.name === '水着イシュタル') {
        this.npAcquisitionBuff += 70
        this.possessionSkills.push({ description: 'NP獲得量アップ(70%)' })
      } else if (
        character.name === '柳生但馬守宗矩' ||
        character.name === 'アタランテ' ||
        character.name === 'メディア' ||
        character.name === '水着宮本武蔵' ||
        character.name === '殺生院キアラ' ||
        character.name === '巌窟王エドモン・ダンテス'
      ) {
        this.npAcquisitionBuff += 50
        this.possessionSkills.push({ description: 'NP獲得量アップ(50%)' })
      } else if (
        character.name === 'ネロ〔ブライド〕' ||
        character.name === 'フラン'
      ) {
        this.npAcquisitionBuff += 45
        this.possessionSkills.push({ description: 'NP獲得量アップ(45%)' })
      } else if (
        character.name === '水着沖田総司〔オルタ〕' ||
        character.name === 'ディルムッド（セイバー）' ||
        character.name === '水着イリヤ' ||
        character.name === 'ロビンフッド' ||
        character.name === 'フィン' ||
        character.name === 'パールヴァティー' ||
        character.name === '長尾景虎' ||
        character.name === 'アキレウス' ||
        character.name === '水着アン&メアリー' ||
        character.name === 'メドゥーサ' ||
        character.name === 'ジーク' ||
        character.name === '大黒天' ||
        character.name === '燕青' ||
        character.name === '水着ニトクリス' ||
        character.name === 'ヴラド三世' ||
        character.name === '水着伊吹童子' ||
        character.name === 'ジナコ' ||
        character.name === 'ヘファイスティオン' ||
        character.name === 'ブリトマート' ||
        character.name === 'ブラダマンテ' ||
        character.name === '水着沖田総司'
      ) {
        this.npAcquisitionBuff += 30
        this.possessionSkills.push({ description: 'NP獲得量アップ(30%)' })
      } else if (
        character.name === '徴姉妹' ||
        character.name === 'シャルルマーニュ' ||
        character.name === 'ラクシュミー' ||
        character.name === '水着虞美人' ||
        character.name === '牛若丸' ||
        character.name === '鬼一法眼' ||
        character.name === '百貌のハサン' ||
        character.name === '千利休' ||
        character.name === 'アストライア' ||
        character.name === '太歳星君' ||
        character.name === 'スルーズ' ||
        character.name === 'ヒルド' ||
        character.name === 'オルトリンデ'
      ) {
        this.npAcquisitionBuff += 20
        this.possessionSkills.push({ description: 'NP獲得量アップ(20%)' })
      } else if (character.name === 'メアリー・アニング') {
        this.npAcquisitionBuff += 10
        this.possessionSkills.push({ description: 'NP獲得量アップ(10%)' })
      }
    }
  }
}
