import Vue from 'vue'

/**
 * Update translation based on new values
 *
 * @param {*} state
 * @param {*} translations
 * @param {*} merge
 */
export const updateTranslations = (state, translations, merge = false) => {
  for (const locale in translations) {
    const found = state.locales && state.locales[locale]

    if (!found) {
      Vue.$logger.debug(`Locale not found ${locale}`)
      continue
    }

    const messages = translations[locale]

    // App && App list
    const appKeys = ['app', 'app_lists']
    appKeys.forEach((key) => {
      if (messages[key]) {
        // ! Initialize flag dictionary if it does not exists yet
        if (!state.modulesLocales[key]) {
          Vue.set(state.modulesLocales, key, {
            [locale]: false,
          })
        }

        if (merge || !state.modulesLocales[key][locale]) {
          // ! Flag the locale as loaded for this key
          Vue.set(state.modulesLocales[key], locale, true) // set flag

          if (!state.messages[locale]) {
            // ! Initialize messages for this locale
            Vue.set(state.messages, locale, {})
          }

          // ! Create or merge Values
          const initial = merge ? state.messages[locale][key] || {} : {}
          const values = Object.assign(initial, messages[key])

          Vue.set(
            state.messages[locale],
            key,
            JSON.parse(JSON.stringify(values))
          )
        }
      }
    })

    // Modules
    if (messages.modules) {
      for (const moduleName in messages.modules) {
        if (messages.modules[moduleName]) {
          // ! Initialize flag dictionary if it does not exists yet
          if (!state.modulesLocales[moduleName]) {
            Vue.set(state.modulesLocales, moduleName, {
              [locale]: false,
            })
          }

          if (merge || !state.modulesLocales[moduleName][locale]) {
            // ! Flag the locale as loaded for this key
            Vue.set(state.modulesLocales[moduleName], locale, true) // set flag

            if (!state.messages[locale]) {
              // ! Initialize messages for this locale
              Vue.set(state.messages, locale, {})
            }

            // ! Create or merge Values
            const initial = merge
              ? state.messages[locale][moduleName] || {}
              : {}
            const values = Object.assign(initial, messages.modules[moduleName])
            Vue.set(
              state.messages[locale],
              moduleName,
              JSON.parse(JSON.stringify(values))
            )
          }
        }
      }
    }
  }
}
