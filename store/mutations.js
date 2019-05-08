import Vue from 'vue'

export default {
  SET_WINDOW_WIDTH (state, width) {
    Vue.set(state, 'clientWidth', width)
  },
  SET_SHARED_ENV (state, obj) {
    Vue.set(state, 'sharedEnv', obj)
  }
}
