<template>
  <v-row no-gutters>
    <v-card class="col-md-12">
      <v-toolbar class="title" elevation="4">
        お知らせ
      </v-toolbar>
      <v-tabs v-model="tabTitle" color="purple lighten-1" grow>
        <v-tab v-for="tabItem in tabItems" :key="tabItem" :value="tabItem">
          {{ tabItem }}
        </v-tab>
      </v-tabs>
      <v-simple-table class="mt-5">
        <template>
          <thead>
            <tr>
              <th class="text-left">更新日</th>
              <th class="text-left">情報</th>
            </tr>
          </thead>
          <tbody v-if="tabTitle === 0">
            <v-subheader>
              2023
            </v-subheader>
            <tr v-for="i in normalInfo2023" :key="i.id">
              <td>{{ i.created }}</td>
              <td>{{ i.content }}</td>
            </tr>
            <v-subheader>
              2022
            </v-subheader>
            <tr v-for="i in normalInfo2022" :key="i.id">
              <td>{{ i.created }}</td>
              <td>{{ i.content }}</td>
            </tr>
            <v-subheader>
              2021
            </v-subheader>
            <tr v-for="i in normalInfo2021" :key="i.id">
              <td>{{ i.created }}</td>
              <td>{{ i.content }}</td>
            </tr>
            <v-subheader>
              2020
            </v-subheader>
            <tr v-for="i in normalInfo2020" :key="i.id">
              <td>{{ i.created }}</td>
              <td>{{ i.content }}</td>
            </tr>
          </tbody>
          <tbody v-if="tabTitle === 1">
            <v-subheader>
              2023
            </v-subheader>
            <tr v-for="i in updateInfo2023" :key="i.id">
              <td>{{ i.created }}</td>
              <td>{{ i.content }}</td>
            </tr>
            <v-subheader>
              2022
            </v-subheader>
            <tr v-for="i in updateInfo2022" :key="i.id">
              <td>{{ i.created }}</td>
              <td>{{ i.content }}</td>
            </tr>
            <v-subheader>
              2021
            </v-subheader>
            <tr v-for="i in updateInfo2021" :key="i.id">
              <td>{{ i.created }}</td>
              <td>{{ i.content }}</td>
            </tr>
            <v-subheader>
              2020
            </v-subheader>
            <tr v-for="i in updateInfo2020" :key="i.id">
              <td>{{ i.created }}</td>
              <td>{{ i.content }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-row>
</template>
<script>
import { getDocs, collection, query, orderBy } from 'firebase/firestore/lite'
import db from '../plugins/firebase'
// import NormalInfo from '@/components/info/normalInfo'
// import UpdateInfo from '@/components/info/updateInfo'

export default {
  // components: {
  //   NormalInfo,
  //   UpdateInfo
  // },
  data() {
    return {
      tabTitle: null,
      tabItems: ['お知らせ', 'アップデート'],
      info: []
    }
  },
  computed: {
    normalInfo() {
      return this.info.filter((i) => i.category === 'normal')
    },
    normalInfo2023() {
      return this.normalInfo.filter((i) => i.createdAt.includes('2023'))
    },
    normalInfo2022() {
      return this.normalInfo.filter((i) => i.createdAt.includes('2022'))
    },
    normalInfo2021() {
      return this.normalInfo.filter((i) => i.createdAt.includes('2021'))
    },
    normalInfo2020() {
      return this.normalInfo.filter((i) => i.createdAt.includes('2020'))
    },
    updateInfo() {
      return this.info.filter((i) => i.category === 'update')
    },
    updateInfo2023() {
      return this.updateInfo.filter((i) => i.createdAt.includes('2023'))
    },
    updateInfo2022() {
      return this.updateInfo.filter((i) => i.createdAt.includes('2022'))
    },
    updateInfo2021() {
      return this.updateInfo.filter((i) => i.createdAt.includes('2021'))
    },
    updateInfo2020() {
      return this.updateInfo.filter((i) => i.createdAt.includes('2020'))
    }
  },
  async created() {
    if (!db) return

    const q = query(collection(db, 'info'), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    this.info = querySnapshot.docs.map((doc) => {
      return { ...doc.data() }
    })
  },
  head() {
    return {
      title: 'お知らせ'
    }
  }
}
</script>

<style scoped>
.theme--dark.v-subheader {
  color: #ab47bc;
}
</style>
