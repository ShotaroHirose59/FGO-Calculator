<template>
  <div class="balloon-set-box left">
    <div class="icon-box">
      <v-img :src="image_src" max-width="180px"></v-img>
    </div>
    <!-- <div class="balloon">
      <p>{{ speechBubble }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    characterName: {
      type: String,
      required: true
    },
    totalAcquisitionAmount: {
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
          case '水着アルトリア〔オルタ〕':
            return '食べたアイスの数など覚えていない'
          case '水着アルトリア':
            return 'あの英霊はどこのどなた様だ'
          case 'アタランテ〔オルタ〕':
            return 'ギリシャの狩人がまっくろけ、…あ'
          case 'エミヤ':
            return 'ついて来れるか？'
          case 'エミヤ〔オルタ〕':
            return '私のジャンクフードロードについて来れるか？'
          case 'ダヴィンチ（ライダー）':
            return '味方全体のNPを+20だ'
          case '両儀式（セイバー）':
            return '味方全体のNPを+10だ'
          case 'パールヴァティー':
            return '味方全体のNPを+10~30だ'
          case 'BB':
            return '味方全体のNPを+20だ'
          case 'メディア':
            return '自身のNPを20~100リチャージだ'
        }
        if (this.totalAcquisitionAmount >= 100) {
          return '『約束された勝利の剣』！！'
        } else if (this.totalAcquisitionAmount >= 70) {
          return '褒めてやる。良い数値だ'
        } else if (this.totalAcquisitionAmount >= 50) {
          return '連発できそうだな。'
        } else if (this.totalAcquisitionAmount >= 30) {
          return 'オーバーキルで数値が伸びるぞ'
        } else if (this.totalAcquisitionAmount >= 20) {
          return 'スキルで数値を伸ばせ。'
        } else if (this.totalAcquisitionAmount >= 10) {
          return '張り合いのない。'
        } else {
          return 'いい機会だ、教育してやる' // default
        }
      }
    }
  }
}
</script>

<style scoped>
.balloon-set-box {
  display: flex;
  flex-wrap: wrap;
}
.balloon-set-box.left {
  /* 左 */
  flex-direction: row;
}
.balloon {
  position: relative; /* 三角の位置を固定するために設定 */
  display: inline-block;
  max-width: 160px;
  max-height: 64px;
  margin: 16px; /* 上 左右 下のマージン */
  padding: 8px 15px; /* ふきだし内の余白 */
  color: #555;
  font-size: 16px;
  background: #f0f0f0; /* 背景色 */
  text-align: left; /* テキストの揃え */
  border-radius: 20px;
}
.balloon::after {
  content: '';
  border: 14px solid transparent;
  border-top-color: #f0f0f0;
  position: absolute;
  top: 0;
}
.left .balloon::after {
  /* 左側からの三角の位置 */
  left: -10px;
}
</style>
