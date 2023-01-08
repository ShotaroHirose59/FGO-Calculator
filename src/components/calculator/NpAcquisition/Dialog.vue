<template>
  <v-dialog
    v-model="isOpen"
    scrollable
    max-width="720px"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    hide-overlay
    :transition="transitionMode"
  >
    <v-card>
      <v-toolbar height="64px">
        <client-only>
          <v-icon
            v-if="$vuetify.breakpoint.xs"
            class="mr-2"
            large
            @click="isOpen = false"
          >
            mdi-chevron-left
          </v-icon>
        </client-only>
        <v-toolbar-title>ヘルプ</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <p class="mt-4 mb-2">
          各Hitまでの累計ダメージとオバキル判定毎の最終的に獲得できるNPを算出して<br />
          システム可能な敵のHPを確認できるようにしました。
        </p>

        <v-divider class="mt-8"></v-divider>

        <h3 class="mt-4 mb-2">
          使い方
        </h3>
        <p>
          以下はアタッカーを水着カーマにしたWキャストリア編成を想定した例です。
        </p>
        <ul>
          <li class="mb-2">
            Lv.90
          </li>
          <li class="mb-2">
            宝具Lv.1
          </li>
          <li class="mb-2">
            アペンドスキル2：Lv.10 (NPチャージ20)
          </li>
          <li class="mb-2">
            使用スキル
            <ul>
              <li>水着カーマ：Aバフ30%, NPチャージ50</li>
              <li>
                Wキャストリア：Aバフ100%, NPチャージ40, NP獲得量バフ60%
              </li>
            </ul>
          </li>
          <li class="mb-2">
            概念礼装：黒聖杯 Lv.100
          </li>
        </ul>

        <h4 class="mt-8 mb-2">
          敵クラスがキャスターの場合
        </h4>
        <v-img :src="imageExCaster" max-width="480px"></v-img>
        <p>
          3Hit目に敵を処理すればNPを100以上獲得できます。<br />
          3Hit目の累計ダメージは42418なので、敵のHPがこのダメージ以下であればシステム可能です。
        </p>

        <h4 class="mt-8 mb-2">
          敵クラスがバーサーカーの場合
        </h4>
        <v-img :src="imageExBerserker" max-width="480px"></v-img>
        <p>
          カーマは毎ターンNPを3.8獲得できるのとキャストリアのスキル1(NPチャージ30%)を温存しているので、
          3Hit目に処理できればシステムが成立します。<br />
          3Hit目までの累計ダメージは84702なので、敵のHPがこのダメージ以下であればシステム可能です。
        </p>

        <h4 class="mt-8 mb-2">
          メモについて
        </h4>
        <p>
          以下のシーンなどを想定する際にご使用ください。
        </p>
        <ul>
          <li class="mb-2">
            混成クエスト
          </li>
          <li class="mb-2">
            敵全体のクラスが同じでもHPに差がある
          </li>
          <li class="mb-2">
            リチャージ効果のある宝具や毎ターンNP獲得できるクラススキルを持つサーヴァント
          </li>
        </ul>
        <v-img :src="imageExMemo" max-width="320px"></v-img>
      </v-card-text>
      <client-only>
        <v-col style="text-align: right;">
          <v-btn
            v-if="!$vuetify.breakpoint.xs"
            color="red"
            text
            style="font-size: 16px;"
            @click="isOpen = false"
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
      isOpen: false,
      imageExCaster: require('assets/NpAcquisition/ex-caster.png'),
      imageExBerserker: require('assets/NpAcquisition/ex-berserker.png'),
      imageExMemo: require('assets/NpAcquisition/ex-memo.png')
    }
  },
  computed: {
    transitionMode() {
      if (this.$vuetify.breakpoint.xsOnly) {
        return 'dialog-bottom-transition'
      } else {
        return 'dialog-transition'
      }
    }
  }
}
</script>
