<template>
  <v-dialog
    v-model="isDisplay"
    scrollable
    max-width="1200px"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <v-toolbar height="64px">
        <client-only>
          <v-icon
            v-if="$vuetify.breakpoint.xs"
            class="mr-2"
            large
            @click="isDisplay = false"
          >
            mdi-chevron-left
          </v-icon>
        </client-only>
        <v-toolbar-title>ヘルプ</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <h3 class="mt-4 mb-2">
          使い方
        </h3>
        <client-only>
          <p v-if="!$vuetify.breakpoint.xs">
            ①クラスの選択後、サーヴァントを選択してください。<br />
            ②サーヴァントを選択すると「NP獲得量」が自動で反映されます。<br />
            ③入力値を変更すると「NP獲得量」が更新されます。
          </p>

          <p v-if="$vuetify.breakpoint.xs">
            ①クラスの選択後、サーヴァントを選択してください。<br />
            ②サーヴァントを選択すると「NP獲得量」が自動で反映されます。<br />
            ③入力値を変更すると「NP獲得量」が更新されます。<br />
            ④アルトリア・オルタをタッチするとセリフを楽しめます。
          </p>
        </client-only>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          入力項目の詳細
        </h3>
        <ul>
          <li class="mb-2">
            カード性能UP ・・・ カード性能UPバフ
          </li>
          <li class="mb-2">
            NP獲得量UP ・・・ NP獲得量UPバフ
          </li>
          <li class="mb-2">
            敵クラス ・・・ 敵のクラスによって獲得できるNP量に変化が生じる。
          </li>
          <li class="mb-2">
            敵の数 ・・・ 敵の数によって獲得できるNP量に変化が生じる。
          </li>
          <li class="mb-2">
            オーバーキルHit数 ・・・
            オーバーキルHit数は敵を倒しきったタイミングを指す。
            (例）3Hitする宝具で2Hit目に敵を倒しきれば2Hitオーバーキルと表現し、数値も上昇する。
          </li>
        </ul>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          計算式
        </h3>
        <p>
          獲得できるNP量 ＝ <br />
          NPレート × (カード補正 × カードバフ補正) × 宝具のHit数 ×
          NP獲得量バフ補正 × オーバーキルボーナス(1.5倍) × 敵クラス補正 × 敵の数
        </p>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          計算項目の説明
        </h3>
        <ul>
          <li class="mb-2">
            NPレート ・・・ 個々のサーヴァントに設定されている数値。
          </li>
          <li class="mb-2">
            カード補正 ・・・ 宝具タイプで数値が決まる (Arts 3、Quick 1、Buster
            0)
          </li>
          <li class="mb-2">
            カードバフ補正 ・・・Arts性能〜%UPなど。同系統のバフは全て加算。<br />
            (例) Arts性能30%UP、Arts性能50%UPを使用した場合は80%UPとなる。
          </li>
          <li class="mb-2">
            NP獲得量バフ補正 ・・・ NP獲得量〜%UPなど。同系統のバフは全て加算。
          </li>
          <li class="mb-2">
            敵クラス補正 ・・・ 敵のクラス別に入る補正値。<br />
            キャスターなら1.2と高くバーサーカーは0.8と低い。
          </li>
        </ul>
      </v-card-text>
      <client-only>
        <v-col style="text-align: right;">
          <v-btn
            v-if="!$vuetify.breakpoint.xs"
            color="red"
            text
            style="font-size: 16px;"
            @click="isDisplay = false"
          >
            Close
          </v-btn>
        </v-col>
      </client-only>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      isDisplay: false
    }
  }
}
</script>
