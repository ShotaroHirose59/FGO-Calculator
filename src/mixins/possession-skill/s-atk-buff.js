export default {
  methods: {
    // 特攻バフ
    setPossessionSkillSAtkBuff(characterName) {
      if (characterName === '平景清') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 200
        this.setPossessionSkills('(源氏)特攻を付与(200%)')
      } else if (characterName === 'アーサー〔プロトタイプ〕') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(超巨大)特攻を付与(100%)')
      } else if (characterName === 'オリオン') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(男性)特攻を付与(100%)')
      } else if (characterName === '織田信長') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(神性)特攻を付与(100%)')
      } else if (characterName === 'スカサハ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(神性・死霊)特攻を付与(100%)')
      } else if (
        characterName === 'クーフーリン〔プロトタイプ〕' ||
        characterName === 'セタンタ'
      ) {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(猛獣)特攻を付与(100%)')
      } else if (characterName === 'ジーク') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(竜)特攻を付与(100%)')
      } else if (characterName === 'グレイ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(死霊)特攻を付与(100%)')
      } else if (characterName === '岡田以蔵') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(人型)特攻を付与(100%)')
      } else if (characterName === 'ペンテシレイア') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(ギリシャ神話系男性)特攻を付与(100%)')
      } else if (characterName === '水着マルタ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 100
        this.setPossessionSkills('(神性・悪魔・死霊)特攻を付与(100%)')
      } else if (
        characterName === 'ジークフリート' ||
        characterName === 'ニキチッチ'
      ) {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 80
        this.setPossessionSkills('(竜)特攻を付与(80%)')
      } else if (characterName === 'サンソン') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 60
        this.setPossessionSkills('(悪・人間)特攻を付与(60%)')
      } else if (characterName === '伊吹童子') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(死霊)特攻を付与(50%)')
      } else if (characterName === 'アルトリア（ランサー）') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(混沌・悪)特攻を付与(50%)')
      } else if (characterName === '哪吒') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(魔性)特攻を付与(50%)')
      } else if (characterName === '太公望') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(神性・魔性)特攻を付与(50%)')
      } else if (characterName === 'エリザベート〔シンデレラ〕') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(猛獣)特攻を付与(50%)')
      } else if (characterName === '酒呑童子（キャスター）') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(魔性)特攻を付与(50%)')
      } else if (characterName === '謎のヒロインX') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(セイバー)特攻を付与(50%)')
      } else if (characterName === '光のコヤンスカヤ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(人間・人属性)特攻を付与(50%)')
      } else if (characterName === '荊軻') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(王)特攻を付与(50%)')
      } else if (characterName === '源頼光') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(魔性・天属性・地属性)特攻を付与(50%)')
      } else if (characterName === 'アルジュナ〔オルタ〕') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(弱体)特攻を付与(50%)')
      } else if (characterName === 'ベオウルフ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(竜・巨人)特攻を付与(50%)')
      } else if (characterName === 'サロメ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(秩序かつ善)特攻を付与(50%)')
      } else if (characterName === '壱与' || characterName === '水着スカサハ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(神性)特攻を付与(50%)')
      } else if (characterName === '魔王信長') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(炎上の時、天属性)特攻を付与(50%)')
      } else if (characterName === 'クリームヒルト') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(混沌)特攻を付与(50%)')
      } else if (characterName === 'ジナコ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(秩序)特攻を付与(50%)')
      } else if (characterName === 'ジャック・ド・モレー') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(呪い)特攻を付与(50%)')
      } else if (characterName === '謎のヒロインXX') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(人類の脅威)特攻を付与(50%)')
      } else if (characterName === 'テスカトリポカ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(神性・超巨大)特攻を付与(50%)')
      } else if (characterName === '謎のアイドルX〔オルタ〕') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 50
        this.setPossessionSkills('(機械)特攻を付与(50%)')
      } else if (characterName === 'ドラコー') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 40
        this.setPossessionSkills('(竜・ローマ)特攻を付与(40%)')
      } else if (characterName === '水着宇津見エリセ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 35
        this.setPossessionSkills('(サーヴァント)特攻を付与(35%)')
      } else if (characterName === 'ネロ〔ブライド〕') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(天属性)特攻を付与(30%)')
      } else if (characterName === 'シャルルマーニュ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(魔性)特攻を付与(30%)')
      } else if (characterName === 'ヴリトラ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(神性)特攻を付与(30%)')
      } else if (characterName === '宇津見エリセ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(サーヴァント)特攻を付与(30%)')
      } else if (characterName === 'イヴァン雷帝') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(秩序・混沌)特攻を付与(30%)')
      } else if (characterName === '紫式部') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(魔性)特攻を付与(30%)')
      } else if (characterName === '水着武則天') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(死霊)特攻を付与(30%)')
      } else if (characterName === 'ヘシアン･ロボ') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(人属性)特攻を付与(30%)')
      } else if (characterName === '沖田総司〔オルタ〕') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(天属性)特攻を付与(30%)')
      } else if (characterName === 'バゼット') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(キャスター)特攻を付与(30%)')
      } else if (characterName === '望月千代女') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(魔性・呪い)特攻を付与(魔性30%・呪い20%)')
      } else if (characterName === '燕青') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(秩序・悪)特攻を付与(30%)')
      } else if (characterName === 'アルトリア〔ランサーオルタ〕') {
        if (this.isActiveSpecialAtkBuff === true) this.sAtkBuff += 30
        this.setPossessionSkills('(秩序・善)特攻を付与(30%)')
      } else if (characterName === '水着カーマ') {
        this.setPossessionSkills(
          '愛炎特攻を付与<愛炎の数だけ威力アップ>(3T/10×n%/最大10個)'
        )
      }
    },
    setPossessionSkills(description) {
      if (
        !this.possessionSkills.some(
          (possessionSkill) => possessionSkill.description === description
        )
      ) {
        this.possessionSkills.push({
          description
        })
      }
    }
  }
}
