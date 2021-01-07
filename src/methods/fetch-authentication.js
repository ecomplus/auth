import fetchAndCache from '../lib/fetch-and-cache'

export default (self, mustSkipSession) => {
  const url = `/authentications/${self.session.my_id}.json`
  return fetchAndCache(self, url, mustSkipSession)
}
