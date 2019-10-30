import emitter from './../lib/emitter'

export default (self, session, login) => {
  const { isLogged } = self
  session.session = {}
  session.session = login
  if (isLogged()) {
    // emit login event
    emitter.emit('login', self)
  }
  return session.session
}
