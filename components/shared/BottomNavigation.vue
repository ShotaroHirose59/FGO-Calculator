<template>
  <v-bottom-navigation
    v-if="$vuetify.breakpoint.xs"
    app
    fixed
    color="purple lighten-1"
  >
    <v-btn
      v-for="menu in menus"
      :key="menu.title"
      :to="menu.to"
      width="100%"
      color="grey darken-4"
    >
      <span>{{ menu.title }}</span>
      <v-icon>{{ menu.icon }}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { title: 'ホーム', icon: 'mdi-home', to: '/' },
        {
          title: '宝具ダメ計算',
          icon: 'mdi-sword-cross',
          to: '/npatk-calculation'
        },
        {
          title: '宝具NP計算',
          icon: 'mdi-gauge-full',
          to: '/npaquisition-calculation'
        },
        {
          title: '霊基一覧',
          icon: 'mdi-file-document-outline',
          to: '/characters'
        }
      ]
    }
  }
}
</script>
