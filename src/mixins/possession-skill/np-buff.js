export default {
  methods: {
    // 宝具威力アップ
    setPossessionSkillNpBuff(character) {
      if (
        character.name === 'メカエリチャン' ||
        character.name === 'メカエリチャンⅡ号機'
      ) {
        this.npBuff += 60
        this.possessionSkills.push({ description: '宝具威力アップ(60%)' })
      } else if (
        character.name === 'エレナ' ||
        character.name === 'シャルロット・コルデー' ||
        character.name === '水着BB'
      ) {
        this.npBuff += 50
        this.possessionSkills.push({ description: '宝具威力アップ(50%)' })
      } else if (
        character.name === 'アルトリア' ||
        character.name === 'テスラ' ||
        character.name === 'アルテラ・ザ・サン〔タ〕' ||
        character.name === 'ナイチンゲール〔サンタ〕' ||
        character.name === 'メリュジーヌ' ||
        character.name === '水着茨木童子' ||
        character.name === 'ダヴィンチ（ライダー）' ||
        character.name === 'ダヴィンチ' ||
        character.name === '酒呑童子' ||
        character.name === 'フラン' ||
        character.name === '茨木童子' ||
        character.name === '呂布奉先' ||
        character.name === 'メルトリリス' ||
        character.name === '沖田総司〔オルタ〕' ||
        character.name === '太歳星君' ||
        character.name === 'ジナコ' ||
        character.name === 'アビゲイル' ||
        character.name === 'オベロン' ||
        character.name === 'ククルカン'
      ) {
        this.npBuff += 30
        this.possessionSkills.push({ description: '宝具威力アップ(30%)' })
      } else if (character.name === 'バベッジ') {
        this.npBuff += 25
        this.possessionSkills.push({ description: '宝具威力アップ(25%)' })
      } else if (
        character.name === 'アルテラ' ||
        character.name === 'ギルガメッシュ' ||
        character.name === '鈴鹿御前' ||
        character.name === '水着フラン' ||
        character.name === 'ベディヴィエール' ||
        character.name === 'アルジュナ' ||
        character.name === 'モリアーティ' ||
        character.name === '水着ジャンヌ' ||
        character.name === 'ナポレオン' ||
        character.name === '源為朝' ||
        character.name === '水着アナスタシア' ||
        character.name === 'カルナ' ||
        character.name === 'ヴリトラ' ||
        character.name === 'ヴラド三世（EXTRA）' ||
        character.name === 'ワルキューレ' ||
        character.name === 'パーシヴァル' ||
        character.name === 'ヘクトール' ||
        character.name === 'イスカンダル' ||
        character.name === '曲亭馬琴' ||
        character.name === '玄奘三蔵' ||
        character.name === 'エジソン' ||
        character.name === '水着シャルロット・コルデー' ||
        character.name === '紫式部' ||
        character.name === '水着ニトクリス' ||
        character.name === '水着カーマ' ||
        character.name === '水着沖田総司' ||
        character.name === 'ベオウルフ' ||
        character.name === '水着ダヴィンチ' ||
        character.name === 'スペースイシュタル' ||
        character.name === '水着殺生院キアラ' ||
        character.name === 'アルクェイド'
      ) {
        this.npBuff += 20
        this.possessionSkills.push({ description: '宝具威力アップ(20%)' })
      } else if (character.name === 'カエサル') {
        this.npBuff += 18
        this.possessionSkills.push({ description: '宝具威力アップ(18%)' })
      } else if (
        character.name === 'ドレイク' ||
        character.name === 'バーソロミュー'
      ) {
        this.npBuff += 17
        this.possessionSkills.push({ description: '宝具威力アップ(17%)' })
      } else if (character.name === 'ティーチ') {
        this.npBuff += 16
        this.possessionSkills.push({ description: '宝具威力アップ(16%)' })
      } else if (
        character.name === 'ディオスクロイ' ||
        character.name === 'ブリュンヒルデ' ||
        character.name === '太公望'
      ) {
        this.npBuff += 15
        this.possessionSkills.push({ description: '宝具威力アップ(15%)' })
      } else if (character.name === 'レジライ') {
        this.npBuff += 14
        this.possessionSkills.push({ description: '宝具威力アップ(14%)' })
      } else if (character.name === 'ネモ') {
        this.npBuff += 12
        this.possessionSkills.push({ description: '宝具威力アップ(12%)' })
      }
    }
  }
}
