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
              :disabled="!user.opinion || user.opinion.length >= 180"
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
            v-model="user.opinion"
            counter
            label="機能追加の要望 バグ報告 感想など"
            :rules="rules"
            outlined
          ></v-textarea>
          <p>ご利用の端末種別をご選択ください。</p>
          <v-select
            v-model="user.terminal"
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
      user: {
        opinion: '',
        terminal: 'スマートフォン'
      },
      rules: [(v) => v.length <= 180 || '180文字以内でお願いします。']
    }
  },
  created() {
    this.$store.dispatch('feedback/init')
  },
  methods: {
    add() {
      this.$store.dispatch('feedback/add', this.user)
      this.user.opinion = ''
      this.user.terminal = 'スマートフォン'
      this.$refs.dlg.isDisplay = true // ダイアログ表示
    }
  }
}
</script>
