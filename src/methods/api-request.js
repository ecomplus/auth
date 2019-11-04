import { store } from '@ecomplus/client'

export default (self, session, options) => {
  if (!self.isLogged()) {
    return Promise.reject(new Error('Unauthorized, requires login'))
  }

  return store({
    ...options,
    storeId: session && session.store_id,
    authenticationId: session && session.my_id,
    accessToken: session && session.access_token
  })
}
