<template>
  <v-dialog v-model="isDisplay" scrollable max-width="800">
    <v-card>
      <v-toolbar height="56" class="mb-8">
        <v-toolbar-title>運営と邪ンヌからお礼</v-toolbar-title>
      </v-toolbar>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="12" class="text-center">
          <h2 class="mb-4">
            フィードバックの送信 <br />
            誠にありがとうございます。
          </h2>
          <p class="mt-4">今後ともよろしくお願い致します。</p>
          <v-btn color="mt-4 mb-8" :to="{ name: 'index' }">
            <v-icon color="purple lighten-1">mdi-arrow-left</v-icon
            >トップページに戻る
          </v-btn>
        </v-col>
        <v-col cols="12" sm="3" md="12">
          <div class="balloon-set-box ml-8">
            <div class="balloon1 ml-8">
              <p>感謝するわ マスター</p>
            </div>
            <v-img :src="image_src" max-width="200px" class="ml-8"></v-img>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      image_src: require('assets/jeannearuta.png'),
      isDisplay: false
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
