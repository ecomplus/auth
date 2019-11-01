import axios from 'axios'

export default (self, session) => {
  if (!self.isLogged()) {
    return Promise.reject(new Error('Unauthorized, requires login'))
  }

  return axios({
    url: 'https://admin.e-com.plus/session/new',
    method: 'PUT',
    headers: {
      'X-Store-ID': session.store_id,
      'X-My-ID': session.my_id,
      'X-Access-Token': session.access_token
    }
  })
}
