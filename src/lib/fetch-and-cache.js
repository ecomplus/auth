export default (args, url, mustSkipSession, sessionField = 'authentication') => {
  const [{ requestApi }, session] = args

  if (!mustSkipSession && session[sessionField] && session[sessionField]._id) {
    return Promise.resolve(session[sessionField])
  }

  return requestApi(url).then(({ data }) => {
    session[sessionField] = data

    const timerField = `__session_${sessionField}_timer`
    clearTimeout(session[timerField])
    session[timerField] = setTimeout(() => {
      session[sessionField] = null
    }, 30000)

    return data
  })
}
