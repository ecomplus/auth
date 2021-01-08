import { store } from '@ecomplus/client'

/**
 * @method
 * @name EcomAuth#requestApi
 * @description Send authenticated request to E-Com Plus Store API (or another).
 *
 * @param {string} url - Store API endpoint or full URL
 * @param {string} method - Request HTTP method
 * @param {object} [data] - Request body
 * @param {object} [axiosConfig] - Additional axios config settings
 *
 * @returns {Promise<response|error>}
 *
 * @example

ecomAuth.requestApi('/orders/123456789012345678901234.json', 'patch', {
  status: 'closed'
}).then(({ status }) => {
  console.log(status)
})

 */

export default ({ session, checkLogin }, url, method, data, axiosConfig) => {
  if (!checkLogin()) {
    return Promise.reject(new Error('Unauthorized, requires login'))
  }

  return store({
    ...axiosConfig,
    url,
    storeId: session.store_id,
    authenticationId: session.my_id,
    accessToken: session.access_token,
    method,
    data
  })
}
