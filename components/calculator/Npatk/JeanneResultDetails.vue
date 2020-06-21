<template>
  <v-dialog v-model="isJeanneResultDetails" scrollable>
    <v-card>
      <v-toolbar>
        <v-toolbar-title>ダメージ結果 ＆ 邪ンヌ</v-toolbar-title>
      </v-toolbar>

      <v-card-text>
        <v-row no-gutters>
          <v-col cols="6" sm="6" md="6" class="mt-8">
            <!-- イラストと吹き出しを差し込む -->
            <SpeechBubble
              :character-name="characterName"
              :average-damage="averageDamage"
            />
          </v-col>

          <v-col cols="6" sm="6" md="6" class="mt-12">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>TOTAL(最小)</v-list-item-subtitle>
                <v-list-item-title class="headline">{{
                  minimumDamage
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>TOTAL(平均)</v-list-item-subtitle>
                <v-list-item-title class="headline">{{
                  averageDamage.toLocaleString()
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>TOTAL(最大)</v-list-item-subtitle>
                <v-list-item-title class="headline">{{
                  maximumDamage
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          ダメージについて
        </h3>
        <p class="mt-2">
          宝具ダメージには数値が強制的に0.9~1.1倍される乱数調整が発生する。<br />
          周回では確実に相手を倒すことが重要なので最小ダメージを参考にすると良い。
        </p>
      </v-card-text>
      <v-col style="text-align: right;">
        <v-btn
          color="red"
          text
          style="font-size: 18px;"
          @click="isJeanneResultDetails = false"
        >
          Close
        </v-btn>
      </v-col>
    </v-card>
  </v-dialog>
</template>

<script>
import SpeechBubble from '@/components/calculator/Npatk/JeanneSpeechBubble'

export default {
  components: {
    SpeechBubble
  },
  props: {
    characterName: {
      type: String,
      required: true
    },
    averageDamage: {
      type: Number,
      required: true
    },
    servantNpType: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      image_src: require('assets/altria.png'),
      isJeanneResultDetails: false
    }
  },
  computed: {
    // 宝具の最小ダメージ 乱数調整0.9倍
    minimumDamage() {
      return Math.floor(this.averageDamage * 0.9).toLocaleString()
    },
    // 宝具の最高ダメージ 乱数調整1.1倍
    maximumDamage() {
      return Math.floor(this.averageDamage * 1.1).toLocaleString()
    }
  }
}
</script>
