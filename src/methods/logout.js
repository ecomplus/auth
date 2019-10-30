import emitter from './../lib/emitter'

export default (self, session) => {
  // just clears current session
  session.session = {}
  // emit logout event
  emitter.emit('logout', self)
  return session.session
}
