import { store } from '@ecomplus/client'
import * as md5 from 'blueimp-md5'

/**
 * @method
 * @name EcomAuth#login
 * @description Try to login and authenticate admin with email or username and password.
 *
 * @param {string} userOrEmail - Admin username or email address
 * @param {string} password - Password or MD5 hash
 * @param {boolean} [isMd5Hash=false] - If password argument is already the MD5 hash string
 *
 * @returns {Promise<self|error>}
 *
 * @example

ecomAuth.login('leo', '1234567890').then(() => {
  console.log(ecomAuth.getSession())
})

 */

export default (self, userOrEmail, password, isMd5Hash) => {
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
      pass_md5_hash: isMd5Hash === true ? password : md5(password)
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
