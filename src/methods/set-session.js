import emitter from './../lib/emitter'
import { _config } from '@ecomplus/utils'
export default (self, session, login) => {
  const { isLogged } = self
  session.session = {}
  session.session = login
  _config.set('store_id', login.store_id)
  if (isLogged()) {
    // emit login event
    emitter.emit('login', self)
  }
  return session.session
}
