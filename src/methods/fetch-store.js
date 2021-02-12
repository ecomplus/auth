import fetchAndCache from '../lib/fetch-and-cache'

/**
 * @method
 * @name EcomAuth#fetchStore
 * @description Fetch current store object from Store API.
 *
 * @param {boolean} [mustSkipSession=false] - Skips previously fetched result (refresh cache)
 *
 * @returns {Promise<store|error>} -
 * [Store object]{@link https://developers.e-com.plus/docs/api/#/store/stores/}
 *
 * @example

ecomAuth.fetchStore().then(store => {
  console.log(store._id)
})

 */

export default (args, mustSkipSession) => {
  const [{ checkLogin }, session] = args
  const url = `/stores/${(checkLogin ? 'me' : session.store_id)}.json`
  return fetchAndCache(args, url, mustSkipSession, 'store')
}
