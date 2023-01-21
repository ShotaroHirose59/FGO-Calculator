export default {
  methods: {
    // 特攻バフ
    // 宝具、OCバフで重なる可能性アリ
    setPossessionSkillSAtkBuff(character) {
      if (character.name === '平景清') {
        // this.sAtkBuff += 200
        this.possessionSkills.push({ description: '(源氏)特攻を付与(200%)' })
      } else if (character.name === 'アーサー〔プロトタイプ〕') {
        // this.sAtkBuff += 100
        this.possessionSkills.push({ description: '(超巨大)特攻を付与(100%)' })
      } else if (character.name === 'オリオン') {
        // this.sAtkBuff += 100
        this.possessionSkills.push({ description: '(男性)特攻を付与(100%)' })
      } else if (character.name === '織田信長') {
        // this.sAtkBuff += 100
        this.possessionSkills.push({ description: '(神性)特攻を付与(100%)' })
      } else if (character.name === 'スカサハ') {
        // this.sAtkBuff += 100
        this.possessionSkills.push({
          description: '(神性・死霊)特攻を付与(100%)'
        })
      } else if (character.name === 'クーフーリン〔プロトタイプ〕') {
        // this.sAtkBuff += 100
        this.possessionSkills.push({ description: '(猛獣)特攻を付与(100%)' })
      } else if (character.name === 'ジーク') {
        // this.sAtkBuff += 100
        this.possessionSkills.push({ description: '(竜)特攻を付与(100%)' })
      } else if (character.name === 'グレイ') {
        // this.sAtkBuff += 100
        this.possessionSkills.push({ description: '(死霊)特攻を付与(100%)' })
      } else if (character.name === '岡田以蔵') {
        this.sAtkBuff += 100
        this.possessionSkills.push({ description: '(人型)特攻を付与(100%)' })
      } else if (character.name === 'ペンテシレイア') {
        // this.sAtkBuff += 100
        this.possessionSkills.push({
          description: '(ギリシャ神話系男性)特攻を付与(100%)'
        })
      } else if (character.name === '水着マルタ') {
        // this.sAtkBuff += 100
        this.possessionSkills.push({
          description: '(神性・悪魔・死霊)特攻を付与(100%)'
        })
      } else if (
        character.name === 'ジークフリート' ||
        character.name === 'ニキチッチ'
      ) {
        // this.sAtkBuff += 80
        this.possessionSkills.push({ description: '(竜)特攻を付与(80%)' })
      } else if (character.name === 'サンソン') {
        // this.sAtkBuff += 60
        this.possessionSkills.push({ description: '(悪・人間)特攻を付与(60%)' })
      } else if (character.name === '伊吹童子') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(死霊)特攻を付与(50%)' })
      } else if (character.name === 'アルトリア（ランサー）') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(混沌・悪)特攻を付与(50%)' })
      } else if (character.name === '哪吒') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(魔性)特攻を付与(50%)' })
      } else if (character.name === '太公望') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({
          description: '(神性・魔性)特攻を付与(50%)'
        })
      } else if (character.name === 'エリザベート〔シンデレラ〕') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(猛獣)特攻を付与(50%)' })
      } else if (character.name === '酒呑童子（キャスター）') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(魔性)特攻を付与(50%)' })
      } else if (character.name === '謎のヒロインX') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(セイバー)特攻を付与(50%)' })
      } else if (character.name === '光のコヤンスカヤ') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({
          description: '(人間・人属性)特攻を付与(50%)'
        })
      } else if (character.name === '荊軻') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(王)特攻を付与(50%)' })
      } else if (character.name === '源頼光') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({
          description: '(魔性・天属性・地属性)特攻を付与(50%)'
        })
      } else if (character.name === 'アルジュナ〔オルタ〕') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(弱体)特攻を付与(50%)' })
      } else if (character.name === 'ベオウルフ') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(竜・巨人)特攻を付与(50%)' })
      } else if (character.name === 'サロメ') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({
          description: '(秩序かつ善)特攻を付与(50%)'
        })
      } else if (character.name === '壱与') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(神性)特攻を付与(50%)' })
      } else if (character.name === '魔王信長') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({
          description: '(炎上の時、天属性)特攻を付与(50%)'
        })
      } else if (character.name === 'クリームヒルト') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({
          description: '(混沌)特攻を付与(50%)'
        })
      } else if (character.name === 'ジナコ') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(秩序)特攻を付与(50%)' })
      } else if (character.name === 'ジャック・ド・モレー') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(呪い)特攻を付与(50%)' })
      } else if (character.name === '謎のヒロインXX') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({
          description: '(人類の脅威)特攻を付与(50%)'
        })
      } else if (character.name === '謎のアイドルX〔オルタ〕') {
        // this.sAtkBuff += 50
        this.possessionSkills.push({ description: '(機械)特攻を付与(50%)' })
      } else if (character.name === '水着宇津見エリセ') {
        // this.sAtkBuff += 35
        this.possessionSkills.push({
          description: '(サーヴァント)特攻を付与(35%)'
        })
      } else if (character.name === 'ネロ〔ブライド〕') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({ description: '(天属性)特攻を付与(30%)' })
      } else if (character.name === 'シャルルマーニュ') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({ description: '(魔性)特攻を付与(30%)' })
      } else if (character.name === 'ヴリトラ') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({ description: '(神性)特攻を付与(30%)' })
      } else if (character.name === '宇津見エリセ') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({
          description: '(サーヴァント)特攻を付与(30%)'
        })
      } else if (character.name === 'イヴァン雷帝') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({
          description: '(秩序・混沌)特攻を付与(30%)'
        })
      } else if (character.name === '紫式部') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({ description: '(魔性)特攻を付与(30%)' })
      } else if (character.name === '水着武則天') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({ description: '(死霊)特攻を付与(30%)' })
      } else if (character.name === 'ヘシアン･ロボ') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({ description: '(人属性)特攻を付与(30%)' })
      } else if (character.name === '沖田総司〔オルタ〕') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({ description: '(天属性)特攻を付与(30%)' })
      } else if (character.name === 'バゼット') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({
          description: '(キャスター)特攻を付与(30%)'
        })
      } else if (character.name === '望月千代女') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({
          description: '(魔性・呪い)特攻を付与(魔性30%・呪い20%)'
        })
      } else if (character.name === '燕青') {
        // this.sAtkBuff += 30
        this.possessionSkills.push({
          description: '(秩序・悪)特攻を付与(30%)'
        })
      }
    }
  }
}
