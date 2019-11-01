import { store } from '@ecomplus/client'
import md5 from 'md5'
export default self => (user, password, store_id = 1) => {
  let url = '/_login.json'
  const data = {}

  if (/\S+@\S+\.\S+/.test(user)) {
    data.email = user
  } else {
    url = url + '?username'
    data.username = user
  }

  data.pass_md5_hash = md5(password)

  return store({
    url: url,
    method: 'post',
    storeId: store_id,
    data: data
  })

    .then(({ data }) => {
      store_id = data.store_id
      return store({
        url: '/_authenticate.json',
        method: 'post',
        storeId: store_id,
        data: {
          _id: data._id,
          api_key: data.api_key
        }
      })
    })

    .then(({ data }) => {
      data = { store_id, user, ...data }
      return self.setSession(data)
    })
}
