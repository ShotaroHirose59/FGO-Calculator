<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      :right="$vuetify.breakpoint.xs"
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
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container fluid fill-height>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer v-if="!$vuetify.breakpoint.xs" :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} FGO Calculator</span>
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
          icon: 'mdi-sword',
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
          to: ''
        }
      ],
      miniVariant: false,
      title: 'FGO Calculator'
    }
  }
}
</script>
