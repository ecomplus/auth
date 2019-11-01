export default (self, session) => {
  return {
    ...session,
    access_token: null
  }
}
