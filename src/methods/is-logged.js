export default session => (Date.now() < new Date(session.expires).getTime()) && Boolean(session.access_token)
