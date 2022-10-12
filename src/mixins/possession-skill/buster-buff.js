export default {
  methods: {
    // バスター性能アップ
    setPossessionSkillBusterBuff(character) {
      if (character.name === '山の翁') {
        this.cardBuff += 100
        this.possessionSkills.push({ description: 'Buster性能アップ(100%)' })
      } else if (character.name === 'エリザベート〔ブレイブ〕') {
        this.cardBuff += 90
        this.possessionSkills.push({ description: 'Buster性能アップ(90%)' })
      } else if (
        character.name === 'アルトリア〔ランサーオルタ〕' ||
        character.name === 'ジャンヌサンタリリィ'
      ) {
        this.cardBuff += 55
        this.possessionSkills.push({ description: 'Buster性能アップ(55%)' })
      } else if (
        character.name === 'アルトリア' ||
        character.name === 'モードレッド' ||
        character.name === '宮本武蔵' ||
        character.name === 'アーサー〔プロトタイプ〕' ||
        character.name === 'シグルド' ||
        character.name === 'アルトリア〔オルタ〕' ||
        character.name === 'アルトリア〔リリィ〕' ||
        character.name === 'ジークフリート' ||
        character.name === '水着ガレス' ||
        character.name === '源為朝' ||
        character.name === '俵藤太' ||
        character.name === 'アルトリア（ランサー）' ||
        character.name === 'エルキドゥ' ||
        character.name === 'エレシュキガル' ||
        character.name === 'イスカンダル' ||
        character.name === 'イリヤ' ||
        character.name === '山の翁' ||
        character.name === 'カリギュラ' ||
        character.name === 'ジャンヌ〔オルタ〕' ||
        character.name === '光のコヤンスカヤ' ||
        character.name === 'オベロン'
      ) {
        this.cardBuff += 50
        this.possessionSkills.push({ description: 'Buster性能アップ(50%)' })
      } else if (
        character.name === 'アルトリア〔サンタオルタ〕' ||
        character.name === 'エリザベート〔ハロウィン〕'
      ) {
        this.cardBuff += 45
        this.possessionSkills.push({ description: 'Buster性能アップ(45%)' })
      } else if (
        character.name === '鈴鹿御前' ||
        character.name === '渡辺綱' ||
        character.name === '水着源頼光' ||
        character.name === 'イヴァン雷帝' ||
        character.name === 'シェイクスピア' ||
        character.name === 'グレイ' ||
        character.name === 'スパルタクス'
      ) {
        this.cardBuff += 40
        this.possessionSkills.push({ description: 'Buster性能アップ(40%)' })
      } else if (character.name === '浅上藤乃') {
        this.cardBuff += 35
        this.possessionSkills.push({ description: 'Buster性能アップ(35%)' })
      } else if (
        character.name === '伊吹童子' ||
        character.name === 'ガウェイン' ||
        character.name === 'バーゲスト' ||
        character.name === 'ローラン' ||
        character.name === 'アルジュナ' ||
        character.name === 'アシュヴァッターマン' ||
        character.name === '水着刑部姫' ||
        character.name === 'カルナ' ||
        character.name === 'ロムルス＝クィリヌス' ||
        character.name === '水着清姫' ||
        character.name === 'ロムルス' ||
        character.name === 'ジャガーマン' ||
        character.name === 'ケツァルコアトル' ||
        character.name === 'エウロペ' ||
        character.name === '水着カイニス' ||
        character.name === 'エリザベート〔シンデレラ〕' ||
        character.name === 'ニキチッチ' ||
        character.name === '酒呑童子（キャスター）' ||
        character.name === 'アヴィケブロン' ||
        character.name === '加藤段蔵' ||
        character.name === '源頼朝' ||
        character.name === '鬼女紅葉' ||
        character.name === '水着ブリュンヒルデ' ||
        character.name === '清姫' ||
        character.name === '天草四郎' ||
        character.name === 'ケツァルコアトル〔サンバ／サンタ〕' ||
        character.name === '魔王信長' ||
        character.name === '沖田総司〔オルタ〕' ||
        character.name === '闇のコヤンスカヤ' ||
        character.name === '九紋竜エリザ'
      ) {
        this.cardBuff += 30
        this.possessionSkills.push({ description: 'Buster性能アップ(30%)' })
      } else if (character.name === 'バーゲスト') {
        this.cardBuff += 28
        this.possessionSkills.push({ description: 'Buster性能アップ(28%)' })
      } else if (character.name === 'ブリュンヒルデ') {
        this.cardBuff += 25
        this.possessionSkills.push({ description: 'Buster性能アップ(25%)' })
      } else if (
        character.name === '齋藤一' ||
        character.name === 'フェルグス' ||
        character.name === 'ヴラド三世（EXTRA）' ||
        character.name === '哪吒' ||
        character.name === 'ドレイク' ||
        character.name === 'レジライ' ||
        character.name === '土方歳三' ||
        character.name === 'ヘラクレス' ||
        character.name === 'ペンテシレイア' ||
        character.name === '水着織田信長' ||
        character.name === '水着ジャンヌ〔オルタ〕' ||
        character.name === 'バニヤン' ||
        character.name === '水着ダヴィンチ' ||
        character.name === 'パッションリップ' ||
        character.name === '水着BB' ||
        character.name === '黄飛虎'
      ) {
        this.cardBuff += 20
        this.possessionSkills.push({ description: 'Buster性能アップ(20%)' })
      } else if (character.name === '水着武則天') {
        this.cardBuff += 15
        this.possessionSkills.push({ description: 'Buster性能アップ(15%)' })
      }
    }
  }
}
