const craftEssences = {
  バーサーカー: [
    '指定なし',
    '凸安息の館 Lv15',
    '凸安息の館 Lv100',
    '安息の館 Lv1',
    '凸黒聖杯 Lv.100',
    '黒聖杯 Lv.20',
    '凸白聖杯 Lv.100',
    '凸幻想の姫 Lv.100',
    '幻想の姫 Lv.20'
  ],
  default: [
    '指定なし',
    '凸安息の館 Lv15',
    '凸安息の館 Lv100',
    '安息の館 Lv1',
    '凸黒聖杯 Lv.100',
    '黒聖杯 Lv.20',
    '凸白聖杯 Lv.100'
  ]
}

const CRAFT_ESSENCE_STATS = {
  '凸安息の館 Lv15': {
    dressAtk: 355,
    dressNpBuff: 0,
    dressSatkBuff: 200,
    dressCardBuff: 0,
    dressNpAcquisitionBuff: 0
  },
  '凸安息の館 Lv100': {
    dressAtk: 1000,
    dressNpBuff: 0,
    dressSatkBuff: 200,
    dressCardBuff: 0,
    dressNpAcquisitionBuff: 0
  },
  '安息の館 Lv1': {
    dressAtk: 250,
    dressNpBuff: 0,
    dressSatkBuff: 100,
    dressCardBuff: 0,
    dressNpAcquisitionBuff: 0
  },
  '凸黒聖杯 Lv.100': {
    dressAtk: 2400,
    dressNpBuff: 80,
    dressSatkBuff: 0,
    dressCardBuff: 0,
    dressNpAcquisitionBuff: 0
  },
  '黒聖杯 Lv.20': {
    dressAtk: 943,
    dressNpBuff: 60,
    dressSatkBuff: 0,
    dressCardBuff: 0,
    dressNpAcquisitionBuff: 0
  },
  '凸白聖杯 Lv.100': {
    dressAtk: 2000,
    dressNpBuff: 50,
    dressSatkBuff: 0,
    dressCardBuff: 0,
    dressNpAcquisitionBuff: 0
  },
  '凸幻想の姫 Lv.100': {
    dressAtk: 2000,
    dressNpBuff: 80,
    dressSatkBuff: 0,
    dressCardBuff: 0,
    dressNpAcquisitionBuff: 0
  },
  '幻想の姫 Lv.20': {
    dressAtk: 786,
    dressNpBuff: 60,
    dressSatkBuff: 0,
    dressCardBuff: 0,
    dressNpAcquisitionBuff: 0
  },
  指定なし: {
    dressAtk: 0,
    dressNpBuff: 0,
    dressSatkBuff: 0,
    dressCardBuff: 0,
    dressNpAcquisitionBuff: 0
  }
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
        this.dressSatkBuff = stats.dressSatkBuff
        this.dressCardBuff = stats.dressCardBuff
        this.dressNpAcquisitionBuff = stats.dressNpAcquisitionBuff
        // this.updateDressCardBuff()
      } else {
        this.dressAtk = 0
        this.dressNpBuff = 0
        this.dressSatkBuff = 0
        this.dressCardBuff = 0
        this.dressNpAcquisitionBuff = 0
      }
    },
    dressNpBuff() {
      this.dressNpBuffHint = this.dressNpBuff > 0 ? `+${this.dressNpBuff}` : ''
    },
    dressSatkBuff() {
      this.dressSatkBuffHint =
        this.dressSatkBuff > 0 ? `+${this.dressSatkBuff}` : ''
    },
    dressCardBuff() {
      this.dressCardBuffHint =
        this.dressCardBuff > 0 ? `+${this.dressCardBuff}` : ''
    },
    dressNpAcquisitionBuff() {
      this.dressNpAcquisitionBuffHint =
        this.dressNpAcquisitionBuff > 0 ? `+${this.dressNpAcquisitionBuff}` : ''
    }
  },
  methods: {
    checkCraftEssence(characterClass) {
      const berserkerOnlyCraftEssences = ['凸幻想の姫 Lv.100', '幻想の姫 Lv.20']
      if (
        berserkerOnlyCraftEssences.includes(this.craftEssence) &&
        characterClass !== 'バーサーカー'
      ) {
        this.craftEssence = '指定なし'
      }
    }
    // NOTE: 揺籃の歌
    // updateDressCardBuff() {
    //   const cesToCheck = ['凸揺籃の歌 Lv15', '凸揺籃の歌 Lv100', '揺籃の歌 Lv1']

    //   if (cesToCheck.includes(this.craftEssence)) {
    //     if (this.servantNpType === 'Quick') {
    //       this.dressCardBuff = 0
    //     } else {
    //       const stats = this.craftEssenceStats[this.craftEssence]
    //       this.dressCardBuff = stats.dressCardBuff
    //     }
    //   }
    // }
  }
}
