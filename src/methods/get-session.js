/**
 * @method
 * @name EcomAuth#getSession
 * @description Returns current session object (without token).
 *
 * @returns {object}
 *
 * @example

const session = ecomAuth.getSession()
console.log(session.my_id, session.store_id)

 */

export default ({ session }) => {
  return {
    ...session,
    access_token: null
  }
}
