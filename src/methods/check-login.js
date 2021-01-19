/**
 * @method
 * @name EcomAuth#checkLogin
 * @description Check if admin is logged and access token is not expired.
 *
 * @returns {boolean}
 *
 * @example

if (ecomAuth.checkLogin()) {
  console.log('Logged')
}

 */

export default ([{ session }]) => {
  return Date.now() < new Date(session.expires).getTime() && Boolean(session.access_token)
}
