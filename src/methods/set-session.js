import { $ecomConfig } from '@ecomplus/utils'
import emitter from '../lib/emitter'

/**
 * @method
 * @name EcomAuth#setSession
 * @description Set instance session object.
 *
 * @param {object} newSession - Session object to save
 *
 * @returns {self}
 *
 * @example

ecomAuth.setSession(session)

 */

export default (self, newSession) => {
  const { lang, session, checkLogin, fetchAuthentication } = self

  for (const prop in newSession) {
    if (newSession[prop]) {
      session[prop] = newSession[prop]
    }
  }
  if (session.store_id > 100) {
    $ecomConfig.set('store_id', session.store_id)
  }

  if (checkLogin()) {
    emitter.emit('login', self)
    if (!lang) {
      fetchAuthentication().then(auth => {
        if (auth.locale) {
          self.lang = session.lang = auth.locale
          $ecomConfig.set('lang', auth.locale)
        }
      })
    }
  }

  return self
}
