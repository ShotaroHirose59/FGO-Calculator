export default {
  methods: {
    // クイック性能アップ
    setPossessionSkillQuickBuff(character) {
      if (
        character.name === '沖田総司' ||
        character.name === 'アタランテ' ||
        character.name === 'スカサハ' ||
        character.name === '水着スカサハ' ||
        character.name === '水着アルトリア〔オルタ〕' ||
        character.name === '水着沖田総司' ||
        character.name === 'アタランテ〔オルタ〕' ||
        character.name === 'ボイジャー'
      ) {
        this.cardBuff += 50
        this.possessionSkills.push({ description: 'Quick性能アップ(50%)' })
      } else if (character.name === 'バーヴァンシー') {
        this.cardBuff += 40
        this.possessionSkills.push({ description: 'Quick性能アップ(40%)' })
      } else if (
        character.name === 'シャルルマーニュ' ||
        character.name === 'カルナ〔サンタ〕' ||
        character.name === '清少納言' ||
        character.name === 'トリスタン' ||
        character.name === 'ブラダマンテ' ||
        character.name === 'パールヴァティー' ||
        character.name === 'ワルキューレ' ||
        character.name === 'アキレウス' ||
        character.name === '坂田金時（ライダー）' ||
        character.name === '赤兎馬' ||
        character.name === '出雲阿国' ||
        character.name === '大黒天' ||
        character.name === '燕青' ||
        character.name === '水着牛若丸' ||
        character.name === '鬼一法眼' ||
        character.name === '荊軻' ||
        character.name === '謎のヒロインX〔オルタ〕' ||
        character.name === '項羽' ||
        character.name === 'バゼット' ||
        character.name === '謎のアイドルX〔オルタ〕'
      ) {
        this.cardBuff += 30
        this.possessionSkills.push({ description: 'Quick性能アップ(30%)' })
      } else if (
        character.name === '水着沖田総司〔オルタ〕' ||
        character.name === 'ディルムッド（セイバー）' ||
        character.name === 'ラクシュミー' ||
        character.name === '水着イリヤ' ||
        character.name === '水着虞美人' ||
        character.name === 'ドン・キホーテ' ||
        character.name === 'ディルムッド' ||
        character.name === '水着イシュタル' ||
        character.name === '牛若丸' ||
        character.name === 'アレキサンダー' ||
        character.name === 'バーソロミュー' ||
        character.name === '張角' ||
        character.name === '武則天' ||
        character.name === '千利休' ||
        character.name === 'カレン' ||
        character.name === 'ジャック・ド・モレー'
      ) {
        this.cardBuff += 20
        this.possessionSkills.push({ description: 'Quick性能アップ(20%)' })
      } else if (character.name === '太公望') {
        this.cardBuff += 15
        this.possessionSkills.push({ description: 'Quick性能アップ(15%)' })
      }
    }
  }
}
