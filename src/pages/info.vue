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
            <tr v-for="i in normalInfo" :key="i.id">
              <td>{{ i.created }}</td>
              <td>{{ i.content }}</td>
            </tr>
          </tbody>
          <tbody v-if="tabTitle === 1">
            <tr v-for="i in updateInfo" :key="i.id">
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

export default {
  data() {
    return {
      tabTitle: null,
      tabItems: ['お知らせ', 'アップデート'],
      info: [
        {
          content: '',
          created: '',
          category: ''
        }
      ]
    }
  },
  computed: {
    normalInfo() {
      return this.info.filter((i) => i.category === 'normal')
    },
    updateInfo() {
      return this.info.filter((i) => i.category === 'update')
    }
  },
  async created() {
    if (!db) {
      return
    }
    const q = query(collection(db, 'info'), orderBy('createdAt', 'desc'))
    await getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.info.push({
          content: doc.data().content,
          created: doc.data().created,
          category: doc.data().category
        })
      })
    })
    this.info.splice(0, 1)
  },
  head() {
    return {
      title: 'お知らせ'
    }
  }
}
</script>
