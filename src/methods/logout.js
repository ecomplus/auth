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

export default ([self, session, emitter]) => {
  session.access_token = ''

  /**
   * @event EcomAuth#logout
   * @type {object}
   * @property {object} self
   * @example ecomAuth.on('logout', console.log)
   */
  emitter.emit('logout', self)

  return self
}
