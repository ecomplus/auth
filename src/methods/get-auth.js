export default (self, session) => {
  const { isLogged } = self
  if (isLogged()) {
    return session.session.my_id
  }
  return {}
}
