export default {
  methods: {
    // 特攻バフ
    // 宝具、OCバフで重なる可能性アリ
    setNpSkillSAtkBuff(character) {
      if (character.name === '渡辺綱') {
        // this.sNpAtkBuff += 200
        this.npSkills.push({
          description: '敵単体に超強力な鬼特攻攻撃(200%)'
        })
      } else if (character.name === 'ダビデ') {
        // this.sNpAtkBuff += 200
        this.npSkills.push({
          description: '敵単体に超強力な巨人特攻攻撃(200%)'
        })
      } else if (character.name === 'エルキドゥ') {
        // this.sNpAtkBuff += 200
        this.npSkills.push({
          description: '敵単体に超強力な人類の脅威特攻攻撃(200%)'
        })
      } else if (character.name === '謎のヒロインXX') {
        // this.sNpAtkBuff += 200
        this.npSkills.push({
          description: '敵単体に超強力なセイバーのサーヴァント特攻攻撃(200%)'
        })
      } else if (character.name === 'ケイローン') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵単体に超強力な地属性特攻攻撃(150%)'
        })
      } else if (character.name === 'ゼノビア') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵全体に強力な王特攻攻撃(150%)'
        })
      } else if (character.name === 'エレシュキガル') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵全体に強力な地属性特攻攻撃(150%)'
        })
      } else if (character.name === '水着虞美人') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵単体に超強力な男性特攻攻撃(150%)'
        })
      } else if (character.name === 'ドン・キホーテ') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵単体に超強力な巨人特攻攻撃(150%)'
        })
      } else if (character.name === 'ネモ') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵単体に超強力な超巨大特攻攻撃(150%)'
        })
      } else if (character.name === '太公望') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵全体に強力な神性特攻攻撃(150%)'
        })
      } else if (character.name === '水着紫式部') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵単体に超強力な地属性特攻攻撃(150%)'
        })
      } else if (
        character.name === '水着武則天' ||
        character.name === 'ニトクリス〔オルタ〕'
      ) {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵全体に強力な人属性特攻攻撃(150%)'
        })
      } else if (character.name === '水着牛若丸') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵全体に強力な秩序特攻攻撃(150%)'
        })
      } else if (character.name === 'クリームヒルト') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵単体に超強力な竜特攻攻撃(150%)'
        })
      } else if (character.name === 'カレン') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵全体に強力な混沌特攻攻撃(150%)'
        })
      } else if (character.name === 'モリアーティ（ルーラー）') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵全体に強力な善特攻攻撃(150%)'
        })
      } else if (character.name === '水着宇津見エリセ') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵単体に超強力な呪い特攻攻撃(150%)'
        })
      } else if (character.name === 'ボイジャー') {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵全体に強力な天属性特攻攻撃(150%)'
        })
      } else if (
        character.name === '謎のアイドルX〔オルタ〕' ||
        character.name === '呼延灼' ||
        character.name === 'ラスプーチン（言峰綺礼）'
      ) {
        // this.sNpAtkBuff += 150
        this.npSkills.push({
          description: '敵全体に強力な悪特攻攻撃(150%)'
        })
      } else if (character.name === '清少納言') {
        // this.sAtkBuff += 50
        this.npSkills.push({
          description:
            '(中立のサーヴァント・シャドウサーヴァント)特攻を付与(50%)'
        })
      } else if (character.name === '水着清少納言') {
        // this.sAtkBuff += 50
        this.npSkills.push({
          description:
            '(秩序のサーヴァント・シャドウサーヴァント)特攻を付与(50%)'
        })
      } else if (character.name === '謎のヒロインX〔オルタ〕') {
        // this.sAtkBuff += 50
        this.npSkills.push({
          description: '(善)特攻を付与(50%)'
        })
      } else if (character.name === 'モルガン') {
        // this.sAtkBuff += 50
        this.npSkills.push({
          description: '(円卓の騎士)・妖精)特攻を付与(50%)'
        })
      } else if (character.name === 'ブリトマート') {
        // this.sAtkBuff += 50
        this.npSkills.push({
          description: '(騎乗スキル)特攻状態を付与(50%)'
        })
      } else if (character.name === '曲亭馬琴') {
        // this.sAtkBuff += 30
        this.npSkills.push({ description: '(魔性)特攻を付与(30%)' })
      }
    }
  }
}
