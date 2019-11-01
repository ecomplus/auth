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
  }

  if (isLogged()) {
    // emit login event
    emitter.emit('login', session)
  }

  return self
}
