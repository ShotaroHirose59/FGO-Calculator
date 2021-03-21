<template>
  <div>
    <div class="balloon1 ml-4">
      <p>{{ speechBubble }}</p>
    </div>
    <v-img :src="image_src" max-width="180px" class="ml-4"></v-img>
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
    // ダメージ結果や選択されたキャラクターによって吹き出しのセリフを出力
    speechBubble: {
      get() {
        switch (this.characterName) {
          case 'ジャンヌ（オルタ）':
            return '『吼え立てよ、我が憤怒』！'
          case '水着ジャンヌ（オルタ）':
            return '『焼却天理・鏖殺竜』！'
          case '水着ジャンヌ':
            return 'ちっ…アンタも水着なのね'
          case 'ジャンヌサンタリリィ':
            return 'アンタは冬までおとなしくしてなさい'
          case 'アルトリア (オルタ)':
            return '世界最高にいけ好かないわね'
          case 'アルトリア（サンタオルタ）':
            return 'なんでサンタの格好なのよ！'
          case '水着アルトリア（オルタ）':
            return 'メイドは部屋の掃除でもしてくれる？'
          case 'ジル・ド・レェ（キャスター）':
            return 'あら、ジルもいたのね。'
        }
        if (this.averageDamage >= 1000000) {
          return 'ちょ、それ本当！？'
        } else if (this.averageDamage >= 500000) {
          return 'これは相当ね…！'
        } else if (this.averageDamage >= 300000) {
          return '上等ね！ブッ込むわよ！'
        } else if (this.averageDamage >= 200000) {
          return 'なかなかやるじゃない'
        } else if (this.averageDamage >= 100000) {
          return 'まあまあね'
        } else if (this.averageDamage >= 10000) {
          return 'スキルで火力が上がるわ'
        } else {
          return '計算してみなさいよ' // default
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
  max-width: 72%;
  color: #555;
  font-size: 16px;
  background: #e0edff;
  border-radius: 15px;
}
@media screen and (max-width: 768px) {
  .balloon1 {
    max-width: 96%;
  }
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
