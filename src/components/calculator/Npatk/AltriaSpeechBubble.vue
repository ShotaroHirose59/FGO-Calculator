<template>
  <div>
    <div class="balloon1">
      <p>{{ speechBubble }}</p>
    </div>
    <v-img :src="image_src" max-width="160px"></v-img>
  </div>
</template>

<script>
export default {
  props: {
    characterName: {
      type: String,
      required: true
    },
    averageDamage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      image_src: require('assets/altria.png')
    }
  },
  computed: {
    // ダメージ結果や選択されたキャラクターによって吹き出しのセリフを出力
    speechBubble: {
      get() {
        switch (this.characterName) {
          case 'アルトリア':
            return '……'
          case 'アルトリア〔オルタ〕':
            return '『約束された勝利の剣』！'
          case 'アルトリア〔サンタオルタ〕':
            return '聖夜に沈め『約束された勝利の剣』！♪～♪～'
          case '水着アルトリア〔オルタ〕':
            return 'これが、夏のお手伝いさんだ！'
          case 'ジャンヌ〔オルタ〕':
            return 'ほぉ……串刺し女を選ぶか'
          case '水着ジャンヌ〔オルタ〕':
            return 'この串刺し女は何故水着なんだ'
          case '水着アルトリア':
            return 'あの英霊はどこのどなた様だ'
          case 'アタランテ〔オルタ〕':
            return 'ギリシャの狩人がまっくろけ、…あ、いや。'
          case 'エミヤ〔オルタ〕':
            return '私のジャンクフードロードに付いて来れるか？'
          case '沖田総司〔オルタ〕':
            return 'オルタとは…一体…'
          case 'モリアーティ':
            return '近頃のイギリス紳士は棺桶を背負っているのか'
          case '水着ネロ':
            return '劇場女か。'
          case 'エリザベート〔ハロウィン〕':
            return '夕食はドラゴンステーキにするとしよう'
        }
        if (this.averageDamage >= 1000000) {
          return '火力こそ正義。蹂躙してやれ'
        } else if (this.averageDamage >= 500000) {
          return '良い数値だ 褒めてやる。'
        } else if (this.averageDamage >= 300000) {
          return 'よし。上等だ'
        } else if (this.averageDamage >= 200000) {
          return 'まだ行けるはずだぞ？'
        } else if (this.averageDamage >= 100000) {
          return '足りん。もっとだ'
        } else if (this.averageDamage >= 10000) {
          return 'スキルを使ってダメージを伸ばせ'
        } else {
          return '計算するぞ、マスター' // default
        }
      }
    }
  }
}
</script>

<style scoped>
.balloon1 {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5em;
  padding: 7px 14px;
  min-width: 120px;
  max-width: 100%;
  color: #555;
  font-size: 16px;
  background: #e0edff;
  border-radius: 15px;
}

.balloon1:before {
  content: '';
  position: absolute;
  top: 95%;
  left: 30%;
  margin-left: -15px;
  border: 15px solid transparent;
  border-top: 15px solid #e0edff;
}

.balloon1 p {
  margin: 0;
  padding: 0;
}
</style>
