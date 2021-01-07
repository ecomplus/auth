export default ({ session }) => {
  return Date.now() < new Date(session.expires).getTime() && Boolean(session.access_token)
}
