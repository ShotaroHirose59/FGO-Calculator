<template>
  <v-dialog v-model="isResultDisplay" scrollable max-width="800px">
    <v-card>
      <v-toolbar height="64px">
        <v-img :src="image_src" max-width="56px" class="mr-4"></v-img>
        <v-toolbar-title>計算方法</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <h3 class="mt-4 mb-2">
          計算式
        </h3>
        <p>
          獲得できるNP量 ＝ <br />
          NPレート × (カード補正 × カードバフ補正) × 宝具のHit数 ×
          NP獲得量バフ補正 × オーバーキルボーナス(1.5倍) × 敵クラス補正 × 敵の数
        </p>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          計算項目の説明
        </h3>
        <ul>
          <li class="mb-2">
            NPレート ・・・ 個々のサーヴァントに設定されている数値。
          </li>
          <li class="mb-2">
            カード補正 ・・・ 宝具タイプで数値が決まる (Arts 3、Quick 1、Buster
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
          style="font-size: 18px;"
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
