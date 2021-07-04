<template>
  <v-row no-gutters scrollable>
    <client-only>
      <v-col v-if="$vuetify.breakpoint.xs" cols="6" class="city mb-8">
        <h1 class="top-title" style="font-size: 48px">
          FGO<br />
          Calculator
        </h1>
      </v-col>

      <v-col v-if="$vuetify.breakpoint.xs" cols="3">
        <v-img :src="image_src" max-width="88"></v-img>
      </v-col>

      <v-col v-if="$vuetify.breakpoint.xs" cols="3">
        <v-img :src="image_src2" max-width="88"></v-img>
      </v-col>

      <v-col v-if="!$vuetify.breakpoint.xs" sm="4" md="4">
        <v-img :src="image_src" max-width="448"></v-img>
      </v-col>

      <v-col
        v-if="!$vuetify.breakpoint.xs"
        sm="4"
        md="4"
        class="text-center align-self-center city"
      >
        <h1 class="top-title text-gradient" style="font-size: 70px">
          FGO Calculator
        </h1>
      </v-col>

      <v-col v-if="!$vuetify.breakpoint.xs" sm="4" md="4">
        <v-img :src="image_src2" max-width="448"></v-img>
      </v-col>
    </client-only>

    <v-col cols="12" sm="12" md="4">
      <v-card :to="{ name: 'npatk-calculation' }">
        <v-card-title class="mb-2">
          宝具ダメージ 計算
          <v-spacer />
          <v-icon>mdi-calculator</v-icon>
          <v-icon>mdi-sword-cross</v-icon>
        </v-card-title>
        <v-card-subtitle>宝具ダメージを計算できます。</v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="12" sm="12" md="4">
      <v-card :to="{ name: 'npaquisition-calculation' }">
        <v-card-title class="mb-2">
          宝具NP獲得 計算
          <v-spacer />
          <v-icon>mdi-calculator</v-icon>
          <v-icon>mdi-gauge-full</v-icon>
        </v-card-title>
        <v-card-subtitle>
          宝具のNP獲得量を計算できます。
        </v-card-subtitle>
      </v-card>
    </v-col>

    <v-col cols="12" sm="12" md="4">
      <v-card :to="{ name: 'questionnaire' }">
        <v-card-title class="mb-2">
          1周年アンケート
          <v-spacer />
          <v-icon>mdi-clipboard-text-search-outline</v-icon>
        </v-card-title>
        <v-card-subtitle
          >アンケートにご協力をお願いいたします。</v-card-subtitle
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      image_src: require('assets/jeannearuta.png'),
      image_src2: require('assets/altria.png')
    }
  },
  head() {
    return {
      titleTemplate: null,
      title: 'FGO Calculator ~Wオルタと計算~'
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
  opacity: 0.9;
}
.v-card {
  margin: 16px;
}
.v-icon {
  color: #dc5eba;
  font-size: 32px;
}
.text-gradient {
  background: linear-gradient(
    270.97deg,
    #ffe580 -21.36%,
    #ff7571 -2.45%,
    #ea5dad 26.84%,
    #c2a0fd 64.15%,
    #3bf0e4 108.29%,
    #b2f4b6 159.03%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
.v-card:hover {
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  border-style: outset;
}
</style>
