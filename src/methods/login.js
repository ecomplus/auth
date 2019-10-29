import { store } from '@ecomplus/client'
import md5 from 'md5'
export default self => (user, hash) => store({
  url: '/_login.json?username',
  method: 'post',
  storeId: 1,
  data: {
    username: user,
    pass_md5_hash: md5(hash)
  }
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
