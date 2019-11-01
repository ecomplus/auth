import emitter from './../lib/emitter'

export default (self, session) => {
  // just clears current session
  session.access_token = ''
  // emit logout event
  emitter.emit('logout', self)
  return self
}
