import { store } from '@ecomplus/client'

export default (self, session, url, method = 'get', data, axiosConfig) => {
  if (!self.isLogged()) {
    return Promise.reject(new Error('Unauthorized, requires login'))
  }

  return store({
    url,
    storeId: session && session.store_id,
    authenticationId: session && session.my_id,
    accessToken: session && session.access_token,
    method,
    data,
    ...axiosConfig
  })
}
