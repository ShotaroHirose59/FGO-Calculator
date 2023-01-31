export default {
  methods: {
    setNpSkillNpAcquisitionBuff(character) {
      if (character.name === 'トラロック') {
        this.npAcquisitionBuff += 20
        this.npSkills.push({ description: 'NP獲得量アップ(20%)' })
      }
    }
  }
}
