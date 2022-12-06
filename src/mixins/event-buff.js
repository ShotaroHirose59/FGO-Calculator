export default {
  methods: {
    setEventCharacterBuff(character) {
      // 復刻クリスマス
      if (
        character.name === 'カルナ〔サンタ〕' ||
        character.name === 'ヴリトラ'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 100
      } else if (
        character.name === 'アルジュナ' ||
        character.name === 'アルテラ･ザ･サン〔タ〕' ||
        character.name === 'ナイチンゲール〔サンタ〕' ||
        character.name === 'カルナ' ||
        character.name === 'ジャンヌサンタリリィ' ||
        character.name === 'パールヴァティー' ||
        character.name === 'アルトリア〔サンタオルタ〕' ||
        character.name === 'ゲオルギウス' ||
        character.name === 'アルジュナ〔オルタ〕' ||
        character.name === 'ベオウルフ' ||
        character.name === 'ケツァル･コアトル〔サンバ／サンタ〕' ||
        character.name === '水着マルタ'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 50
      } else if (
        character.name === 'シグルド' ||
        character.name === 'モードレッド' ||
        character.name === 'ジークフリート' ||
        character.name === 'アシュヴァッターマン' ||
        character.name === 'エリザベート' ||
        character.name === '謎のアルターエゴ・Λ' ||
        character.name === 'エリザベート〔シンデレラ〕' ||
        character.name === 'マルタ' ||
        character.name === '赤兎馬' ||
        character.name === 'ジーク' ||
        character.name === 'ナーサリー' ||
        character.name === 'カーマ' ||
        character.name === '望月千代女' ||
        character.name === '清姫' ||
        character.name === '葛飾北斎'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += 30
      }
    }
  }
}
