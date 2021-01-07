import { store } from '@ecomplus/client'
import * as md5 from 'blueimp-md5'

export default (self, userOrEmail, password) => {
  const { storeId, setSession } = self

  let url = '/_login.json'
  let email, username
  if (/\S+@\S+\.\S+/.test(userOrEmail)) {
    email = userOrEmail
  } else {
    url += '?username'
    username = userOrEmail
  }

  return store({
    url,
    method: 'post',
    storeId,
    data: {
      email,
      username,
      pass_md5_hash: md5(password)
    }
  })

    .then(({ data }) => {
      self.storeId = data.store_id
      return store({
        url: '/_authenticate.json',
        method: 'post',
        storeId: data.store_id,
        data: {
          _id: data._id,
          api_key: data.api_key
        }
      })
    })

    .then(({ data }) => {
      return setSession({
        store_id: self.storeId,
        email,
        username,
        ...data
      })
    })
}
