<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      color="grey darken-4"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon large color="purple lighten-1">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>

      <div v-if="$vuetify.breakpoint.xs" class="drawer-footer mt-4 ml-4">
        <div class="drawer-footer-terms">
          <nuxt-link to="/terms">
            <p class="terms" style="font-size: 12px;">利用規約</p>
          </nuxt-link>
          <p style="font-size: 12px;">プライバシーポリシー</p>
        </div>
      </div>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon
        v-if="!$vuetify.breakpoint.xs"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.xs"
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer v-if="!$vuetify.breakpoint.xs" :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} FGO Calculator</span>
      <v-spacer />
      <nuxt-link v-if="$route.path === '/'" :to="{ name: 'terms' }">
        <span class="terms mr-8">利用規約</span>
      </nuxt-link>
      <span v-if="$route.path === '/' || $route.path === '/terms'"
        >プライバシーポリシー</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'ホーム',
          to: '/'
        },
        {
          icon: 'mdi-sword-cross',
          title: '宝具ダメージ計算',
          to: '/npatk-calculation'
        },
        {
          icon: 'mdi-gauge-full',
          title: '宝具NP獲得計算',
          to: '/npaquisition-calculation'
        },
        {
          icon: 'mdi-file-document-outline',
          title: '霊基一覧',
          to: '/characters'
        },
        {
          icon: 'mdi-information-outline',
          title: 'お知らせ',
          to: ''
        },
        {
          icon: 'mdi-message-alert',
          title: 'フィードバック送信',
          to: '/feedback'
        }
      ],
      miniVariant: false,
      title: 'FGO Calculator'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.terms {
  color: white;
}
</style>
