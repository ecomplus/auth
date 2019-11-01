import { store } from '@ecomplus/client'
import md5 from 'md5'

export default (self, user, password, storeId = 1) => {
  let url = '/_login.json'
  const data = {
    pass_md5_hash: md5(password)
  }

  if (/\S+@\S+\.\S+/.test(user)) {
    data.email = user
  } else {
    url += '?username'
    data.username = user
  }

  return store({
    url: url,
    method: 'post',
    storeId,
    data
  })

    .then(({ data }) => {
      storeId = data.store_id
      return store({
        url: '/_authenticate.json',
        method: 'post',
        storeId,
        data: {
          _id: data._id,
          api_key: data.api_key
        }
      })
    })

    .then(({ data }) => {
      return self.setSession({
        store_id: storeId,
        user,
        ...data
      })
    })
}
