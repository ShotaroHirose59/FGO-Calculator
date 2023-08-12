export default {
  methods: {
    setClassSkillQuickBuff(character) {
      if (
        character.name === '水着フラン' ||
        character.name === 'アルテラ・ザ・サン〔タ〕' ||
        character.name === '水着イシュタル' ||
        character.name === '赤兎馬' ||
        character.name === '謎のヒロインX'
      ) {
        // 騎乗[EX]
        this.cardBuff += 12
        this.classSkills.push({
          name: '騎乗[EX]',
          description: 'Quick性能アップ(12%)'
        })
      } else if (
        character.name === 'アキレウス' ||
        character.name === '太公望' ||
        character.name === 'マリー' ||
        character.name === 'アストルフォ' ||
        character.name === 'メドゥーサ' ||
        character.name === '牛若丸' ||
        character.name === 'アレキサンダー' ||
        character.name === '水着牛若丸'
      ) {
        // 騎乗[A+]
        this.cardBuff += 11
        this.classSkills.push({
          name: '騎乗[A+]',
          description: 'Quick性能アップ(11%)'
        })
      } else if (
        character.name === 'アストルフォ（セイバー）' ||
        character.name === 'カラミティ・ジェーン' ||
        character.name === 'バーヴァンシー' ||
        character.name === 'カーマ' ||
        character.name === 'シャルルマーニュ' ||
        character.name === 'バゼット' ||
        character.name === 'メドゥーサ（セイバー）' ||
        character.name === '鈴鹿御前〔サマバケ〕'
      ) {
        // 騎乗[A]
        this.cardBuff += 10
        this.classSkills.push({
          name: '騎乗[A]',
          description: 'Quick性能アップ(10%)'
        })
      } else if (
        character.name === 'ディルムッド（セイバー）' ||
        character.name === 'ラクシュミー' ||
        character.name === 'カエサル' ||
        character.name === '水着アルトリア〔オルタ〕' ||
        character.name === 'メルトリリス' ||
        character.name === '呼延灼'
      ) {
        // 騎乗[B]
        this.cardBuff += 8
        this.classSkills.push({
          name: '騎乗[B]',
          description: 'Quick性能アップ(8%)'
        })
      } else if (character.name === 'ビリー・ザ・キッド') {
        // 騎乗[C+]
        this.cardBuff += 7
        this.classSkills.push({
          name: '騎乗[C+]',
          description: 'Quick性能アップ(7%)'
        })
      } else if (character.name === '果心居士') {
        // 絡繰作成[EX]
        this.cardBuff += 6
        this.classSkills.push({
          name: '絡繰作成[EX]',
          description: 'Quick性能アップ(6%)'
        })
      } else if (character.name === '燕青') {
        // 無頼漢[A]
        this.cardBuff += 5
        this.classSkills.push({
          name: '無頼漢[A]',
          description: 'Quick性能アップ(5%)'
        })
      } else if (character.name === 'バーソロミュー') {
        // 騎乗[D]
        this.cardBuff += 4
        this.classSkills.push({
          name: '騎乗[D]',
          description: 'Quick性能アップ(4%)'
        })
      } else if (
        character.name === '沖田総司' ||
        character.name === 'ドン・キホーテ'
      ) {
        // 騎乗[E]
        this.cardBuff += 2
        this.classSkills.push({
          name: '騎乗[E]',
          description: 'Quick性能アップ(2%)'
        })
      }
    }
  }
}
