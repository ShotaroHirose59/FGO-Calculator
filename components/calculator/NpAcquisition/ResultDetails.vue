<template>
  <v-dialog v-model="isResultDetails" scrollable>
    <v-card>
      <v-card-title class="headline">
        漆黒の騎士王からアドバイス
        <v-spacer />
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-row no-gutters class="mt-2">
          <v-col cols="12" style="text-align: right;">
            <strong>NP {{ totalAcquisitionAmount }}％</strong>
            <v-progress-linear
              v-model="totalAcquisitionAmount"
              rounded
              color="yellow darken-2"
              height="10"
              reactive
            ></v-progress-linear>
            <div class="float-left mt-2">
              {{ characterName }} {{ servantNPType }}
            </div>
          </v-col>

          <v-col cols="12" class="mt-4">
            <div class="balloon1 ml-10">
              <p>{{ speechBubble }}</p>
            </div>
            <v-img :src="image_src" max-width="220px" class="ml-8"></v-img>
          </v-col>

          <h3 class="mt-3 mb-1">
            オーバーキルについて
          </h3>
          <p>
            オーバーキルHit数は敵を倒しきったタイミングを指す。
            (例）3Hitする宝具で2Hit目に敵を倒しきれば2Hitオーバーキルと表現し、数値も上昇する。
          </p>

          <v-col style="text-align: right;">
            <v-btn
              color="red"
              text
              style="font-size: 18px;"
              @click="isResultDetails = false"
            >
              Close
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
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
    },
    servantNPType: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      image_src: require('assets/altria.png'),
      isResultDetails: false
    }
  },
  computed: {
    // ダメージ結果や選択されたキャラクターによって吹き出しのセリフを出力
    speechBubble: {
      get() {
        switch (this.characterName) {
          case '水着アルトリア':
            return 'ところでマスター、あの英霊はどこのどなた様だ'
          case 'アタランテ（オルタ）':
            return 'ギリシャの狩人がまっくろけ、…あ、いや。'
          case 'エミヤ（オルタ）':
            return '私のジャンクフードロードに付いて来られるか？'
          case '水着アルトリア（オルタ）':
            return 'エンジンを回せ。処刑の時間だ'
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
          return '『約束された勝利の剣(エクスカリバー・モルガーン)』！！」'
        } else if (this.totalAcquisitionAmount >= 70) {
          return 'なかなかやるな。 誉れにするがいい'
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
