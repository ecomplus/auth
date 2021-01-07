import fetchAndCache from '../lib/fetch-and-cache'

/**
 * @method
 * @name EcomAuth#fetchStore
 * @description Fetch current store object from Store API.
 *
 * @param {boolean} [mustSkipSession=false] - Skips previously fetched result (refresh cache)
 *
 * @returns {Promise<data|error>}
 *
 * @example

ecomAuth.fetchStore().then(store => {
  console.log(store._id)
})

 */

export default (self, mustSkipSession) => {
  const url = `/stores/${self.session.store_id}.json`
  return fetchAndCache(self, url, mustSkipSession, 'store')
}
