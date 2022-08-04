export default {
  methods: {
    setClassSkillBusterBuff(character) {
      if (
        character.name === '水着清姫' ||
        character.name === 'カイニス' ||
        character.name === '源頼光' ||
        character.name === 'アルジュナ〔オルタ〕' ||
        character.name === 'ペンテシレイア' ||
        character.name === '水着ジャンヌ〔オルタ〕' ||
        character.name === '清姫' ||
        character.name === 'スパルタクス'
      ) {
        // 狂化[EX]
        this.cardBuff = 12
        this.classSkills.push({
          name: '狂化[EX]',
          description: 'Buster性能UP(12%)'
        })
      } else if (character.name === '伊吹童子') {
        // 竜種[EX]
        this.cardBuff = 12
        this.classSkills.push({
          name: '竜種[EX]',
          description: 'Buster性能UP(12%)'
        })
      } else if (
        character.name === 'バーゲスト' ||
        character.name === 'キングプロテア'
      ) {
        // 狂化[A+]
        this.cardBuff = 11
        this.classSkills.push({
          name: '狂化[A+]',
          description: 'Buster性能UP(11%)'
        })
      } else if (
        character.name === '鬼女紅葉' ||
        character.name === '呂布奉先'
      ) {
        // 狂化[A]
        this.cardBuff = 10
        this.classSkills.push({
          name: '狂化[A]',
          description: 'Buster性能UP(10%)'
        })
      } else if (character.name === 'ロムルス＝クィリヌス') {
        // 主神の神核[B+]
        this.cardBuff = 9
        this.classSkills.push({
          name: '主神の神核[B+]',
          description: 'Buster性能UP(9%)'
        })
      } else if (character.name === 'アビゲイル〔夏〕') {
        // 狂気[B+]
        this.cardBuff = 9
        this.classSkills.push({
          name: '狂気[B+]',
          description: 'Buster性能UP(9%)'
        })
      } else if (
        character.name === 'モルガン' ||
        character.name === 'ヘラクレス' ||
        character.name === '茨木童子' ||
        character.name === 'ダレイオス三世' ||
        character.name === 'エイリーク'
      ) {
        // 狂化[B]
        this.cardBuff = 8
        this.classSkills.push({
          name: '狂化[B]',
          description: 'Buster性能UP(8%)'
        })
      } else if (character.name === 'アビゲイル') {
        // 狂気[B]
        this.cardBuff = 8
        this.classSkills.push({
          name: '狂気[B]',
          description: 'Buster性能UP(8%)'
        })
      } else if (character.name === 'クーフーリン〔オルタ〕') {
        // 狂化[EX] (C相当)
        this.cardBuff = 6
        this.classSkills.push({
          name: '狂化[EX] (C相当)',
          description: 'Buster性能UP(6%)'
        })
      } else if (
        character.name === '水着源頼光' ||
        character.name === '水着織田信長'
      ) {
        // 狂化[C]
        this.cardBuff = 6
        this.classSkills.push({
          name: '狂化[C]',
          description: 'Buster性能UP(6%)'
        })
      } else if (character.name === '土方歳三') {
        // 狂化[D+]
        this.cardBuff = 5
        this.classSkills.push({
          name: '狂化[D+]',
          description: 'Buster性能UP(5%)'
        })
      } else if (character.name === 'アシュヴァッターマン') {
        // 憤怒の化身[EX]
        this.cardBuff = 5
        this.classSkills.push({
          name: '憤怒の化身[EX]',
          description: 'Buster性能UP(5%)'
        })
      } else if (
        character.name === '水着茨木童子' ||
        character.name === '森長可' ||
        character.name === 'バニヤン'
      ) {
        // 狂化[D]
        this.cardBuff = 4
        this.classSkills.push({
          name: '狂化[D]',
          description: 'Buster性能UP(4%)'
        })
      } else if (character.name === '水着ブリュンヒルデ') {
        // 狂化[D-]
        this.cardBuff = 3.5
        this.classSkills.push({
          name: '狂化[D-]',
          description: 'Buster性能UP(3.5%)'
        })
      } else if (character.name === '茶々') {
        // 狂化[E+]
        this.cardBuff = 3
        this.classSkills.push({
          name: '狂化[E+]',
          description: 'Buster性能UP(3%)'
        })
      } else if (
        character.name === '巴御前' ||
        character.name === 'ジャガーマン' ||
        character.name === '坂田金時'
      ) {
        // 狂化[E]
        this.cardBuff = 2
        this.classSkills.push({
          name: '狂化[E]',
          description: 'Buster性能UP(2%)'
        })
      } else if (character.name === 'ベオウルフ') {
        // 狂化[E-]
        this.cardBuff = 1
        this.classSkills.push({
          name: '狂化[E-]',
          description: 'Buster性能UP(1%)'
        })
      } else if (character.name === 'アルクェイド') {
        // 原初の一[D]
        this.cardBuff = 30
        this.classSkills.push({
          name: '原初の一[D]',
          description: 'Buster性能UP(30%)'
        })
      }
    }
  }
}
