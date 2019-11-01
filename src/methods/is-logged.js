import moment from 'moment'
export default session => (moment().diff(session.expires, 'days') === 0 && Boolean(session.access_token))
