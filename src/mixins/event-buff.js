export default {
  methods: {
    setEventCharacterBuff(character) {
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      // ホワイトデー スペクタルズ
      if (
        character.name === 'アルジュナ〔オルタ〕' ||
        character.name === 'ネモ' ||
        character.name === 'クーフーリン〔オルタ〕' ||
        character.name === '斎藤一'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 100
      } else if (
        character.name === 'ガウェイン' ||
        character.name === 'カルナ' ||
        character.name === 'エルキドゥ' ||
        character.name === 'モードレット' ||
        character.name === 'メドゥーサ' ||
        character.name === 'サンソン'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 50
      } else if (
        character.name === 'シグルド' ||
        character.name === 'ジークフリート' ||
        character.name === 'モリアーティ' ||
        character.name === 'エミヤ' ||
        character.name === 'ウィリアムテル' ||
        character.name === 'アキレウス' ||
        character.name === '水着カイニス' ||
        character.name === '坂田金時（ライダー）' ||
        character.name === '陳宮' ||
        character.name === '李書文（アサシン）' ||
        character.name === 'ファントム' ||
        character.name === '坂田金時' ||
        character.name === '天草四郎' ||
        character.name === '巌窟王' ||
        character.name === 'ボイジャー' ||
        character.name === '清少納言' ||
        character.name === '水着ジャンヌ' ||
        character.name === '紫式部' ||
        character.name === 'ダヴィンチ（キャスター）' ||
        character.name === '光のコヤンスカヤ' ||
        character.name === '謎のヒロインX〔オルタ〕' ||
        character.name === 'ジナコ＝カリギリ' ||
        character.name === 'ジャック・ド・モレー' ||
        character.name === '闇のコヤンスカヤ' ||
        character.name === '水着葛飾北斎' ||
        character.name === '水着女王メイヴ' ||
        character.name === 'ナイチンゲール〔サンタ〕' ||
        character.name === '水着刑部姫' ||
        character.name === '水着エレナ' ||
        character.name === '水着虞美人' ||
        character.name === '謎のアルターエゴ・Λ' ||
        character.name === '水着紫式部' ||
        character.name === '水着カーミラ' ||
        character.name === '水着シャルロット・コルデー' ||
        character.name === '虞美人' ||
        character.name === '水着清少納言' ||
        character.name === '謎のアルターエゴ・Λ' ||
        character.name === '水着ブリュンヒルデ' ||
        character.name === 'ペンテシレイア' ||
        character.name === '水着ダヴィンチ' ||
        character.name === 'BB' ||
        character.name === '謎のアイドルX〔オルタ〕'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 30
      }
    }
  }
}
