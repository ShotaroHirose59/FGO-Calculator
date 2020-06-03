<template>
  <div>
    <div class="balloon1">
      <p>{{ speechBubble }}</p>
    </div>
    <v-img :src="image_src" max-width="150px"></v-img>
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
      image_src: require('assets/jeannearuta.png')
    }
  },
  computed: {
    // ダメージ結果や選択されたキャラクターによって吹き出しのセリフを出力。
    speechBubble: {
      get() {
        if (this.characterName === 'ジャンヌ（オルタ）') {
          return '全ての邪悪をここに……！'
        }
        if (this.characterName === '水着ジャンヌ（オルタ）') {
          return '三つ首の黒竜よ、世界を喰らい尽くせ！'
        }
        if (this.characterName === '水着ジャンヌ') {
          return 'ちっ……アンタも水着なのね'
        }
        if (this.characterName === 'ジャンヌサンタリリィ') {
          return 'アンタは冬までおとなしくしてなさい。'
        }
        if (this.characterName === 'アルトリア (オルタ)') {
          return 'げぇ、世界最高にいけ好かないわね'
        }
        if (this.characterName === 'アルトリア（サンタオルタ）') {
          return 'ちょっ……なんでサンタの格好なのよ！'
        }
        if (this.characterName === '水着アルトリア（オルタ）') {
          return 'このメイドより私の方が火力出せるわよ'
        }
        if (this.characterName === 'ジル・ド・レェ（キャスター）') {
          return 'あら、ジルもいたのね。'
        }
        if (this.averageDamage >= 200000) {
          return 'なかなかやるじゃない'
        }
        if (this.averageDamage >= 100000) {
          return 'まあまあね'
        }
        if (this.averageDamage >= 10000) {
          return 'スキルで火力が上がるわ'
        } else {
          return '計算してみなさいよ'
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
  padding: 7px 10px;
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
  top: 100%;
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
