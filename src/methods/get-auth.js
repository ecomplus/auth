export default (self) => {
  const { isLogged } = self
  if (isLogged()) {
    return self.session
  }
  return {}
}
