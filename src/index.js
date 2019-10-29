/**
 * https://github.com/ecomclub/ecomplus-auth
 * @author E-Com Club <ti@e-com.club>
 * @license AGPL-3.0
 */
import emitter from './lib/emitter'
import setSession from './methods/set-session'
import logout from './methods/logout'
import login from './methods/login'
import isLogged from './methods/is-logged'
import newSession from './methods/admin-session'
import getAuth from './methods/get-auth'

const EcomAuth = function () {
  this.session = {}

  const self = this

  this.login = (user, password, storeId) => login(self)(user, password, storeId)
  this.logout = () => logout(self)
  this.isLogged = () => isLogged(self)
  this.setSession = data => setSession(self, data)
  this.newSession = () => newSession(self)
  this.getAuth = () => getAuth(self)
}

// events emitter
;['on', 'off', 'once'].forEach(method => {
  EcomAuth[method] = (ev, fn) => {
    emitter[method](ev, fn)
  }
})

export default EcomAuth
