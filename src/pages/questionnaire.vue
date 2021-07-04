<template>
  <v-row no-gutters scrollable justify="center">
    <v-card class="col-md-12" max-width="720">
      <v-toolbar height="64px">
        <v-img :src="image_src" max-width="56px" class="mr-4"></v-img>
        <v-toolbar-title>
          1周年アンケート
        </v-toolbar-title>
      </v-toolbar>

      <!-- 送信したらダイアログ表示  -->
      <ThanksDialog ref="dlg" />

      <v-card-subtitle>
        <div class="mb-3">
          ご利用いただきありがとうございます。<br />「FGO Calculator
          ~Wオルタと計算~」の開発者です。
        </div>
        <div>
          サービスの向上を目的とした第1回ユーザーアンケートを実施します。<br />
          下記内容をご確認の上、アンケートにご協力をお願いいたします。
        </div>
      </v-card-subtitle>
      <v-divider></v-divider>

      <v-card-text class="mt-4">
        <v-form>
          <p>本サービスの満足度を5段階評価で教えてください。</p>
          <v-rating
            v-model="questionnaire.rating"
            hover
            length="5"
            size="24"
            class="mb-4"
          ></v-rating>

          <p>
            本サービスをスマホのホーム画面に追加できることを知っていますか？
          </p>
          <v-radio-group v-model="questionnaire.knowingPwa" row>
            <v-radio label="はい" value="はい"></v-radio>
            <v-radio label="いいえ" value="いいえ"></v-radio>
          </v-radio-group>

          <p class="mt-2">
            本サービスをスマホのホーム画面に追加して利用していますか？
          </p>
          <v-radio-group v-model="questionnaire.usingPwa" row>
            <v-radio label="はい" value="はい"></v-radio>
            <v-radio label="いいえ" value="いいえ"></v-radio>
          </v-radio-group>

          <p class="mt-2">
            本サービスに今後期待することは何ですか？(複数選択可)
          </p>
          <v-checkbox
            v-model="questionnaire.selectedItem"
            label="Wオルタの新規イラスト"
            value="Wオルタの新規イラスト"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="questionnaire.selectedItem"
            label="Wオルタ以外のサーヴァントの新規イラスト"
            value="Wオルタ以外のサーヴァントの新規イラスト"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="questionnaire.selectedItem"
            label="Wオルタのセリフの充実化"
            value="Wオルタのセリフの充実化"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="questionnaire.selectedItem"
            label="筋力、魔力、幸運などサーヴァントのパラメータが見れる機能"
            value="筋力、魔力、幸運などサーヴァントのパラメータが見れる機能"
            hide-details
          ></v-checkbox>
          <v-checkbox
            v-model="questionnaire.selectedItem"
            label="App StoreやGoogle Play ストアでの展開"
            value="App StoreやGoogle Play ストアでの展開"
            hide-details
          ></v-checkbox>

          <p style="margin-top: 32px;">
            欲しい機能やイラスト、改善して欲しいところがあればコメントをお願いします。(任意・300文字以内)
          </p>
          <validation-provider
            ref="provider"
            v-slot="{ errors }"
            rules="maxWordCount"
          >
            <v-textarea
              v-model="questionnaire.freeComent"
              counter
              rows="3"
              class="mt-4"
              :error-messages="errors"
              outlined
            ></v-textarea>
          </validation-provider>

          <div class="text-center">
            <v-btn
              class="ma-2"
              outlined
              color="purple lighten-1"
              :disabled="
                !questionnaire.rating ||
                  !questionnaire.knowingPwa ||
                  !questionnaire.usingPwa ||
                  questionnaire.selectedItem.length === 0 ||
                  questionnaire.freeComent.length >= 300
              "
              @click.prevent="add"
            >
              アンケートに回答する
            </v-btn>
          </div>
        </v-form>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import ThanksDialog from '@/components/ThanksDialog'

export default {
  components: {
    ValidationProvider,
    ThanksDialog
  },
  data() {
    return {
      image_src: require('assets/jeannearuta.png'),
      questionnaire: {
        rating: null,
        knowingPwa: '',
        usingPwa: '',
        selectedItem: [],
        freeComent: ''
      }
    }
  },
  created() {
    this.$store.dispatch('questionnaire/init')
  },
  methods: {
    add() {
      this.$store.dispatch('questionnaire/add', this.questionnaire)
      this.questionnaire.rating = null
      this.questionnaire.knowingPwa = ''
      this.questionnaire.usingPwa = ''
      this.questionnaire.selectedItem = []
      this.questionnaire.freeComent = ''
      this.$refs.dlg.isDisplay = true // ダイアログ表示
    }
  },
  head() {
    return {
      title: '1周年アンケート'
    }
  }
}
</script>

<style scoped>
p {
  margin-bottom: 4px;
}
</style>
