<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-row dense="">
        <v-col v-for="card in cards" :key="card.title" cols="6" sm="6" md="4">
          <v-card class="mx-auto" max-width="200">
            <v-img
              :src="card.src"
              height="150px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            ></v-img>
            <v-card-title v-text="card.title"></v-card-title>
            <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cards: [
        {
          title: '宝具ダメージ計算',
          src:
            'https://lh3.googleusercontent.com/5YtcXbdVt_LIkPquejWquEIll5eY_3197_M1wR-17SkO9lFTbvbZM2PaSlhyfGrM7mcn3NjdHVLzeW7NFxXmMKuhM56GNYttwK0n26Hw-ohH',
          subtitle: 'Damage calculation'
        },
        {
          title: '宝具NP獲得計算',
          src:
            'https://lh3.googleusercontent.com/pVUgU0YBmqVTQenHldH5_OtWSmAq9WCMclhjeIFNEttou0Aa3swJBlB7lTREKwNOfc8rB67cNOUtsCPHX_aEBlbl0YzGYwuhcRksmaTxzSOI',
          subtitle: 'Damage calculation'
        },
        {
          title: '通常ダメージ計算',
          src: 'https://pbs.twimg.com/media/EOShV4iUYAEAq3s.jpg',
          subtitle: 'Damage calculation'
        },
        {
          title: 'サーヴァント一覧',
          src: 'https://i.gyazo.com/576414755bc22031931048be972714b3.jpg',
          subtitle: 'Servant List'
        },
        {
          title: '天地人(獣星)LINE Bot',
          src: 'https://i.gyazo.com/a8ce934e888b8fff92cc23c9cdb7961f.jpg',
          subtitle: 'LINE Bot'
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-card {
  margin: 15px;
}
</style>
