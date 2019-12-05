export default (self, session, skipSession = false) => {
  if (!skipSession && session.authentication && session.authentication._id) {
    return Promise.resolve(session.authentication)
  }

  return self.requestApi(`/authentications/${session.my_id}.json`)
    .then(({ data }) => {
      session.authentication = data

      // save session.authentication
      clearTimeout(session.unsetAuthenticationTimer)
      session.unsetAuthenticationTimer = setTimeout(() => {
        session.authentication = null
      }, 30000)

      return data
    })
}
