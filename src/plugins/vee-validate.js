import { ValidationProvider, extend } from 'vee-validate'
import { required, numeric } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '数値を入力してください'
})

extend('numeric', {
  ...numeric,
  message: '半角数値のみ入力可能です'
})

extend('maxCardBuff', {
  validate(value) {
    if (value > 400) {
      return false
    }
    return true
  },
  message: '400以下で設定してください'
})

extend('maxNpBuff', {
  validate(value) {
    if (value > 500) {
      return false
    }
    return true
  },
  message: '500以下で設定してください'
})

extend('maxDressAtk', {
  validate(value) {
    if (value > 3000) {
      return false
    }
    return true
  },
  message: '3000以下で設定してください'
})

extend('maxWordCount', {
  validate(value) {
    if (value.length > 300) {
      return false
    }
    return true
  },
  message: '300文字以内でお願いします'
})

export default {
  components: {
    ValidationProvider
  }
}
