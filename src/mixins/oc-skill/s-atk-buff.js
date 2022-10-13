export default {
  methods: {
    // 特攻バフ
    // 宝具、OCバフで重なる可能性アリ
    setOcSkillSAtkBuff(character) {
      if (character.name === 'シェヘラザード') {
        // this.sNpAtkBuff += 200
        this.ocSkills.push({
          description: '敵全体に強力な王特攻攻撃(200~300%)'
        })
      } else if (character.name === 'ロビンフッド') {
        // this.sNpAtkBuff += 200
        this.ocSkills.push({
          description: '敵単体に超強力な毒特攻攻撃(200~250%)'
        })
      } else if (character.name === 'ウィリアムテル') {
        // this.sNpAtkBuff += 200
        this.ocSkills.push({
          description: '敵単体に超強力な回避特攻攻撃(200~250%)'
        })
      } else if (character.name === '渡辺綱') {
        // this.sAtkBuff += 20
        this.ocSkills.push({ description: '(魔性)特攻を付与(20~40%)' })
      } else if (character.name === 'モードレッド') {
        // this.sNpAtkBuff += 180
        this.ocSkills.push({
          description: '敵全体に強力なアーサー特攻攻撃(180~220%)'
        })
      } else if (
        character.name === 'シグルド' ||
        character.name === 'ジークフリート'
      ) {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な竜特攻攻撃(150~200%)'
        })
      } else if (character.name === 'ラーマ') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な魔性特攻攻撃(150~200%)'
        })
      } else if (character.name === 'ギルガメッシュ') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力なサーヴァント特攻攻撃(150~200%)'
        })
      } else if (character.name === 'テスラ') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に天属性・地属性サーヴァント特攻(150~200%)'
        })
      } else if (character.name === 'ナポレオン') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な神性特攻攻撃(150~200%)'
        })
      } else if (
        character.name === '源為朝' ||
        character.name === '水着スカディ' ||
        character.name === 'オベロン'
      ) {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な秩序特攻攻撃(150~200%)'
        })
      } else if (character.name === '織田信長') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な騎乗スキル特攻攻撃(150~200%)'
        })
      } else if (character.name === '浅上藤乃') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な超巨大特攻攻撃(150~200%)'
        })
      } else if (character.name === 'パリス') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な急所判明特攻攻撃(150~200%)'
        })
      } else if (character.name === 'カルナ') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な神性特攻攻撃(150~200%)'
        })
      } else if (character.name === 'ブリュンヒルデ') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な愛する者特攻攻撃(150~200%)'
        })
      } else if (character.name === '水着玉藻の前') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な男性特攻攻撃(150~200%)'
        })
      } else if (character.name === 'ヴラド三世（EXTRA）') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な男性特攻攻撃(150~200%)'
        })
      } else if (character.name === '女王メイヴ') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な男性特攻攻撃(150~200%)'
        })
      } else if (character.name === '曲亭馬琴') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な悪特攻攻撃(150~200%)'
        })
      } else if (character.name === 'バーソロミュー') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な低レア特攻攻撃(150~200%)'
        })
      } else if (character.name === '紫式部') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な魔性特攻攻撃(150~200%)'
        })
      } else if (character.name === '出雲阿国') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な魔性特攻攻撃(150~200%)'
        })
      } else if (character.name === '水着シャルロット・コルデー') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力なスキル封印特攻攻撃(150~200%)'
        })
      } else if (character.name === '大黒天') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な地属性特攻攻撃(150~200%)'
        })
      } else if (character.name === '謎のヒロインX') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力なアルトリア顔特攻攻撃(150~200%)'
        })
      } else if (character.name === 'カーミラ') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な女性特攻攻撃(150~200%)'
        })
      } else if (character.name === '加藤段蔵') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な魔性特攻攻撃(150~200%)'
        })
      } else if (
        character.name === 'スルーズ' ||
        character.name === 'ヒルド' ||
        character.name === 'オルトリンデ'
      ) {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な地属性特攻攻撃(150~200%)'
        })
      } else if (character.name === '岡田以蔵') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な人属性特攻攻撃(150~200%)'
        })
      } else if (character.name === '謎のヒロインX〔オルタ〕') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description:
            '敵単体に超強力なセイバーのサーヴァント特攻攻撃(150~200%)'
        })
      } else if (
        character.name === 'モルガン' ||
        character.name === '千利休' ||
        character.name === '太歳星君' ||
        character.name === '葛飾北斎'
      ) {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な人属性特攻攻撃(150~200%)'
        })
      } else if (
        character.name === '水着伊吹童子' ||
        character.name === '闇のコヤンスカヤ'
      ) {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な地属性特攻攻撃(150~200%)'
        })
      } else if (character.name === '水着織田信長') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に強力な神性特攻攻撃(150~200%)'
        })
      } else if (character.name === 'アストライア') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力な悪特攻攻撃(150~200%)'
        })
      } else if (character.name === '魔王信長') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な神性特攻攻撃(150~200%)'
        })
      } else if (character.name === '水着カーマ') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵全体に強力な魅了特攻攻撃(150~200%)'
        })
      } else if (character.name === '楊貴妃') {
        // this.sNpAtkBuff += 150
        this.ocSkills.push({
          description: '敵単体に超強力なやけど特攻攻撃(150~200%)'
        })
      } else if (
        character.name === '清少納言' ||
        character.name === '水着清少納言'
      ) {
        // this.sAtkBuff += 50
        this.ocSkills.push({ description: '(人属性)特攻を付与(50~100%)' })
      } else if (character.name === '俵藤太') {
        // this.sAtkBuff += 50
        this.ocSkills.push({ description: '(魔性)特攻を付与(50~100%)' })
      } else if (character.name === 'ジャック') {
        // this.sAtkBuff += 50
        this.ocSkills.push({ description: '(女性)特攻を付与(50~100%)' })
      } else if (character.name === '紅閻魔') {
        // this.sAtkBuff += 40
        this.ocSkills.push({ description: '(混沌)特攻を付与(40~60%)' })
      }
    }
  }
}
