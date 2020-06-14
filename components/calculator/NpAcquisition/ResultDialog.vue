<template>
  <v-dialog v-model="isResultDisplay" scrollable max-width="700px">
    <v-card>
      <v-card-title class="headline">
        <v-img :src="image_src" max-width="80px" class="mr-5"></v-img>
        計算方法
        <v-spacer />
      </v-card-title>
      <v-divider />
      <v-card-text>
        <h3 class="mt-3 mb-1">
          計算式
        </h3>
        <p>
          獲得できるNP量 ＝ <br />
          NPレート × (カード補正 × カードバフ補正) × 宝具のHit数 ×
          NP獲得量バフ補正 × オーバーキルボーナス(1.5倍) × 敵クラス補正 × 敵の数
        </p>
        <h3 class="mt-5 mb-1">
          計算項目の説明
        </h3>
        <ul class="mb-3">
          <li class="mb-1">
            NPレート ・・・ 個々のサーヴァントに設定されている数値
          </li>
          <li class="mb-1">
            カード補正 ・・・ 宝具タイプで数値が決まる (Arts 3、Quick 1、Buster
            0)
          </li>
          <li class="mb-1">
            カードバフ補正 ・・・Arts性能〜%UPなど。同系統のバフは全て加算。<br />
            (例) Arts性能30%UP、Arts性能50%UPを使用した場合は80%UPとなる。
          </li>
          <li>
            NP獲得量バフ補正 ・・・ NP獲得量〜%UPなど。同系統のバフは全て加算。
          </li>
          <li>
            敵クラス補正 ・・・ 敵のクラス別に入る補正値。<br />
            キャスターなら1.2と高くバーサーカーは0.8と低い
          </li>
        </ul>
      </v-card-text>
      <v-col style="text-align: right;">
        <v-btn
          color="red"
          text
          style="font-size: 16px;"
          @click="isResultDisplay = false"
        >
          Close
        </v-btn>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      image_src: require('assets/jeannearuta.png'),
      isResultDisplay: false
    }
  }
}
</script>
