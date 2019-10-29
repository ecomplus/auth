export default (self) => {
  const { isLogged } = self
  let auth = {}
  const myId = window.sessionStorage.getItem('my_id')
  const accessToken = window.sessionStorage.getItem('access_token')
  if (isLogged()) {
    auth = self.session
  } else if (!isLogged() && myId !== null && accessToken !== null) {
    auth = {
      my_id: myId,
      access_token: accessToken
    }
    self.session = auth
  }
  return auth
}
