export default {
  isDesktop (state) {
    // (state, getters)
    return state.clientWidth > 768
  },
  isTablet (state) {
    // (state, getters)
    return !!(state.clientWidth > 576 && state.clientWidth <= 768)
  },
  isPhone (state) {
    // (state, getters)
    return !(state.clientWidth >= 576)
  },
  clientWidth (state) {
    // (state, getters)
    return state.clientWidth
  }
}
