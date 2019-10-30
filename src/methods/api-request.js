import { store } from '@ecomplus/client'
export default (self, session, url, method = 'get', data) => {
  const { isLogged } = self

  if (!isLogged()) {
    return Promise.reject(new Error('Unauthorized, requires login'))
  }

  return store({
    url,
    storeId: session.session && session.session.store_id,
    myId: session.session && session.session.my_id,
    accessToken: session.session && session.session.access_token,
    method,
    data
  })
}
