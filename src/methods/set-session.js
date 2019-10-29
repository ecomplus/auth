import emitter from './../lib/emitter'

export default (self, login) => {
  self.session = {}
  const { isLogged } = self
  const { my_id, access_token, user } = login

  window.sessionStorage.setItem('my_id', my_id)
  window.sessionStorage.setItem('username', user)

  self.session = login
  if (isLogged()) {
    // emit login event
    emitter.emit('login', self)
  }
  return login
}
