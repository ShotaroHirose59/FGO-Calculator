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
              @click.prevent="addFeedback()"
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
          <p>内容 (300文字以内)</p>
          <validation-provider
            ref="provider"
            v-slot="{ errors }"
            rules="maxWordCount"
          >
            <v-textarea
              v-model="feedback.opinion"
              counter="300"
              :error-messages="errors"
              placeholder="機能追加の要望 バグ報告 感想など"
              filled
            ></v-textarea>
          </validation-provider>
          <p>
            ご利用の端末種別をご選択ください。(端末によりレイアウトが異なるためです)
          </p>
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
import { ValidationProvider } from 'vee-validate'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite'
import db from '../plugins/firebase'

import ThanksDialog from '@/components/ThanksDialog'

export default {
  components: {
    ValidationProvider,
    ThanksDialog
  },
  data() {
    return {
      selectTerminal: ['スマートフォン', 'パソコン', 'タブレット'],
      feedback: {
        opinion: '',
        terminal: 'スマートフォン'
      }
    }
  },
  methods: {
    async addFeedback() {
      await addDoc(collection(db, 'feedback'), {
        feedback: this.feedback,
        created: serverTimestamp()
      })
      this.openThanksDisplay()
      this.initFeedbackData()
    },
    initFeedbackData() {
      this.feedback = { opinion: '', terminal: 'スマートフォン' }
    },
    openThanksDisplay() {
      this.$refs.dlg.isOpen = true
    }
  },
  head() {
    return {
      title: 'フィードバック'
    }
  }
}
</script>
