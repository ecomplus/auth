import emitter from './../lib/emitter'

export default (self, login) => {
  self.session = {}
  const { isLogged } = self
  self.session = login
  if (isLogged()) {
    // emit login event
    emitter.emit('login', self)
  }
  return login
}
