<template>
  <v-dialog v-model="isResultDetails" scrollable>
    <v-card>
      <v-toolbar>
        <v-toolbar-title height="56px">漆黒の騎士王からの助言</v-toolbar-title>
      </v-toolbar>

      <v-card-text class="mt-2">
        <v-row no-gutters class="mt-2">
          <v-col cols="12" style="text-align: right;">
            <strong class="title">NP {{ totalAcquisitionAmount }}％</strong>
            <v-progress-linear
              :value="totalAcquisitionAmount"
              rounded
              color="yellow darken-2"
              height="10"
              reactive
            ></v-progress-linear>
            <div class="float-left mt-2">
              {{ characterName }} {{ servantNpType }}
            </div>
          </v-col>

          <v-col cols="12" class="mt-4">
            <div class="balloon1 ml-8">
              <p>{{ speechBubble }}</p>
            </div>
            <v-img :src="image_src" max-width="224px" class="ml-4"></v-img>
          </v-col>
        </v-row>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-1">
          計算式
        </h3>
        <p>
          獲得できるNP量 ＝ <br />
          NPレート × (カード補正 × カードバフ補正) × 宝具のHit数 ×
          NP獲得量バフ補正 × オーバーキルボーナス(1.5倍) × 敵クラス補正 × 敵の数
        </p>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-1">
          計算項目の説明
        </h3>
        <ul>
          <li class="mb-2">
            NPレート ・・・ 個々のサーヴァントに設定されている数値。
          </li>
          <li class="mb-2">
            カード補正 ・・・ 宝具タイプで数値が決まる。(Arts 3、Quick 1、Buster
            0)
          </li>
          <li class="mb-2">
            カードバフ補正 ・・・Arts性能〜%UPなど。同系統のバフは全て加算。<br />
            (例) Arts性能30%UP、Arts性能50%UPを使用した場合は80%UPとなる。
          </li>
          <li class="mb-2">
            NP獲得量バフ補正 ・・・ NP獲得量〜%UPなど。同系統のバフは全て加算。
          </li>
          <li class="mb-2">
            敵クラス補正 ・・・ 敵のクラス別に入る補正値。<br />
            キャスターなら1.2と高くバーサーカーは0.8と低い。
          </li>
        </ul>
      </v-card-text>
      <v-col style="text-align: right;">
        <v-btn
          color="red"
          text
          style="font-size: 16px;"
          @click="isResultDetails = false"
        >
          Close
        </v-btn>
      </v-col>
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
    servantNpType: {
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
          case '水着アルトリア〔オルタ〕':
            return '食べたアイスの数など覚えてはいない'
          case '水着アルトリア':
            return 'あの英霊はどこのどなた様だ'
          case 'アタランテ〔オルタ〕':
            return 'ギリシャの狩人がまっくろけ、…あ、いや。'
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
.balloon1 {
  position: relative;
  display: inline-block;
  margin-bottom: 1.5em;
  padding: 7px 10px;
  min-width: 100px;
  max-width: 72%;
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
