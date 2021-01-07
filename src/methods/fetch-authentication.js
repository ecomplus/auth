import fetchAndCache from '../lib/fetch-and-cache'

/**
 * @method
 * @name EcomAuth#fetchAuthentication
 * @description Fetch current user authentication object from Store API.
 *
 * @param {boolean} [mustSkipSession=false] - Skips previously fetched result (refresh cache)
 *
 * @returns {Promise<data|error>}
 *
 * @example

ecomAuth.fetchAuthentication().then(authentication => {
  console.log(authentication._id)
})

 */

export default (self, mustSkipSession) => {
  const url = `/authentications/${self.session.my_id}.json`
  return fetchAndCache(self, url, mustSkipSession)
}
