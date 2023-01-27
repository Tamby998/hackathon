import { Date } from "core-js"

export default async function ({
  isHMR,
  app,
  store,
  route,
  params,
  _error,
  redirect,
}) {
  const defaultLocale = app.i18n.locale || app.i18n.fallbackLocale

  // If middleware is called from hot module replacement, igore it
  if (isHMR) return
  // Get locale from params
  let locale = route.query.lang || params.lang || defaultLocale 

  // Load locales if not set
  if (!store.state.i18n.locales[locale]) {
    // console.log('Locales not set')
    const translationParams = {
      langs: locale,
      modules: 1,
    }
    const appKeys = ['app', 'app_lists']

    // App
    appKeys.forEach((key) => {
      if (
        !(
          store.state.i18n.modulesLocales[key] &&
          store.state.i18n.modulesLocales[key][locale]
        )
      ) {
        translationParams[key] = true
      }
    })

    await store.dispatch('i18n/LOAD_TRANSLATION', translationParams)
  }

  // Test locale
  if (!store.state.i18n.locales[locale]) {
    // return error({ message: `This page could not be found.`, statusCode: 404 })
    locale = defaultLocale
  }

  // Set locale
  store.commit('i18n/SET_LOCALE', locale)
  app.i18n.locale = store.state.i18n.locale

  // TODO : needs change
  document.querySelector('html').setAttribute('lang', locale)

  // If route is /<defaultLocale>/ ... -> redirect to /...
  /*
  if (
    locale === defaultLocale &&
    route.fullPath.indexOf('/' + defaultLocale) === 0
  ) {
    const toReplace =
      '^/' +
      defaultLocale +
      (route.fullPath.indexOf('/' + defaultLocale + '/') === 0 ? '/' : '')
    const re = new RegExp(toReplace)

    return redirect(route.fullPath.replace(re, '/'))
  }
  */

  if (route.fullPath.indexOf('/' + locale) !== 0) {
    return redirect(`/${locale}${route.fullPath}`)
  }
}
