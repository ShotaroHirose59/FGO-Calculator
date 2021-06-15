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
              <tr v-for="info in infoLists" :key="info.id">
                <td>{{ info.created }}</td>
                <td>{{ info.content }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="length"
            color="purple lighten-1"
            class="mt-4"
            @input="pageChange"
          ></v-pagination>
        </div>
      </div>
    </v-card>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      pageSize: 7
    }
  },
  computed: {
    information() {
      return this.$store.state.info.info
    },
    infoLists: {
      get() {
        return this.information.slice(
          this.pageSize * (this.page - 1),
          this.pageSize * this.page
        )
      },
      set(value) {}
    },
    length() {
      return Math.ceil(this.information.length / this.pageSize)
    }
  },
  created() {
    this.$store.dispatch('info/init')
  },
  methods: {
    pageChange(pageNumber) {
      this.infoLists = this.information.slice(
        this.pageSize * (pageNumber - 1),
        this.pageSize * pageNumber
      )
    }
  },
  head() {
    return {
      title: 'お知らせ'
    }
  }
}
</script>

<style scoped>
.v-pagination {
  margin-bottom: 16px;
}
</style>
