<template>
  <div>
    <v-icon
      color="teal"
      class="mt-4"
      style="font-size: 32px"
      @click="onClickPlusButton()"
    >
      mdi-plus-box-outline
    </v-icon>
    <v-icon
      color="rgba(255, 255, 255, 0.7)"
      class="mt-4 ml-1"
      style="font-size: 32px"
      @click="onClickMinusButton()"
    >
      mdi-minus-box-outline
    </v-icon>
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

<style scoped>
.v-icon {
  touch-action: none;
}
</style>
