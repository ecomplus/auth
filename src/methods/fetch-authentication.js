export default (self, session, skipSession = false) => {
  const url = `/authentications/${session.my_id}.json`
  let timeout = null

  if (!skipSession && session.authentication && session.authentication._id) {
    return Promise.resolve(session.authentication)
  }

  return self.requestApi(url).then(({ data }) => {
    session.authentication = data
    // reset session.authentication
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      session.authentication = null
    }, 30000)

    return data
  })
}
