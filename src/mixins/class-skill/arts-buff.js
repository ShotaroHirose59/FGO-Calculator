export default {
  methods: {
    setClassSkillArtsBuff(character) {
      if (
        character.name === 'アナスタシア' ||
        character.name === '水着殺生院キアラ' ||
        character.name === 'ヘファイスティオン'
      ) {
        // 陣地作成[EX]
        this.cardBuff = 12
        this.classSkills.push({
          name: '陣地作成[EX]',
          description: 'Arts性能UP(12%)'
        })
      } else if (character.name === 'シェヘラザード') {
        // 陣地作成[A++]
        this.cardBuff = 11.5
        this.classSkills.push({
          name: '陣地作成[A++]',
          description: 'Arts性能UP(11.5%)'
        })
      } else if (
        character.name === '千子村正' ||
        character.name === '水着アルトリア' ||
        character.name === 'ダヴィンチ（キャスター）' ||
        character.name === 'ナーサリー' ||
        character.name === 'エレナ' ||
        character.name === 'ニトクリス' ||
        character.name === '水着マリー' ||
        character.name === 'ギルガメッシュ（キャスター）' ||
        character.name === 'メディア' ||
        character.name === 'アストライア' ||
        character.name === 'BB' ||
        character.name === 'シトナイ'
      ) {
        // 陣地作成[A]
        this.cardBuff = 10
        this.classSkills.push({
          name: '陣地作成[A]',
          description: 'Arts性能UP(10%)'
        })
      } else if (character.name === '紅閻魔') {
        // お宿作成[B]
        this.cardBuff = 10
        this.classSkills.push({
          name: 'お宿作成[B]',
          description: 'Arts性能UP(10%)'
        })
      } else if (character.name === 'オデュッセウス') {
        // 伝令神の加護[B]
        this.cardBuff = 10
        this.classSkills.push({
          name: '伝令神の加護[B]',
          description: 'Arts性能UP(10%)'
        })
      } else if (character.name === 'メリュジーヌ') {
        // 陣地作成[B+]
        this.cardBuff = 9
        this.classSkills.push({
          name: '陣地作成[B+]',
          description: 'Arts性能UP(9%)'
        })
      } else if (character.name === 'ジェロニモ') {
        // 陣地作成[B]
        this.cardBuff = 8
        this.classSkills.push({
          name: '陣地作成[B]',
          description: 'Arts性能UP(8%)'
        })
      } else if (character.name === '李書文（アサシン）') {
        // 老練[A+]
        this.cardBuff = 8
        this.classSkills.push({
          name: '老練[A+]',
          description: 'Arts性能UP(8%)'
        })
      } else if (character.name === '紫式部') {
        // 陣地作成[C+]
        this.cardBuff = 7
        this.classSkills.push({
          name: '陣地作成[C+]',
          description: 'Arts性能UP(7%)'
        })
      } else if (character.name === 'ジーク') {
        // ホムンクルス[C+]
        this.cardBuff = 6.5
        this.classSkills.push({
          name: 'ホムンクルス[C+]',
          description: 'Arts性能UP(6.5%)'
        })
      } else if (character.name === '両儀式（セイバー）') {
        // 根源接続[A]
        this.cardBuff = 6
        this.classSkills.push({
          name: '根源接続[A]',
          description: 'Arts性能UP(6%)'
        })
      } else if (
        character.name === 'ダヴィンチ（ライダー）' ||
        character.name === 'シバの女王' ||
        character.name === '陳宮'
      ) {
        // 陣地作成[C]
        this.cardBuff = 6
        this.classSkills.push({
          name: '陣地作成[C]',
          description: 'Arts性能UP(6%)'
        })
      } else if (character.name === '水着モードレッド') {
        // サーフィン[A]
        this.cardBuff = 5
        this.classSkills.push({
          name: 'サーフィン[A]',
          description: 'Arts性能UP(5%)'
        })
      } else if (character.name === '水着シャルロット・コルデー') {
        // マジックショー・フィールド[EX]
        this.cardBuff = 5
        this.classSkills.push({
          name: 'マジックショー・フィールド[EX]',
          description: 'Arts性能UP(5%)'
        })
      } else if (character.name === 'エジソン') {
        // 陣地作成[EX] (D相当)
        this.cardBuff = 4
        this.classSkills.push({
          name: '陣地作成[EX] (D相当)',
          description: 'Arts性能UP(4%)'
        })
      } else if (character.name === '葛飾北斎') {
        // 陣地作成[D]
        this.cardBuff = 4
        this.classSkills.push({
          name: '陣地作成[D]',
          description: 'Arts性能UP(4%)'
        })
      } else if (character.name === '謎の蘭丸X') {
        // ランマニウム[EX]
        this.cardBuff = 3
        this.classSkills.push({
          name: 'ランマニウム[EX]',
          description: 'Arts性能UP(3%)'
        })
      }
    }
  }
}
