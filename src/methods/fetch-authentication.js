export default (self, session) => {
  const url = `/authentications/${session.my_id}.json`
  return self.apiRequest(url).then(resp => resp.data)
}
