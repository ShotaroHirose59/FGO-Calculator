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
              <tr v-for="i in info" :key="i.id">
                <td>{{ i.created }}</td>
                <td>{{ i.content }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </v-card>
  </v-row>
</template>
<script>
import { getDocs, collection, query, orderBy } from 'firebase/firestore/lite'
import db from '../plugins/firebase'

export default {
  data() {
    return {
      info: [
        {
          content: '',
          created: ''
        }
      ]
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
          created: doc.data().created
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
