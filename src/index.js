/**
 * @ecomplus/auth
 * (c) E-Com Club <ti@e-com.club>
 * Released under the AGPL-3.0 License.
 */

/**
 * JS client for E-Com Plus admin authentication.
 * {@link https://github.com/ecomplus/auth GitHub}
 *
 * @module @ecomplus/auth
 * @author E-Com Club <ti@e-com.club>
 * @return {@link ecomAuth}
 * @see ecomAuth
 *
 * @example
 * // ES import default
 * import ecomAuth from '@ecomplus/auth'
 *
 * @example
 * // Optional named ES import for default instance and constructor
 * import { ecomAuth, EcomAuth } from '@ecomplus/auth'
 *
 * @example
 * // With CommonJS
 * const ecomAuth = require('@ecomplus/auth')
 *
 * @example
 * <!-- Global `ecomAuth` from CDN on browser -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/auth/dist/ecom-auth.var.min.js"></script>
 *
 * @example
 * <!-- Bundle from CDN with `ecomUtils`, `ecomClient`, `axios`, `EventEmitter3` and `md5` -->
 * <script src="https://cdn.jsdelivr.net/npm/@ecomplus/auth/dist/ecom-auth.bundle.min.js"></script>
 */

import EcomAuth from './constructor'

/**
 * Default `EcomAuth` instance.
 * @global
 * @type EcomAuth
 */

const ecomAuth = new EcomAuth()

export default ecomAuth

export { ecomAuth, EcomAuth }
