import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import our own locale file
import enUS from '~/locales/en-us.json'
// import locale file from components
import enUsComponents from '~/components/en-us'
// import i18n texts for iView
import enUSIview from 'iview/dist/locale/en-US'

Vue.use(VueI18n)

export default ({ app, store }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and pages asyncData/fetch
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'en-us',
    messages: {
      'en-us': {
        ...enUS,
        ...enUsComponents,
        ...enUSIview
      }
    }
  })

  app.i18n.path = link => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }
    return `/${app.i18n.locale}/${link}`
  }
}
