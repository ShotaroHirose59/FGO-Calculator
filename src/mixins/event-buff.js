export default {
  methods: {
    setEventCharacterBuff(character) {
      this.isEventCharacter = false
      this.isNpBuffEventCharacter = false
      // 水着イベント2022
      if (
        character.name === 'オルトリンデ' ||
        character.name === 'スルーズ' ||
        character.name === 'ヒルド' ||
        character.name === '水着伊吹童子' ||
        character.name === '水着スカディ' ||
        character.name === 'レディ･アヴァロン'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 100
      } else if (
        character.name === '水着ガレス' ||
        character.name === '燕青' ||
        character.name === '蘆屋道満' ||
        character.name === '水着宇津見エリセ' ||
        character.name === '水着武則天' ||
        character.name === 'アルクェイド'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 50
      } else if (
        character.name === '水着沖田総司〔オルタ〕' ||
        character.name === 'シグルド' ||
        character.name === '水着葛飾北斎' ||
        character.name === 'ジークフリート' ||
        character.name === '水着女王メイヴ' ||
        character.name === '水着巴御前' ||
        character.name === '水着フラン' ||
        character.name === '水着アルトリア' ||
        character.name === '水着ジャンヌ' ||
        character.name === 'アナスタシア＆ヴィイ' ||
        character.name === '水着アン&メアリー' ||
        character.name === '水着イリヤスフィール' ||
        character.name === 'エミヤ' ||
        character.name === '水着エレナ' ||
        character.name === '水着刑部姫' ||
        character.name === 'ロビンフッド' ||
        character.name === '水着玉藻の前' ||
        character.name === '水着茨木童子' ||
        character.name === '水着清姫' ||
        character.name === '水着虞美人' ||
        character.name === '謎のアルターエゴ・Λ' ||
        character.name === '水着源頼光' ||
        character.name === 'アキレウス' ||
        character.name === '水着アルトリア〔オルタ〕' ||
        character.name === '水着イシュタル' ||
        character.name === '水着カーミラ' ||
        character.name === '水着カイニス' ||
        character.name === '水着紫式部' ||
        character.name === '水着モードレッド' ||
        character.name === 'マンドリカルド' ||
        character.name === 'ティーチ' ||
        character.name === '水着ネロ' ||
        character.name === 'ギルガメッシュ（キャスター）' ||
        character.name === '水着シャルロット・コルデー' ||
        character.name === '水着マリー' ||
        character.name === '水着牛若丸' ||
        character.name === 'オキタ･J･ソウジ' ||
        character.name === '水着スカサハ' ||
        character.name === '水着ニトクリス' ||
        character.name === '風魔小太郎' ||
        character.name === '水着宮本武蔵' ||
        character.name === '水着織田信長' ||
        character.name === '水着ジャンヌ〔オルタ〕' ||
        character.name === '水着清少納言' ||
        character.name === '水着ブリュンヒルデ' ||
        character.name === '水着アルトリア（ルーラー）' ||
        character.name === '水着マルタ' ||
        character.name === '水着ダヴィンチ' ||
        character.name === '水着カーマ' ||
        character.name === '巌窟王' ||
        character.name === '水着殺生院キアラ' ||
        character.name === '水着BB' ||
        character.name === 'アビゲイル〔夏〕' ||
        character.name === '謎のヒロインXX'
      ) {
        this.isEventCharacter = true
        this.sAtkBuff = 30
      }
    }
  }
}
