/**
 * @method
 * @name EcomAuth#getAuthenticationId
 * @description Returns current session authentication ID.
 *
 * @returns {string|null}
 *
 * @example

console.log(ecomAuth.getAuthenticationId())

 */

export default ({ session }) => {
  if (session && session.my_id) {
    return session.my_id
  } else {
    return null
  }
}
