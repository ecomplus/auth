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
import getSession from './methods/get-session'
import apiRequest from './methods/api-request'

const sessions = {}

const EcomAuth = function (key = '') {
  let session
  if (sessions[key]) {
    session = sessions[key]
  } else {
    sessions[key] = session = {}
  }
  const self = this
  this.login = (user, password, storeId) => login(self)(user, password, storeId)
  this.logout = () => logout(self, session)
  this.isLogged = () => isLogged(session)
  this.setSession = data => setSession(self, session, data)
  this.newSession = () => newSession(self, session)
  this.getSession = () => getSession(self, session)
  this.apiRequest = (url, method, data) => apiRequest(self, session, url, method, data)
}

// events emitter
;['on', 'off', 'once'].forEach(method => {
  EcomAuth[method] = (ev, fn) => {
    emitter[method](ev, fn)
  }
})

export default EcomAuth
