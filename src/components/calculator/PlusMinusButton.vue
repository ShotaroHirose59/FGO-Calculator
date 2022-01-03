<template>
  <div>
    <v-btn
      outlined
      small
      color="teal"
      class="mt-6"
      @click="onClickPlusButton()"
    >
      +{{ count }}
    </v-btn>
    <v-btn
      outlined
      small
      color="rgba(255, 255, 255, 0.7)"
      class="mt-6 ml-2"
      @click="onClickMinusButton()"
    >
      -{{ count }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    },
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
.v-btn:not(.v-btn--round).v-size--small {
  min-width: 38px;
  max-width: 38px;
}
</style>
