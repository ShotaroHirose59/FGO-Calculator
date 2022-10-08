export default {
  methods: {
    // アーツ性能アップ
    setPossessionSkillArtsBuff(character) {
      if (
        character.name === '千子村正' ||
        character.name === '柳生但馬守宗矩' ||
        character.name === 'エミヤ' ||
        character.name === '李書文（ランサー）' ||
        character.name === '坂本龍馬（ランサー）' ||
        character.name === '曲亭馬琴' ||
        character.name === 'アナスタシア' ||
        character.name === 'ジェロニモ' ||
        character.name === '両儀式（アサシン）'
      ) {
        this.cardBuff += 50
        this.possessionSkills.push({ description: 'Arts性能アップ(50%)' })
      } else if (
        character.name === '両儀式（セイバー）' ||
        character.name === '水着エレナ' ||
        character.name === 'フィン' ||
        character.name === 'エミヤ（アサシン）'
      ) {
        this.cardBuff += 40
        this.possessionSkills.push({ description: 'Arts性能アップ(40%)' })
      } else if (character.name === 'ジーク') {
        this.cardBuff += 36
        this.possessionSkills.push({ description: 'Arts性能アップ(36%)' })
      } else if (character.name === 'クロエ') {
        this.cardBuff += 35
        this.possessionSkills.push({ description: 'Arts性能アップ(35%)' })
      } else if (
        character.name === '水着葛飾北斎' ||
        character.name === '水着巴御前' ||
        character.name === '水着アルトリア' ||
        character.name === '水着ジャンヌ' ||
        character.name === 'エミヤ〔オルタ〕' ||
        character.name === 'ケイローン' ||
        character.name === '水着アナスタシア' ||
        character.name === 'ゼノビア' ||
        character.name === 'エウリュアレ' ||
        character.name === 'ウィリアムテル' ||
        character.name === 'ヴリトラ' ||
        character.name === '長尾景虎' ||
        character.name === '宇津見エリセ' ||
        character.name === 'パーシヴァル' ||
        character.name === '水着モードレッド' ||
        character.name === 'ハベトロット' ||
        character.name === 'シェヘラザード' ||
        character.name === 'ギルガメッシュ（キャスター）' ||
        character.name === '水着シャルロット・コルデー' ||
        character.name === '望月千代女' ||
        character.name === '百貌のハサン' ||
        character.name === '静謐のハサン' ||
        character.name === 'シャルロット・コルデー' ||
        character.name === 'ガラテア' ||
        character.name === '水着伊吹童子' ||
        character.name === 'クリームヒルト' ||
        character.name === 'モリアーティ（ルーラー）' ||
        character.name === 'アストライア' ||
        character.name === '壱与' ||
        character.name === '水着カーマ' ||
        character.name === '謎の蘭丸X' ||
        character.name === '水着宇津見エリセ' ||
        character.name === 'サリエリ' ||
        character.name === 'シトナイ' ||
        character.name === 'BB' ||
        character.name === '葛飾北斎' ||
        character.name === '徴姉妹' ||
        character.name === 'ヘファイスティオン'
      ) {
        this.cardBuff += 30
        this.possessionSkills.push({ description: 'Arts性能アップ(30%)' })
      } else if (
        character.name === 'ディオスクロイ' ||
        character.name === 'ネロ' ||
        character.name === '齋藤一' ||
        character.name === '謎のアルターエゴ・Λ' ||
        character.name === 'ディルムッド' ||
        character.name === 'オデュッセウス' ||
        character.name === 'ネモ' ||
        character.name === '坂本龍馬' ||
        character.name === 'マンドリカルド' ||
        character.name === 'ダヴィンチ（キャスター）' ||
        character.name === 'エレナ' ||
        character.name === 'シバの女王' ||
        character.name === 'スルーズ' ||
        character.name === 'ヒルド' ||
        character.name === 'オルトリンデ' ||
        character.name === '水着ダヴィンチ' ||
        character.name === '太歳星君'
      ) {
        this.cardBuff += 20
        this.possessionSkills.push({ description: 'Arts性能アップ(20%)' })
      } else if (character.name === 'メアリー・アニング') {
        this.cardBuff += 15
        this.possessionSkills.push({ description: 'Arts性能アップ(15%)' })
      } else if (character.name === 'スペースイシュタル') {
        this.cardBuff += 15
        this.possessionSkills.push({
          description: 'Quick・Arts・Buster性能アップ(20%)'
        })
      }
    }
  }
}
