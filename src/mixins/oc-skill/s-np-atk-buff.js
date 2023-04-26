export default {
  methods: {
    // 特攻バフ
    // 宝具、OCバフで重なる可能性アリ
    setOcSkillSNpAtkBuff(characterName) {
      if (characterName === 'シェヘラザード') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [200, 225, 250, 275, 300]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な王特攻攻撃(200~300%)')
      } else if (characterName === 'ロビンフッド') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [200, 212.5, 225, 237.5, 250]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な毒特攻攻撃(200~250%)')
      } else if (characterName === 'ウィリアムテル') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [200, 212.5, 225, 237.5, 250]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な回避特攻攻撃(200~250%)')
      } else if (characterName === 'モードレッド') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [180, 190, 200, 210, 220]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力なアーサー特攻攻撃(180~220%)')
      } else if (characterName === 'シグルド') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に強力な竜特攻攻撃(150~200%)')
      } else if (characterName === 'ジークフリート') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な竜特攻攻撃(150~200%)')
      } else if (characterName === 'ラーマ' || characterName === '出雲阿国') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な魔性特攻攻撃(150~200%)')
      } else if (characterName === 'ギルガメッシュ') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力なサーヴァント特攻攻撃(150~200%)')
      } else if (characterName === 'テスラ') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に天属性・地属性サーヴァント特攻攻撃(150~200%)')
      } else if (
        characterName === 'ナポレオン' ||
        characterName === 'カルナ' ||
        characterName === '魔王信長'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な神性特攻攻撃(150~200%)')
      } else if (
        characterName === '源為朝' ||
        characterName === '水着スカサハ＝スカディ' ||
        characterName === 'オベロン'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な秩序特攻攻撃(150~200%)')
      } else if (characterName === '織田信長') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な騎乗スキル特攻攻撃(150~200%)')
      } else if (characterName === '浅上藤乃') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な超巨大特攻攻撃(150~200%)')
      } else if (characterName === 'パリス') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な急所判明特攻攻撃(150~200%)')
      } else if (characterName === 'ブリュンヒルデ') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な愛する者特攻攻撃(150~200%)')
      } else if (
        characterName === '水着玉藻の前' ||
        characterName === '女王メイヴ'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な男性特攻攻撃(150~200%)')
      } else if (
        characterName === 'ヴラド三世（EXTRA）' ||
        characterName === 'アストライア'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な悪特攻攻撃(150~200%)')
      } else if (characterName === '曲亭馬琴') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な悪特攻攻撃(150~200%)')
      } else if (characterName === 'バーソロミュー') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な低レア特攻攻撃(150~200%)')
      } else if (characterName === '水着シャルロット・コルデー') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力なスキル封印特攻攻撃(150~200%)')
      } else if (characterName === '謎のヒロインX') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力なアルトリア顔特攻攻撃(150~200%)')
      } else if (characterName === 'カーミラ') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な女性特攻攻撃(150~200%)')
      } else if (characterName === '加藤段蔵' || characterName === '紫式部') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な魔性特攻攻撃(150~200%)')
      } else if (
        characterName === 'スルーズ' ||
        characterName === 'ヒルド' ||
        characterName === 'オルトリンデ' ||
        characterName === '大黒天' ||
        characterName === '水着伊吹童子' ||
        characterName === '闇のコヤンスカヤ' ||
        characterName === 'ククルカン'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な地属性特攻攻撃(150~200%)')
      } else if (characterName === '岡田以蔵') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力な人属性特攻攻撃(150~200%)')
      } else if (characterName === '謎のヒロインX〔オルタ〕') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills(
          '敵単体に超強力なセイバーのサーヴァント特攻攻撃(150~200%)'
        )
      } else if (
        characterName === 'モルガン' ||
        characterName === '千利休' ||
        characterName === '太歳星君' ||
        characterName === '葛飾北斎' ||
        characterName === 'ヨハンナ'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な人属性特攻攻撃(150~200%)')
      } else if (characterName === '水着織田信長') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に強力な神性特攻攻撃(150~200%)')
      } else if (characterName === '水着カーマ') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な魅了特攻攻撃(150~200%)')
      } else if (characterName === '楊貴妃') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵単体に超強力なやけど特攻攻撃(150~200%)')
      } else if (characterName === 'ブリトマート') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills('敵全体に強力な(ライダー)特攻攻撃(150~200%)')
      } else if (characterName === 'ドラコー') {
        if (this.isActiveSpecialNpAtkBuff === true) {
          const ocBuffs = [150, 162.5, 175, 187.5, 200]
          this.sNpAtkBuff = ocBuffs[this.selectingOcUpPrcentage - 1]
        }
        this.setOcSkills(
          '敵単体に超強力な(7騎士のサーヴァント)特攻攻撃(150~200%)'
        )
      }
    },
    setOcSkills(description) {
      if (
        !this.ocSkills.some((ocSkill) => ocSkill.description === description)
      ) {
        this.ocSkills.push({
          description
        })
      }
    }
  }
}
