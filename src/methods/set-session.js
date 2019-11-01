import emitter from './../lib/emitter'
import { _config } from '@ecomplus/utils'
export default (self, session, login) => {
  const { isLogged } = self

  session.my_id = login.my_id
  session.access_token = login.access_token
  session.store_id = login.store_id

  _config.set('store_id', login.store_id)
  if (isLogged()) {
    // emit login event
    emitter.emit('login', session)
  }
  return session
}
