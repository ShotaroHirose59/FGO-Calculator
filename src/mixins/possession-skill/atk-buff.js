export default {
  methods: {
    // 攻撃力アップバフ
    setPossessionSkillAtkBuff(character) {
      if (
        character.name === '水着アルトリア（ルーラー）' ||
        character.name === 'イシュタル' ||
        character.name === 'マンドリカルド'
      ) {
        this.atkBuff += 70
        this.possessionSkills.push({ description: '攻撃力アップ(70%)' })
      } else if (character.name === '武則天') {
        this.atkBuff += 58
        this.possessionSkills.push({ description: '攻撃力アップ(58%)' })
      } else if (
        character.name === 'エリザベート〔ブレイブ〕' ||
        character.name === 'パールヴァティー' ||
        character.name === '謎のアルターエゴ・Λ' ||
        character.name === '水着ネロ' ||
        character.name === '坂田金時' ||
        character.name === '巌窟王エドモン・ダンテス' ||
        character.name === 'ゴルゴーン' ||
        character.name === '謎のヒロインXX' ||
        character.name === 'ククルカン'
      ) {
        this.atkBuff += 50
        this.possessionSkills.push({ description: '攻撃力アップ(50%)' })
      } else if (character.name === '水着アン&メアリー') {
        this.atkBuff += 45
        this.possessionSkills.push({ description: '攻撃力アップ(45%)' })
      } else if (character.name === 'ネロ' || character.name === 'ロムルス') {
        this.atkBuff += 44
        this.possessionSkills.push({ description: '攻撃力アップ(44%)' })
      } else if (character.name === 'ティーチ') {
        this.atkBuff += 43
        this.possessionSkills.push({ description: '攻撃力アップ(43%)' })
      } else if (
        character.name === 'ネロ〔ブライド〕' ||
        character.name === 'ガウェイン' ||
        character.name === '伊吹童子' ||
        character.name === 'ナポレオン' ||
        character.name === 'エミヤ〔オルタ〕' ||
        character.name === 'パリス' ||
        character.name === 'メリュジーヌ' ||
        character.name === 'カイニス' ||
        character.name === 'オジマンディアス' ||
        character.name === 'バベッジ' ||
        character.name === 'クレオパトラ' ||
        character.name === 'キングプロテア' ||
        character.name === 'テスカトリポカ' ||
        character.name === 'ドラコー'
      ) {
        this.atkBuff += 40
        this.possessionSkills.push({ description: '攻撃力アップ(40%)' })
      } else if (character.name === 'ヘラクレス') {
        this.atkBuff += 31
        this.possessionSkills.push({ description: '攻撃力アップ(31%)' })
      } else if (
        character.name === 'アルテラ' ||
        character.name === '水着沖田総司〔オルタ〕' ||
        character.name === 'ジークフリート' ||
        character.name === '斎藤一' ||
        character.name === 'フェルグス' ||
        character.name === 'メドゥーサ（ランサー）' ||
        character.name === 'ジャガーマン' ||
        character.name === '水着アルトリア〔オルタ〕' ||
        character.name === 'アン&メアリー' ||
        character.name === 'メドゥーサ' ||
        character.name === '水着ネロ' ||
        character.name === 'クーフーリン（キャスター）' ||
        character.name === '李書文（アサシン）' ||
        character.name === 'カーマ' ||
        character.name === '水着ニトクリス' ||
        character.name === '虞美人' ||
        character.name === 'グレイ' ||
        character.name === 'シャルロット・コルデー' ||
        character.name === 'ヴラド三世' ||
        character.name === 'アルジュナ〔オルタ〕' ||
        character.name === '水着宮本武蔵' ||
        character.name === 'タマモキャット' ||
        character.name === 'ベオウルフ' ||
        character.name === '水着清少納言' ||
        character.name === '魔王信長' ||
        character.name === '平景清' ||
        character.name === 'ヘシアン･ロボ' ||
        character.name === 'メルトリリス' ||
        character.name === 'パッションリップ' ||
        character.name === 'スーパーバニヤン' ||
        character.name === '水着BB' ||
        character.name === 'ジナコ' ||
        character.name === 'アルクェイド' ||
        character.name === '闇のコヤンスカヤ' ||
        character.name === '呼延灼' ||
        character.name === '黄飛虎' ||
        character.name === '高杉晋作' ||
        character.name === 'ラスプーチン（言峰綺礼）' ||
        character.name === 'ティアマト' ||
        character.name === 'ビーマ'
      ) {
        this.atkBuff += 30
        this.possessionSkills.push({ description: '攻撃力アップ(30%)' })
      } else if (character.name === 'アストルフォ') {
        this.atkBuff += 28
        this.possessionSkills.push({ description: '攻撃力アップ(28%)' })
      } else if (character.name === '呂布奉先') {
        this.atkBuff += 27
        this.possessionSkills.push({ description: '攻撃力アップ(27%)' })
      } else if (character.name === '両儀式（セイバー）') {
        this.atkBuff += 25
        this.possessionSkills.push({ description: '攻撃力アップ(25%)' })
      } else if (
        character.name === 'ギルガメッシュ' ||
        character.name === 'ギルガメッシュ（キャスター）' ||
        character.name === '子ギル' ||
        character.name === 'ケツァル･コアトル'
      ) {
        this.atkBuff += 21
        this.possessionSkills.push({ description: '攻撃力アップ(21%)' })
      } else if (
        character.name === 'スペースイシュタル' ||
        character.name === '紅閻魔' ||
        character.name === 'アストルフォ（セイバー）' ||
        character.name === 'シャルルマーニュ' ||
        character.name === '水着フラン' ||
        character.name === '柳生但馬守宗矩' ||
        character.name === '水着女王メイヴ' ||
        character.name === 'ディルムッド（セイバー）' ||
        character.name === 'ラクシュミー' ||
        character.name === 'イアソン' ||
        character.name === 'オリオン' ||
        character.name === 'テスラ' ||
        character.name === 'モリアーティ' ||
        character.name === '水着ジャンヌ' ||
        character.name === '清少納言' ||
        character.name === '水着刑部姫' ||
        character.name === 'カラミティ・ジェーン' ||
        character.name === 'ナイチンゲール〔サンタ〕' ||
        character.name === '水着イリヤ' ||
        character.name === 'ゼノビア' ||
        character.name === '水着玉藻' ||
        character.name === 'ロムルス＝クィリヌス' ||
        character.name === 'エリザベート' ||
        character.name === 'ヴラド三世（EXTRA）' ||
        character.name === '水着源頼光' ||
        character.name === '水着茨木童子' ||
        character.name === '長尾景虎' ||
        character.name === 'カイニス' ||
        character.name === 'ドン・キホーテ' ||
        character.name === 'クーフーリン' ||
        character.name === 'ガレス' ||
        character.name === '女王メイヴ' ||
        character.name === 'イスカンダル' ||
        character.name === 'オジマンディアス' ||
        character.name === 'マリー' ||
        character.name === '水着カイニス' ||
        character.name === '牛若丸' ||
        character.name === '赤兎馬' ||
        character.name === '玄奘三蔵' ||
        character.name === 'アナスタシア' ||
        character.name === '酒呑童子' ||
        character.name === '酒呑童子（キャスター）' ||
        character.name === '謎のヒロインX' ||
        character.name === '山の翁' ||
        character.name === '鬼一法眼' ||
        character.name === 'スルーズ' ||
        character.name === 'ヒルド' ||
        character.name === 'オルトリンデ' ||
        character.name === '謎のヒロインX〔オルタ〕' ||
        character.name === 'モルガン' ||
        character.name === '水着伊吹童子' ||
        character.name === '茨木童子' ||
        character.name === '水着織田信長' ||
        character.name === '水着ジャンヌ〔オルタ〕' ||
        character.name === 'サロメ' ||
        character.name === '水着スカサハ＝スカディ' ||
        character.name === '水着マルタ' ||
        character.name === 'ケツァル･コアトル〔サンバ／サンタ〕' ||
        character.name === 'アストライア' ||
        character.name === '壱与' ||
        character.name === 'ジャンヌ〔オルタ〕' ||
        character.name === '沖田総司〔オルタ〕' ||
        character.name === 'シトナイ' ||
        character.name === '蘆屋道満' ||
        character.name === 'ジナコ' ||
        character.name === 'ジャック・ド・モレー' ||
        character.name === '謎のアイドルX〔オルタ〕' ||
        character.name === '壱与' ||
        character.name === 'ネモ' ||
        character.name === '闇のコヤンスカヤ' ||
        character.name === '九紋竜エリザ' ||
        character.name === 'シバの女王' ||
        character.name === 'トラロック' ||
        character.name === 'ヨハンナ' ||
        character.name === 'セタンタ' ||
        character.name === 'モードレッド' ||
        character.name === 'アルトリア〔ランサーオルタ〕' ||
        character.name === '果心居士' ||
        character.name === 'ドゥリーヨダナ' ||
        character.name === 'メドゥーサ（セイバー）' ||
        character.name === 'トネリコ' ||
        character.name === '水着クロエ' ||
        character.name === '鈴鹿御前〔サマバケ〕'
      ) {
        this.atkBuff += 20
        this.possessionSkills.push({ description: '攻撃力アップ(20%)' })
      } else if (character.name === '水着マリー') {
        this.atkBuff += 19.5
        this.possessionSkills.push({ description: '攻撃力アップ(19.5%)' })
      } else if (character.name === '巴御前') {
        this.atkBuff += 19
        this.possessionSkills.push({ description: '攻撃力アップ(19%)' })
      } else if (
        character.name === 'アルトリア' ||
        character.name === 'ラーマ' ||
        character.name === 'バーゲスト' ||
        character.name === '水着アルトリア' ||
        character.name === 'ダビデ' ||
        character.name === 'アルトリア（ランサー）' ||
        character.name === 'ペンテシレイア' ||
        character.name === '水着マリー'
      ) {
        this.atkBuff += 18
        this.possessionSkills.push({ description: '攻撃力アップ(18%)' })
      } else if (
        character.name === 'ドレイク' ||
        character.name === '坂本龍馬' ||
        character.name === 'バーソロミュー'
      ) {
        this.atkBuff += 17
        this.possessionSkills.push({ description: '攻撃力アップ(17%)' })
      } else if (
        character.name === 'カエサル' ||
        character.name === 'アレキサンダー'
      ) {
        this.atkBuff += 16
        this.possessionSkills.push({ description: '攻撃力アップ(16%)' })
      } else if (
        character.name === 'ディオスクロイ' ||
        character.name === '徴姉妹' ||
        character.name === 'メアリー・アニング' ||
        character.name === '太公望' ||
        character.name === '水着武則天'
      ) {
        this.atkBuff += 15
        this.possessionSkills.push({ description: '攻撃力アップ(15%)' })
      } else if (character.name === 'レジライ') {
        this.atkBuff += 14
        this.possessionSkills.push({ description: '攻撃力アップ(14%)' })
      } else if (character.name === 'アルトリア〔オルタ〕') {
        this.atkBuff += 12
        this.possessionSkills.push({ description: '攻撃力アップ(12%)' })
      } else if (character.name === '曲亭馬琴') {
        this.atkBuff += 5
        this.possessionSkills.push({ description: '攻撃力アップ(5%)' })
      }
    }
  }
}
