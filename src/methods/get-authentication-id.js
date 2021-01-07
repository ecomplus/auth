export default ({ session }) => {
  if (session && session.my_id) {
    return session.my_id
  } else {
    return null
  }
}
