export default {
  methods: {
    // 自身にダメージプラスを付与
    setClassSkillDamageAdditionBuff(character) {
      if (
        character.name === 'エウリュアレ' ||
        character.name === 'ケツァル･コアトル' ||
        character.name === 'ティアマト'
      ) {
        this.damageAdditionBuff = 300
        this.classSkills.push({
          description: '自身にダメージプラスを付与(300)'
        })
      } else if (character.name === 'スペースイシュタル') {
        this.damageAdditionBuff = 270
        this.classSkills.push({
          description: '自身にダメージプラスを付与(270)'
        })
      } else if (
        character.name === '伊吹童子' ||
        character.name === 'メドゥーサ（ランサー）' ||
        character.name === 'アルジュナ〔オルタ〕' ||
        character.name === '水着伊吹童子' ||
        character.name === '水着スカサハ＝スカディ' ||
        character.name === 'ケツァル･コアトル〔サンバ/サンタ〕' ||
        character.name === 'キングプロテア' ||
        character.name === '水着BB' ||
        character.name === 'ニトクリス〔オルタ〕'
      ) {
        this.damageAdditionBuff = 250
        this.classSkills.push({
          description: '自身にダメージプラスを付与(250)'
        })
      } else if (character.name === 'ロムルス＝クィリヌス') {
        this.damageAdditionBuff = 235
        this.classSkills.push({
          description: '自身にダメージプラスを付与(235)'
        })
      } else if (character.name === '水着玉藻の前') {
        this.damageAdditionBuff = 230
        this.classSkills.push({
          description: '自身にダメージプラスを付与(230)'
        })
      } else if (
        character.name === 'ディオスクロイ' ||
        character.name === 'イシュタル' ||
        character.name === 'エレシュキガル' ||
        character.name === 'パールヴァティー' ||
        character.name === 'カイニス' ||
        character.name === '水着イシュタル' ||
        character.name === '水着カイニス' ||
        character.name === 'カーマ' ||
        character.name === 'カレン' ||
        character.name === 'アストライア' ||
        character.name === '水着カーマ' ||
        character.name === 'メルトリリス' ||
        character.name === 'シトナイ' ||
        character.name === '蘆屋道満' ||
        character.name === 'ドゥルガー'
      ) {
        this.damageAdditionBuff = 225
        this.classSkills.push({
          description: '自身にダメージプラスを付与(225)'
        })
      } else if (
        character.name === 'アシュヴァッターマン' ||
        character.name === 'トラロック'
      ) {
        this.damageAdditionBuff = 210
        this.classSkills.push({
          description: '自身にダメージプラスを付与(210)'
        })
      } else if (
        character.name === 'ラーマ' ||
        character.name === '鈴鹿御前' ||
        character.name === 'ラクシュミー' ||
        character.name === 'カルナ〔サンタ〕' ||
        character.name === 'カルナ' ||
        character.name === 'ワルキューレ' ||
        character.name === '謎のアルターエゴ・Λ' ||
        character.name === 'ジャガーマン' ||
        character.name === 'ネモ' ||
        character.name === 'スルーズ' ||
        character.name === 'ヒルド' ||
        character.name === 'オルトリンデ' ||
        character.name === 'ヘラクレス' ||
        character.name === 'パッションリップ' ||
        character.name === '鈴鹿御前〔サマバケ〕'
      ) {
        this.damageAdditionBuff = 200
        this.classSkills.push({
          description: '自身にダメージプラスを付与(200)'
        })
      } else if (character.name === '太歳星君') {
        this.damageAdditionBuff = 195
        this.classSkills.push({
          description: '自身にダメージプラスを付与(195)'
        })
      } else if (
        character.name === '水着ニトクリス' ||
        character.name === 'アビゲイル〔夏〕'
      ) {
        this.damageAdditionBuff = 185
        this.classSkills.push({
          description: '自身にダメージプラスを付与(185)'
        })
      } else if (
        character.name === 'アルテラ' ||
        character.name === 'シグルド' ||
        character.name === 'ギルガメッシュ' ||
        character.name === 'アルジュナ' ||
        character.name === 'アルテラ・ザ・サン〔タ〕' ||
        character.name === '子ギル' ||
        character.name === 'クーフーリン' ||
        character.name === 'クーフーリン〔プロトタイプ〕' ||
        character.name === 'オジマンディアス' ||
        character.name === 'ニトクリス' ||
        character.name === 'ギルガメッシュ（キャスター）' ||
        character.name === 'クーフーリン（キャスター）' ||
        character.name === 'ペンテシレイア' ||
        character.name === 'バゼット' ||
        character.name === 'ジナコ' ||
        character.name === 'アビゲイル' ||
        character.name === '葛飾北斎' ||
        character.name === '楊貴妃' ||
        character.name === 'ジャック・ド・モレー' ||
        character.name === 'セタンタ' ||
        character.name === 'ビーマ'
      ) {
        this.damageAdditionBuff = 175
        this.classSkills.push({
          description: '自身にダメージプラスを付与(175)'
        })
      } else if (character.name === '坂本龍馬') {
        this.damageAdditionBuff = 170
        this.classSkills.push({
          description: '自身にダメージプラスを付与(170)'
        })
      } else if (
        character.name === '徴姉妹' ||
        character.name === 'ケイローン' ||
        character.name === '水着源頼光' ||
        character.name === '長尾景虎' ||
        character.name === 'イスカンダル' ||
        character.name === 'アキレウス' ||
        character.name === 'エウロペ' ||
        character.name === '曲亭馬琴' ||
        character.name === 'マルタ' ||
        character.name === '坂田金時（ライダー）' ||
        character.name === '黄飛虎' ||
        character.name === '酒呑童子（キャスター）' ||
        character.name === '酒呑童子' ||
        character.name === 'セミラミス' ||
        character.name === 'クーフーリン（バーサーカー）' ||
        character.name === '源頼光' ||
        character.name === 'テスカトリポカ'
      ) {
        this.damageAdditionBuff = 150
        this.classSkills.push({
          description: '自身にダメージプラスを付与(150)'
        })
      } else if (character.name === '水着刑部姫') {
        this.damageAdditionBuff = 145
        this.classSkills.push({
          description: '自身にダメージプラスを付与(145)'
        })
      } else if (
        character.name === 'カエサル' ||
        character.name === 'フィン' ||
        character.name === '玄奘三蔵' ||
        character.name === 'クレオパトラ' ||
        character.name === '坂田金時' ||
        character.name === '水着宮本武蔵'
      ) {
        this.damageAdditionBuff = 125
        this.classSkills.push({
          description: '自身にダメージプラスを付与(125)'
        })
      } else if (character.name === 'メドゥーサ（セイバー）') {
        this.damageAdditionBuff = 120
        this.classSkills.push({
          description: '自身にダメージプラスを付与(120)'
        })
      } else if (
        character.name === '水着葛飾北斎' ||
        character.name === 'ブリュンヒルデ' ||
        character.name === '宇津見エリセ' ||
        character.name === '水着宇津見エリセ' ||
        character.name === 'アレキサンダー' ||
        character.name === '水着ブリュンヒルデ'
      ) {
        this.damageAdditionBuff = 100
        this.classSkills.push({
          description: '自身にダメージプラスを付与(100)'
        })
      } else if (
        character.name === 'メドゥーサ' ||
        character.name === '大黒天'
      ) {
        this.damageAdditionBuff = 95
        this.classSkills.push({
          description: '自身にダメージプラスを付与(95)'
        })
      }
    }
  }
}
