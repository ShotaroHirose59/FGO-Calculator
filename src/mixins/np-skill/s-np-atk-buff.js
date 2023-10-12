export default {
  methods: {
    // 特攻バフ
    // 宝具、OCバフで重なる可能性アリ
    setNpSkillSNpAtkBuff(characterName) {
      if (characterName === '渡辺綱') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 200
        this.setNpSkills('敵単体に超強力な鬼特攻攻撃(200%)')
      } else if (characterName === 'ダビデ') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 200
        this.setNpSkills('敵単体に超強力な巨人特攻攻撃(200%)')
      } else if (characterName === 'エルキドゥ') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 200
        this.setNpSkills('敵単体に超強力な人類の脅威特攻攻撃(200%)')
      } else if (characterName === '水着アルトリア・キャスター') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵単体に超強力な人類の脅威特攻攻撃(150%)')
      } else if (characterName === '謎のヒロインXX') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 200
        this.setNpSkills('敵単体に超強力なセイバーのサーヴァント特攻攻撃(200%)')
      } else if (
        characterName === 'ケイローン' ||
        characterName === '水着紫式部'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵単体に超強力な地属性特攻攻撃(150%)')
      } else if (characterName === 'ゼノビア') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵全体に強力な王特攻攻撃(150%)')
      } else if (
        characterName === 'エレシュキガル' ||
        characterName === '水着メリュジーヌ'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵全体に強力な地属性特攻攻撃(150%)')
      } else if (characterName === '水着虞美人') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵単体に超強力な男性特攻攻撃(150%)')
      } else if (characterName === 'ドン・キホーテ') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵単体に超強力な巨人特攻攻撃(150%)')
      } else if (characterName === 'ネモ') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵単体に超強力な超巨大特攻攻撃(150%)')
      } else if (characterName === '太公望') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵全体に強力な神性特攻攻撃(150%)')
      } else if (
        characterName === '水着武則天' ||
        characterName === 'ニトクリス〔オルタ〕' ||
        characterName === 'ケット・クー・ミコケル'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵全体に強力な人属性特攻攻撃(150%)')
      } else if (characterName === 'メドゥーサ（セイバー）') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵単体に超強力な人属性特攻攻撃(150%)')
      } else if (characterName === '水着牛若丸') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵全体に強力な秩序特攻攻撃(150%)')
      } else if (characterName === 'クリームヒルト') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵単体に超強力な竜特攻攻撃(150%)')
      } else if (characterName === 'カレン') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵全体に強力な混沌特攻攻撃(150%)')
      } else if (characterName === 'モリアーティ（ルーラー）') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵全体に強力な善特攻攻撃(150%)')
      } else if (characterName === '水着宇津見エリセ') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵単体に超強力な呪い特攻攻撃(150%)')
      } else if (characterName === 'ボイジャー') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵全体に強力な天属性特攻攻撃(150%)')
      } else if (characterName === '宮本武蔵') {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills(
          '敵単体に超強力なアルターエゴ・ムーンキャンサー特攻攻撃(150%)'
        )
      } else if (
        characterName === '謎のアイドルX〔オルタ〕' ||
        characterName === '呼延灼' ||
        characterName === 'ラスプーチン（言峰綺礼）'
      ) {
        if (this.isActiveSpecialNpAtkBuff === true) this.sNpAtkBuff = 150
        this.setNpSkills('敵全体に強力な悪特攻攻撃(150%)')
      } else if (characterName === '平景清') {
        this.setNpSkills(
          '超強力な攻撃<復讐の怨念の数だけ威力アップ>(100+25×n%/最大4個)'
        )
      } else if (characterName === 'ロムルス＝クィリヌス') {
        this.setNpSkills('敵全体に強力なローマ特攻攻撃(100+20×n%/最大10個)')
      } else if (characterName === '水着殺生院キアラ') {
        this.setNpSkills('敵全体に強力な精神異常特攻攻撃(100+20×n%/最大10個)')
      } else if (characterName === 'シャルルマーニュ') {
        this.setNpSkills(
          '敵全体に強力な攻撃<王勇の数だけ威力アップ>(100+10×n%/最大12個)'
        )
      } else if (characterName === 'スーパーバニヤン') {
        this.setNpSkills(
          '敵単体に超強力な攻撃<いいね！の数だけ威力アップ>(100+5×n%/最大10個)'
        )
      } else if (characterName === 'ロクスタ') {
        this.setNpSkills(
          '超強力な毒特攻攻撃<対象の〔毒〕状態の数だけ威力アップ>(100+15×n%/最大10個)'
        )
      } else if (characterName === '水着クロエ') {
        this.setNpSkills(
          '超強力な攻撃<原稿完成>の数だけ威力アップ(100+10×n%/最大10個)'
        )
      } else if (characterName === 'ワンジナ') {
        this.setNpSkills(
          '超強力な攻撃<精霊の怒り>の数だけ威力アップ(100+10×n%/最大10個)'
        )
      }
    },
    setNpSkills(description) {
      if (
        !this.npSkills.some((npSkill) => npSkill.description === description)
      ) {
        this.npSkills.push({
          description
        })
      }
    }
  }
}
