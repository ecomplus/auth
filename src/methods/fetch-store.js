import fetchAndCache from '../lib/fetch-and-cache'

export default (self, mustSkipSession) => {
  const url = `/stores/${self.session.store_id}.json`
  return fetchAndCache(self, url, mustSkipSession, 'store')
}
