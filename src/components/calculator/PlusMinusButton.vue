<template>
  <div style="display: flex">
    <v-btn icon style="width: 32px; height: 32px;" @click="onClickPlusButton()">
      <v-icon>
        mdi-chevron-up
      </v-icon>
    </v-btn>
    <v-btn
      icon
      style="width: 32px; height: 32px;"
      @click="onClickMinusButton()"
    >
      <v-icon>
        mdi-chevron-down
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    onClickMinusButton: {
      type: Function,
      required: true,
      default: () => {}
    },
    onClickPlusButton: {
      type: Function,
      required: true,
      default: () => {}
    }
  }
}
</script>

<!-- <style scoped>
.v-icon {
  touch-action: none;
}
</style> -->
