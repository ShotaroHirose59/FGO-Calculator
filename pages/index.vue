<template>
  <v-row no-gutters scrollable>
    <v-col v-if="$vuetify.breakpoint.xs" cols="6" class="city mb-8">
      <h1 style="font-size: 56px">
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
      <v-img :src="image_src" max-width="480"></v-img>
    </v-col>

    <v-col
      v-if="!$vuetify.breakpoint.xs"
      sm="4"
      md="4"
      class="text-center align-self-center city"
    >
      <h1 style="font-size: 72px">
        FGO Calculator
      </h1>
    </v-col>

    <v-col v-if="!$vuetify.breakpoint.xs" sm="4" md="4">
      <v-img :src="image_src2" max-width="480"></v-img>
    </v-col>

    <v-col cols="12" sm="12" md="4">
      <v-hover v-slot:default="{ hover }">
        <v-card
          v-ripple="{ center: true }"
          :elevation="hover ? 24 : 4"
          router
          to="/npatk-calculation"
        >
          <v-card-title class="mb-4">
            宝具ダメージ計算
            <v-spacer />
            <v-icon color="purple lighten-1" style="font-size: 32px"
              >mdi-calculator</v-icon
            >
            <v-icon large color="purple lighten-1" style="font-size: 32px"
              >mdi-sword-cross</v-icon
            >
          </v-card-title>
          <v-card-subtitle>宝具ダメージを計算します。</v-card-subtitle>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="12" md="4">
      <v-hover v-slot:default="{ hover }">
        <v-card
          v-ripple="{ center: true }"
          :elevation="hover ? 24 : 4"
          router
          to="/npaquisition-calculation"
        >
          <v-card-title class="mb-4">
            宝具NP獲得計算
            <v-spacer />
            <v-icon color="purple lighten-1" style="font-size: 32px"
              >mdi-calculator</v-icon
            >
            <v-icon large color="purple lighten-1" style="font-size: 32px"
              >mdi-gauge-full</v-icon
            >
          </v-card-title>
          <v-card-subtitle>
            宝具のNP獲得量を計算します。
          </v-card-subtitle>
        </v-card>
      </v-hover>
    </v-col>

    <v-col cols="12" sm="12" md="4">
      <v-hover v-slot:default="{ hover }">
        <v-card
          v-ripple="{ center: true }"
          :elevation="hover ? 24 : 4"
          router
          to="/characters"
        >
          <v-card-title class="mb-4">
            霊基一覧
            <v-spacer />
            <v-icon color="purple lighten-1" style="font-size: 32px"
              >mdi-file-document-outline</v-icon
            >
          </v-card-title>
          <v-card-subtitle
            >サーヴァントの一覧、詳細が確認できます。</v-card-subtitle
          >
        </v-card>
      </v-hover>
    </v-col>

    <!-- ボトムナビゲーション -->
    <BottomNavigation />
  </v-row>
</template>

<script>
import BottomNavigation from '@/components/shared/BottomNavigation'

export default {
  components: {
    BottomNavigation
  },
  data() {
    return {
      image_src: require('assets/jeannearuta.png'),
      image_src2: require('assets/altria.png')
    }
  }
}
</script>

<style scoped>
.city {
  opacity: 0.9;
}
.v-card {
  margin: 12px;
}
</style>
