export default {
  methods: {
    setEventCharacterBuff(characterName) {
      // 螺旋証明世界 リリムハーロット ～喝采なき薔薇～ / 巡霊の祝祭 第1弾
      const eventCharacters = {
        セタンタ: 100,
        ロクスタ: 100,
        ティアマト: 100,
        ドラコー: 100,
        'ギルガメッシュ（キャスター）': 50,
        ジャック: 50,
        'クーフーリン〔オルタ〕': 50,
        'ジャック・ド・モレー': 50,
        'アーサー〔プロトタイプ〕': 30,
        アストルフォ: 30,
        アルテラ: 30,
        アルトリア: 30,
        沖田総司: 30,
        千子村正: 30,
        'ネロ〔ブライド〕': 30,
        宮本武蔵: 30,
        モードレッド: 30,
        '両儀式（セイバー）': 30,
        'アルトリア〔オルタ〕': 30,
        ジークフリート: 30,
        女王メイヴ: 30,
        ネロ: 30,
        カエサル: 30,
        アルジュナ: 30,
        水着アルトリア: 30,
        イシュタル: 30,
        ギルガメッシュ: 30,
        モリアーティ: 30,
        水着ジャンヌ: 30,
        清少納言: 30,
        浅上藤乃: 30,
        アタランテ: 30,
        エミヤ: 30,
        織田信長: 30,
        クロエ: 30,
        'アルトリア（ランサー）': 30,
        エルキドゥ: 30,
        エレシュキガル: 30,
        カルナ: 30,
        スカサハ: 30,
        水着玉藻の前: 30,
        ブラダマンテ: 30,
        'アルトリア〔ランサーオルタ〕': 30,
        エリザベート: 30,
        虞美人: 30,
        水着源頼光: 30,
        '水着アルトリア〔オルタ〕': 30,
        イスカンダル: 30,
        オジマンディアス: 30,
        ドレイク: 30,
        'ダヴィンチ（ライダー）': 30,
        マリー: 30,
        マルタ: 30,
        メドゥーサ: 30,
        ティーチ: 30,
        ゲオルギウス: 30,
        イリヤ: 30,
        'ダヴィンチ（キャスター）': 30,
        'クーフーリン（キャスター）': 30,
        'ジル・ド・レェ（キャスター）': 30,
        刑部姫: 30,
        酒呑童子: 30,
        光のコヤンスカヤ: 30,
        山の翁: 30,
        カーミラ: 30,
        グレイ: 30,
        ニトクリス: 30,
        '両儀式（キャスター）': 30,
        岡田以蔵: 30,
        呪腕のハサン: 30,
        ファントム: 30,
        ヴラド三世: 30,
        坂田金時: 30,
        '謎のヒロインX〔オルタ〕': 30,
        水着宮本武蔵: 30,
        モルガン: 30,
        茨木童子: 30,
        '水着ジャンヌ〔オルタ〕': 30,
        ヘラクレス: 30,
        'ランスロット（バーサーカー）': 30,
        清姫: 30,
        バニヤン: 30,
        天草四郎: 30,
        '水着アルトリア（ルーラー）': 30,
        アストライア: 30,
        巌窟王: 30,
        'ジャンヌ〔オルタ〕': 30,
        メルトリリス: 30,
        パッションリップ: 30,
        BB: 30,
        水着BB: 30,
        'アビゲイル〔夏〕': 30,
        葛飾北斎: 30,
        謎のヒロインXX: 30,
        '坂田金時（ライダー）': 50,
        '酒呑童子（キャスター）': 50,
        'ケツァル･コアトル〔サンバ／サンタ〕': 50
      }
      if (
        Object.prototype.hasOwnProperty.call(eventCharacters, characterName)
      ) {
        this.isEventCharacter = true
        this.sAtkBuff += eventCharacters[characterName]
      }
    }
  }
}
