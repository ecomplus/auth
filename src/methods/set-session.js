import emitter from './../lib/emitter'
import { _config } from '@ecomplus/utils'
export default (self, session, data) => {
  const { isLogged } = self

  session.my_id = login.my_id
  session.access_token = login.access_token
  session.store_id = login.storeId

  _config.set('store_id', login.storeId)
  if (isLogged()) {
    // emit login event
    emitter.emit('login', session)
  }
  return self
}
