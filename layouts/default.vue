<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
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
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-divider :inset="inset"></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }} FGO damage calculation</span>
    </v-footer>
  </v-app>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css'
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home-circle',
          title: 'ホーム',
          to: '/'
        },
        {
          icon: 'mdi-database',
          title: 'キャラクター一覧',
          to: ''
        },
        {
          icon: 'mdi-sword',
          title: '通常攻撃ダメージ計算',
          to: ''
        },
        {
          icon: 'mdi-sword-cross',
          title: '宝具ダメージ計算',
          to: ''
        },
        {
          icon: 'fab fa-line',
          title: 'LINE Bot',
          to: ''
        },
        {
          icon: 'mdi-message-alert',
          title: 'フィードバック送信',
          to: ''
        }
      ],
      miniVariant: false,

      title: 'FGO ダメージ計算機'
    }
  }
}
</script>
