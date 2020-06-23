<template>
  <v-row no-gutters scrollable>
    <v-col cols="12" sm="6" md="6" class="text-center">
      <h1 class="display-3 font-weight-thin" style="font-size: 48px">
        404 Not Found
      </h1>
      <p class="mt-2">お探しのページが見つかりませんでした。</p>
      <p>URLにお間違いがないか再度ご確認ください。</p>
      <v-btn color="mt-8 mb-8" :to="{ name: 'top' }">
        <v-icon color="purple lighten-1">mdi-exit-run</v-icon>トップページに戻る
      </v-btn>
    </v-col>

    <v-col cols="12" sm="3" md="6">
      <div class="balloon-set-box left">
        <div class="balloon1 ml-12">
          <p>
            すまないマスター。<br />
            一度トップページに戻って欲しい。
          </p>
        </div>
        <v-img :src="image_src" max-width="280px" class="ml-8"></v-img>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      image_src: require('assets/altria.png')
    }
  }
}
</script>

<style scoped>
.top-title {
  font-family: 'Hiragino Kaku Gothic Pro', 'ヒラギノ角ゴ Pro W3', 'メイリオ',
    Meiryo, 'ＭＳ Ｐゴシック', sans-serif;
}
.city {
  opacity: 1;
}
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
