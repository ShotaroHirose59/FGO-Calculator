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
        this.cardBuff = 12
        this.classSkills.push({
          name: '騎乗[EX]',
          description: 'Quick性能UP(12%)'
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
        this.cardBuff = 11
        this.classSkills.push({
          name: '騎乗[A+]',
          description: 'Quick性能UP(11%)'
        })
      } else if (
        character.name === 'アストルフォ（セイバー）' ||
        character.name === 'カラミティ・ジェーン' ||
        character.name === 'バーヴァンシー' ||
        character.name === 'カーマ'
      ) {
        // 騎乗[A]
        this.cardBuff = 10
        this.classSkills.push({
          name: '騎乗[A]',
          description: 'Quick性能UP(10%)'
        })
      } else if (
        character.name === 'ディルムッド（セイバー）' ||
        character.name === 'ラクシュミー' ||
        character.name === 'カエサル' ||
        character.name === '水着アルトリア〔オルタ〕' ||
        character.name === 'メルトリリス'
      ) {
        // 騎乗[B]
        this.cardBuff = 8
        this.classSkills.push({
          name: '騎乗[B]',
          description: 'Quick性能UP(8%)'
        })
      } else if (character.name === 'ビリー・ザ・キッド') {
        // 騎乗[C+]
        this.cardBuff = 7
        this.classSkills.push({
          name: '騎乗[C+]',
          description: 'Quick性能UP(7%)'
        })
      } else if (character.name === '燕青') {
        // 無頼漢[A]
        this.cardBuff = 5
        this.classSkills.push({
          name: '無頼漢[A]',
          description: 'Quick性能UP(5%)'
        })
      } else if (character.name === 'バーソロミュー') {
        // 騎乗[D]
        this.cardBuff = 4
        this.classSkills.push({
          name: '騎乗[D]',
          description: 'Quick性能UP(4%)'
        })
      } else if (character.name === '沖田総司') {
        // 騎乗[E]
        this.cardBuff = 2
        this.classSkills.push({
          name: '騎乗[E]',
          description: 'Quick性能UP(2%)'
        })
      }
    }
  }
}
