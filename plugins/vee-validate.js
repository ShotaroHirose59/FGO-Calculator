import { ValidationProvider, extend } from 'vee-validate'
import { required, numeric } from 'vee-validate/dist/rules'

// install the 'required' rule.
extend('required', {
  ...required,
  message: '数値を入力してください'
})

extend('numeric', {
  ...numeric,
  message: '半角数値のみ入力可能です'
})

export default {
  components: {
    ValidationProvider
  }
}
