export default (self, url, mustSkipSession, sessionField = 'authentication') => {
  const { session, requestApi } = self

  if (!mustSkipSession && session[sessionField] && session[sessionField]._id) {
    return Promise.resolve(session[sessionField])
  }

  return requestApi(url).then(({ data }) => {
    session[sessionField] = data

    const timerField = `__session_${sessionField}_timer`
    clearTimeout(self[timerField])
    self[timerField] = setTimeout(() => {
      session[sessionField] = null
    }, 30000)

    return data
  })
}
