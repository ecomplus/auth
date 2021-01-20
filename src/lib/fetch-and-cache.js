export default (args, url, mustSkipSession, sessionField = 'authentication') => {
  const [self, session, emitter] = args

  if (!mustSkipSession && session[sessionField] && session[sessionField]._id) {
    return Promise.resolve(session[sessionField])
  }

  return self.requestApi(url).then(({ data }) => {
    session[sessionField] = data

    /**
     * @event EcomAuth#updateAuthentication
     * @type {object}
     * @property {object} self
     * @example ecomAuth.on('updateAuthentication', console.log)
     */

    // -- //

    /**
     * @event EcomAuth#updateStore
     * @type {object}
     * @property {object} self
     * @example ecomAuth.on('updateStore', console.log)
     */
    emitter.emit(`update${sessionField.charAt(0).toUpperCase()}${sessionField.substring(1)}`, self)

    const timerField = `__session_${sessionField}_timer`
    clearTimeout(session[timerField])
    session[timerField] = setTimeout(() => {
      session[sessionField] = null
    }, 30000)

    return data
  })
}
