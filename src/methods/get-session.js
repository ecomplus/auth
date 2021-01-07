export default ({ session }) => {
  return {
    ...session,
    access_token: null
  }
}
