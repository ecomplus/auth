import { store } from '@ecomplus/client'

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
