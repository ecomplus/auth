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
import newAdminSession from './methods/new-admin-session'
import getSession from './methods/get-session'
import apiRequest from './methods/api-request'

const sessions = {}

const EcomAuth = function (sessionKey = '_ecom_auth') {
  let session
  if (sessions[sessionKey]) {
    session = sessions[sessionKey]
  } else {
    sessions[sessionKey] = session = {}
  }

  const self = this

  this.login = (user, password, storeId) => login(self)(user, password, storeId)
  this.logout = () => logout(self, session)
  this.isLogged = () => isLogged(session)
  this.setSession = data => setSession(self, session, data)
  this.newAdminSession = () => newAdminSession(self, session)
  this.getSession = () => getSession(self, session)
  this.apiRequest = (url, method, data) => apiRequest(self, session, url, method, data)

  // save instance session key and unique ID
  self.sessionKey = sessionKey
  // generate random 32 bytes string
  self.sessionId = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 32; i++) {
    self.sessionId += possible.charAt(Math.floor(Math.random() * possible.length))
  }
}

// events emitter
;['on', 'off', 'once'].forEach(method => {
  EcomAuth[method] = (ev, fn) => {
    emitter[method](ev, fn)
  }
})

export default EcomAuth
