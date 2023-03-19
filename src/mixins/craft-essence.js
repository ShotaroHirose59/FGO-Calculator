const craftEssences = {
  バーサーカー: [
    '指定なし',
    '黒聖杯 Lv.100',
    '黒聖杯 Lv.20',
    '白聖杯 Lv.100',
    '幻想の姫 Lv.100',
    '幻想の姫 Lv.20'
  ],
  default: ['指定なし', '黒聖杯 Lv.100', '黒聖杯 Lv.20', '白聖杯 Lv.100']
}

const CRAFT_ESSENCE_STATS = {
  '黒聖杯 Lv.100': { dressAtk: 2400, dressNpBuff: 80 },
  '黒聖杯 Lv.20': { dressAtk: 943, dressNpBuff: 60 },
  '白聖杯 Lv.100': { dressAtk: 2000, dressNpBuff: 50 },
  '幻想の姫 Lv.100': { dressAtk: 2000, dressNpBuff: 80 },
  '幻想の姫 Lv.20': { dressAtk: 786, dressNpBuff: 60 },
  指定なし: { dressAtk: 0, dressNpBuff: 0 }
}

export default {
  data() {
    return {
      craftEssenceStats: CRAFT_ESSENCE_STATS
    }
  },
  computed: {
    selectableCraftEssences() {
      return craftEssences[this.characterClass] || craftEssences.default
    }
  },
  watch: {
    craftEssence() {
      if (this.craftEssence in this.craftEssenceStats) {
        const stats = this.craftEssenceStats[this.craftEssence]
        this.dressAtk = stats.dressAtk
        this.dressNpBuff = stats.dressNpBuff
      } else {
        this.dressAtk = 0
        this.dressNpBuff = 0
      }
    },
    dressNpBuff() {
      this.dressNpBuffHint = this.dressNpBuff > 0 ? `+${this.dressNpBuff}` : ''
    }
  },
  methods: {
    checkCraftEssence(characterClass) {
      const berserkerOnlyCraftEssences = ['幻想の姫 Lv.100', '幻想の姫 Lv.20']
      if (
        berserkerOnlyCraftEssences.includes(this.craftEssence) &&
        characterClass !== 'バーサーカー'
      ) {
        this.craftEssence = '指定なし'
      }
    }
  }
}
