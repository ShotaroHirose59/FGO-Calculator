<template>
  <v-row no-gutters>
    <v-card class="col-md-12">
      <v-toolbar class="title" elevation="4">
        お知らせ
      </v-toolbar>
      <v-subheader>
        アップデート情報など
      </v-subheader>
      <div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">更新日</th>
                <th class="text-left">アップデート情報</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="info in information" :key="info.id">
                <td>{{ info.created }}</td>
                <td>{{ info.information }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-card>
  </v-row>
</template>
<script>
export default {
  computed: {
    information() {
      return this.$store.state.info.info
    }
  },
  created() {
    this.$store.dispatch('info/init')
  },
  head() {
    return {
      title: 'お知らせ'
    }
  }
}
</script>
