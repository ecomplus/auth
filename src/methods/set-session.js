import emitter from './../lib/emitter'
import { _config } from '@ecomplus/utils'

export default (self, session, data) => {
  const { isLogged } = self

  for (const prop in data) {
    if (data[prop]) {
      session[prop] = data[prop]
    }
  }

  if (session.store_id > 100) {
    _config.set('store_id', session.store_id)
    // set locale
    self.fetchAuthentication().then(auth => {
      if (auth.locale) {
        _config.set('lang', auth.locale)
      }
    })
  }

  if (isLogged()) {
    // emit login event
    emitter.emit('login', self)
  }

  return self
}
