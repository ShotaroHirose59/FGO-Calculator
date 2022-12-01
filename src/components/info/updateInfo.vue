<template>
  <tbody>
    <v-subheader>
      2022
    </v-subheader>
    <tr v-for="i in updateInfo" :key="i.id">
      <td>{{ i.created }}</td>
      <td>{{ i.content }}</td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    updateInfo: {
      type: Array,
      required: true
    }
  },
  computed: {
    updateInfo2022() {
      return this.updateInfo.filter((i) => i.createdAt.includes('2022'))
    },
    updateInfo2021() {
      return this.updateInfo.filter((i) => i.createdAt.includes('2021'))
    },
    updateInfo2020() {
      return this.updateInfo.filter((i) => i.createdAt.includes('2020'))
    }
  }
}
</script>
