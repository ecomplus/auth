import emitter from './../lib/emitter'

export default self => {
  // just clears current session and sessionStorage
  self.session = {}

  window.sessionStorage.removeItem('my_id')
  window.sessionStorage.removeItem('access_token')
  window.sessionStorage.removeItem('expires')
  window.sessionStorage.removeItem('username')
  // emit logout event
  emitter.emit('logout', self)
  return self
}
