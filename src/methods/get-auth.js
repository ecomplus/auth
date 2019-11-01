export default (self, session) => {
  const { isLogged } = self
  if (isLogged()) {
    return session.my_id
  }
  return {}
}
