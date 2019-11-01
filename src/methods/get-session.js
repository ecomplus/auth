export default (self, session) => {
  const { isLogged } = self
  if (isLogged()) {
    return {
      ...session,
      access_token: null
    }
  }
  return {}
}
