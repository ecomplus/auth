import emitter from './../lib/emitter'

export default self => {
  // just clears current session
  self.session = {}

  // emit logout event
  emitter.emit('logout', self)
  return self
}
