<template>
  <v-row no-gutters scrollable justify="center">
    <v-card class="col-md-12" max-width="640">
      <v-toolbar height="56px">
        <v-toolbar-title>
          フィードバック送信
        </v-toolbar-title>
        <v-row no-gutters>
          <v-col style="text-align: right;">
            <v-icon
              class="mr-4"
              color="primary"
              large
              :disabled="!feedback.opinion || feedback.opinion.length >= 300"
              @click.prevent="add"
              >mdi-send</v-icon
            >
          </v-col>
        </v-row>
      </v-toolbar>

      <!-- 送信したらダイアログ表示  -->
      <ThanksDialog ref="dlg" />

      <v-card-subtitle>
        機能追加の要望やバグ報告にご協力ください。<br />
        ご感想もお待ちしております。<br />
        送信された内容はアプリ運営者のみ確認可能です。
      </v-card-subtitle>
      <v-card-text class="mt-8">
        <v-form>
          <p>内容（必須）</p>
          <v-textarea
            v-model="feedback.opinion"
            counter
            label="機能追加の要望 バグ報告 感想など"
            :rules="rules"
            outlined
          ></v-textarea>
          <p>ご利用の端末種別をご選択ください。</p>
          <v-select
            v-model="feedback.terminal"
            label="使用端末"
            :items="selectTerminal"
            dense
            outlined
          ></v-select>
        </v-form>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>
import ThanksDialog from '@/components/ThanksDialog'

export default {
  components: {
    ThanksDialog
  },
  data() {
    return {
      selectTerminal: ['スマートフォン', 'パソコン', 'タブレット'],
      feedback: {
        opinion: '',
        terminal: 'スマートフォン'
      },
      rules: [(v) => v.length <= 300 || '300文字以内でお願いします。']
    }
  },
  created() {
    this.$store.dispatch('feedback/init')
  },
  methods: {
    add() {
      this.$store.dispatch('feedback/add', this.feedback)
      this.feedback.opinion = ''
      this.feedback.terminal = 'スマートフォン'
      this.$refs.dlg.isDisplay = true // ダイアログ表示
    }
  },
  head() {
    return {
      title: 'フィードバック'
    }
  }
}
</script>
