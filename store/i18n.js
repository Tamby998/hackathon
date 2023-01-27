import qs from 'qs'
import { updateTranslations } from '~/utils/i18n'

export const state = () => ({
  locales: {},
  fallbackLocale: 'fr_FR',
  modulesLocales: {},
  locale: 'fr_FR',
  messages: {},
})

export const mutations = {
  SET_LOCALES(state, locales) {
    state.locales = locales
  },
  SET_LOCALE(state, locale) {
    if (state.locales[locale]) {
      state.locale = locale
    } else {
      state.locale = state.fallbackLocale
    }
  },
  /**
   * Add a list of translations for a group of object (app, module)
   * @param {*} state
   * @param {*} translations
   */
  ADD_TRANSLATION(state, translations) {
    const currentLocales = translations.current
    const localesTranslations = {}
    currentLocales.forEach((locale) => {
      if (translations[locale]) {
        localesTranslations[locale] = translations[locale]
      }
    })

    this.$logger.debug('>>>> ADD_TRANSLATION', localesTranslations)
    updateTranslations(state, localesTranslations)
  },
  /**
   * Add or update translation string from an existing group (app, modules)
   * ! This uses merging of keys so can be slow
   * @param {*} state
   * @param {*} translations
   */
  UPDATE_TRANSLATION(state, translations) {
    this.$logger.debug('>>>>> UPDATE_TRANSLATION', translations)
    updateTranslations(state, translations, true)
  },
}

export const actions = {
  async LOAD_TRANSLATION(context, locale) {
    // Caching implementation
    // TODO : localstorage

    const lang = locale.langs || ''
    if (typeof lang === 'string' && lang) {
      const appKeys = ['app', 'app_lists']
      const messages = context.state.messages

      appKeys.forEach((key) => {
        if (locale[key] && messages[lang] && messages[lang][key]) {
          // Unset
          locale[key] = false
        }
      })

      const updateModules = []
      const currentModules = Array.isArray(locale.modules)
        ? locale.modules
        : [locale.modules]

      currentModules.forEach((module) => {
        if (!messages[lang] || !messages[lang][module]) {
          updateModules.push(module)
        }
      })
      locale.modules = updateModules
    }

    const queryParams = {
      headers: {
        Authorization: 'Bearer',
      },
      params: locale,
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      },
    }

    // const targetUrl = `${this.$url.api}/configuration/translation`
    const translations = await this.$axios.$get('/translation', queryParams)
    console.log(translations)
    if (translations.data) {
      const installedLocales = translations.data.installed || {}
      const defaultLocale = translations.data.default || ''

      this.$logger.debug('>>>>> INSTALLED LOCALES', installedLocales)
      this.$logger.debug('>>>>> DEFAULT LOCALE', defaultLocale)

      context.commit('SET_LOCALES', installedLocales)
      if (context.state.locale && defaultLocale) {
        context.commit('SET_LOCALE', defaultLocale)
      }

      context.commit('ADD_TRANSLATION', translations.data)
    }

    return translations
  },
}
