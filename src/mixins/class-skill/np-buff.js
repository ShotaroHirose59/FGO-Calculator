export default {
  methods: {
    setClassSkillNpBuff(character) {
      if (character.name === '光のコヤンスカヤ') {
        this.npBuff = 20
        this.classSkills.push({
          name: '[女神変生（銃）]',
          description: '宝具威力UP(20%)'
        })
      } else if (character.name === '水着殺生院キアラ') {
        this.npBuff = 12
        this.classSkills.push({
          name: '[異界作成]',
          description: '宝具威力UP(12%)'
        })
      } else if (character.name === 'ヘファイスティオン') {
        this.npBuff = 10
        this.classSkills.push({
          name: '[忘却無効]',
          description: '宝具威力UP(10%)'
        })
      } else if (character.name === 'モリアーティ（ルーラー）') {
        this.npBuff = 5
        this.classSkills.push({
          name: '陰謀作成[EX]',
          description: '宝具威力UP(5%)'
        })
      }
    }
  }
}
