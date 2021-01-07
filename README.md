# E-Com Plus Auth

[![Publish](https://github.com/ecomplus/auth/workflows/Publish/badge.svg)](https://github.com/ecomplus/auth/actions?workflow=Publish) [![CodeFactor](https://www.codefactor.io/repository/github/ecomplus/auth/badge)](https://www.codefactor.io/repository/github/ecomplus/auth) [![npm version](https://img.shields.io/npm/v/@ecomplus/auth.svg)](https://www.npmjs.org/@ecomplus/auth) [![License AGPL](https://img.shields.io/badge/License-AGPL-orange.svg)](https://opensource.org/licenses/AGPL-3.0)

JS client for E-Com Plus admin authentication

[CHANGELOG](https://github.com/ecomplus/auth/blob/master/CHANGELOG.md)

## Usage

The `@ecomplus/auth` package can be used to handle login and persist/manipulate admin account data and resources permitted trough E-Com Plus Store API.

It's available for both Node.js and browser environments.

### Example

```js
import ecomAuth from '@ecomplus/auth'

ecomAuth.login(localStorage.getItem('username'), localStorage.getItem('password'), localStorage.getItem('store_id'))

ecomAuth.on('login', self => {
  console.log('Login OK!', self)
  ecomAuth.createEcomplusSession().then(r => console.log(r))
})

ecomAuth.on('logout', self => {
  console.log('Out!', self)
})
```
