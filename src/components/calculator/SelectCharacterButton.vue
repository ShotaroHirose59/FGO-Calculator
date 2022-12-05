<template>
  <v-btn
    color="purple lighten-1"
    outlined
    class="character-select-btn"
    @click="onOpenSelectCharacterDisplay"
  >
    <div class="character-select-text">
      {{ characterSelectText }}
    </div>
  </v-btn>
</template>

<script>
export default {
  props: {
    characterSelectText: {
      type: String,
      required: true
    }
  },
  methods: {
    onOpenSelectCharacterDisplay() {
      this.$emit('openSelectCharacterDisplay')
    }
  }
}
</script>

<style scoped lang="scss">
.character-select-btn {
  border-radius: 20px;
  height: 48px !important;
  width: 300px;
  @media screen and (max-width: 540px) {
    margin: 0 auto;
    display: block;
  }
  .character-select-text {
    color: white;
  }
}
</style>
