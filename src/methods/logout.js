import emitter from '../lib/emitter'

/**
 * @method
 * @name EcomAuth#logout
 * @description Reset admin session object.
 *
 * @returns {self}
 *
 * @example

ecomAuth.logout()

 */

export default (self) => {
  self.session.access_token = ''
  emitter.emit('logout', self)
  return self
}
