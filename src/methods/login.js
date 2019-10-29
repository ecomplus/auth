import { store } from '@ecomplus/client'
import md5 from 'md5'
export default self => (user, password, storeId = 1) => {
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
    storeId: storeId,
    data: data
  })

    .then(({ data }) => {
      const { store_id, _id, api_key } = data
      return store({
        url: '/_authenticate.json',
        method: 'post',
        storeId: store_id,
        data: {
          _id: _id,
          api_key: api_key
        }
      })
    })

    .then(({ data }) => {
      data = { user, ...data }
      return self.setSession(data)
    })
}
