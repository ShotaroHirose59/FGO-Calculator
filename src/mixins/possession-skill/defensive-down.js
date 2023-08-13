export default {
  methods: {
    // 防御力ダウン(攻撃力UPバフ)
    setPossessionSkillDefensiveDown(character) {
      if (character.name === 'アビゲイル〔夏〕') {
        this.atkBuff += 70
        this.possessionSkills.push({ description: '防御力ダウン(70%)' })
      } else if (
        character.name === '水着玉藻' ||
        character.name === '水着清姫' ||
        character.name === '女王メイヴ' ||
        character.name === 'マルタ' ||
        character.name === '水着カーミラ' ||
        character.name === '水着紫式部' ||
        character.name === '紫式部' ||
        character.name === '武則天' ||
        character.name === '水着宮本武蔵' ||
        character.name === 'モルガン' ||
        character.name === 'エイリーク' ||
        character.name === 'サリエリ' ||
        character.name === '殺生院キアラ' ||
        character.name === '蘆屋道満' ||
        character.name === 'フラン'
      ) {
        this.atkBuff += 30
        this.possessionSkills.push({ description: '防御力ダウン(30%)' })
      } else if (character.name === '清姫') {
        this.atkBuff += 24
        this.possessionSkills.push({ description: '防御力ダウン(24%)' })
      } else if (
        character.name === '紅閻魔' ||
        character.name === 'アシュヴァッターマン' ||
        character.name === 'エリザベート' ||
        character.name === 'エウロペ' ||
        character.name === 'キルケー' ||
        character.name === '謎のヒロインX' ||
        character.name === '酒呑童子' ||
        character.name === 'カーミラ' ||
        character.name === '風魔小太郎' ||
        character.name === 'クリームヒルト' ||
        character.name === 'バニヤン' ||
        character.name === 'カレン' ||
        character.name === '謎の蘭丸X' ||
        character.name === '水着殺生院キアラ' ||
        character.name === 'アビゲイル' ||
        character.name === '葛飾北斎' ||
        character.name === '楊貴妃' ||
        character.name === 'アルクェイド' ||
        character.name === 'ノクナレア'
      ) {
        this.atkBuff += 20
        this.possessionSkills.push({ description: '防御力ダウン(20%)' })
      }
    }
  }
}
