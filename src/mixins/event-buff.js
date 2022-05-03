export default {
  methods: {
    setEventCharacterBuff(character) {
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      // まんわかコラボ
      if (
        character.name === 'メアリー・アニング' ||
        character.name === '大黒天' ||
        character.name === 'スーパーバニヤン'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 100
      } else if (
        character.name === 'エリザベート' ||
        character.name === 'アストルフォ' ||
        character.name === 'マリー' ||
        character.name === 'エジソン' ||
        character.name === 'バニヤン'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 50
      } else if (
        character.name === 'アルトリア' ||
        character.name === 'アルテラ' ||
        character.name === 'アストルフォ（セイバー）' ||
        character.name === 'シグルド' ||
        character.name === 'ネロ' ||
        character.name === 'アルテラ・ザ・サン〔タ〕' ||
        character.name === '水着アン&メアリー' ||
        character.name === '水着エレナ' ||
        character.name === 'エウリュアレ' ||
        character.name === '水着玉藻の前' ||
        character.name === 'ヴリトラ' ||
        character.name === 'ジャンヌサンタリリィ' ||
        character.name === 'カイニス' ||
        character.name === 'ダヴィンチ（ライダー）' ||
        character.name === 'マルタ' ||
        character.name === 'アン＆メアリー' ||
        character.name === '水着イシュタル' ||
        character.name === 'エリザベート〔シンデレラ〕' ||
        character.name === '牛若丸' ||
        character.name === 'アナスタシア' ||
        character.name === 'ダヴィンチ（キャスター）' ||
        character.name === 'エレナ' ||
        character.name === 'シバの女王' ||
        character.name === 'ナーサリー' ||
        character.name === 'ニトクリス' ||
        character.name === '水着マリー' ||
        character.name === 'ジャック' ||
        character.name === '武則天' ||
        character.name === '虞美人' ||
        character.name === '静謐のハサン' ||
        character.name === 'アタランテ〔オルタ〕' ||
        character.name === '清姫' ||
        character.name === '水着ダヴィンチ' ||
        character.name === '楊貴妃'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 30
      }
    }
  }
}
