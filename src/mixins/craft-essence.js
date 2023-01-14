export default {
  computed: {
    selectableCraftEssences() {
      if (this.characterClass === 'バーサーカー') {
        return [
          '指定なし',
          '黒聖杯 Lv.100',
          '黒聖杯 Lv.20',
          '白聖杯 Lv.100',
          '幻想の姫 Lv.100',
          '幻想の姫 Lv.20'
        ]
      } else {
        return ['指定なし', '黒聖杯 Lv.100', '黒聖杯 Lv.20', '白聖杯 Lv.100']
      }
    }
  },
  watch: {
    craftEssence() {
      switch (this.craftEssence) {
        case '黒聖杯 Lv.100':
          this.dressAtk = 2400
          this.dressNpBuff = 80
          break
        case '黒聖杯 Lv.20':
          this.dressAtk = 943
          this.dressNpBuff = 60
          break
        case '白聖杯 Lv.100':
          this.dressAtk = 2000
          this.dressNpBuff = 50
          break
        case '幻想の姫 Lv.100':
          this.dressAtk = 2000
          this.dressNpBuff = 80
          break
        case '幻想の姫 Lv.20':
          this.dressAtk = 786
          this.dressNpBuff = 60
          break
        default:
          this.dressAtk = 0
          this.dressNpBuff = 0
      }
    },
    dressNpBuff() {
      if (this.dressNpBuff > 0) {
        this.dressNpBuffHint = `+${this.dressNpBuff}`
      } else {
        this.dressNpBuffHint = ''
      }
    }
  },
  methods: {
    checkCraftEssence(characterClass) {
      if (
        (this.craftEssence === '幻想の姫 Lv.100' ||
          this.craftEssence === '幻想の姫 Lv.20') &&
        characterClass !== 'バーサーカー'
      ) {
        this.craftEssence = '指定なし'
      }
    }
  }
}
