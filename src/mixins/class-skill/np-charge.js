export default {
  methods: {
    // 毎ターンNP獲得
    // 蘭丸はarts-buffで対応
    setClassSkillNpchargeEveryTurn(character) {
      if (character.name === '水着宇津見エリセ') {
        this.classSkills.push({
          name: '自己回復(魔力) [EX]',
          description: '自身に毎ターンNP獲得を付与(4.2%)'
        })
      } else if (character.name === '水着カーマ') {
        this.classSkills.push({
          name: '自己回復(魔力) [A]',
          description: '自身に毎ターンNP獲得を付与(3.8%)'
        })
      } else if (
        character.name === 'スペースイシュタル' ||
        character.name === 'ヘシアン･ロボ'
      ) {
        this.classSkills.push({
          name: '自己回復(魔力) [B]',
          description: '自身に毎ターンNP獲得を付与(3.5%)'
        })
      } else if (character.name === 'サリエリ') {
        this.classSkills.push({
          name: '自己回復(魔力) [C]',
          description: '自身に毎ターンNP獲得を付与(3.3%)'
        })
      } else if (
        character.name === 'ディオスクロイ' ||
        character.name === '巌窟王' ||
        character.name === '平景清'
      ) {
        this.classSkills.push({
          name: '自己回復(魔力) [D]',
          description: '自身に毎ターンNP獲得を付与(3%)'
        })
      } else if (character.name === '水着イリヤ') {
        this.classSkills.push({
          name: '無限の魔力供給 [C]',
          description: '自身に毎ターンNP獲得を付与(3%)'
        })
      } else if (character.name === 'アンリマユ') {
        this.classSkills.push({
          name: '自己回復(魔力) [E]',
          description: 'NP獲得量アップ(2%)'
        })
      }
    }
  }
}
