import emitter from '../lib/emitter'

export default (self) => {
  self.session.access_token = ''
  emitter.emit('logout', self)
  return self
}
