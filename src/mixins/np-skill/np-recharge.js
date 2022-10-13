export default {
  methods: {
    // NPリチャージ
    setNpSkillNpRecharge(character) {
      if (
        character.name === 'ダヴィンチ（ライダー）' ||
        character.name === 'BB' ||
        character.name === 'ボイジャー'
      ) {
        this.npRecharge += 20
        this.npSkills.push({ description: 'NPチャージ(20%)' })
      } else if (
        character.name === '両儀式（セイバー）' ||
        character.name === '水着アルトリア〔オルタ〕'
      ) {
        this.npRecharge += 10
        this.npSkills.push({ description: 'NPチャージ(10%)' })
      }
    }
  }
}
