# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.3](https://github.com/ecomclub/ecomplus-auth/compare/v0.1.2...v0.1.3) (2019-11-04)

### [0.1.2](https://github.com/ecomclub/ecomplus-auth/compare/v0.1.1...v0.1.2) (2019-11-04)

### [0.1.1](https://github.com/ecomclub/ecomplus-auth/compare/v0.1.0...v0.1.1) (2019-11-04)


### Bug Fixes

* **api-request:** set authentication id correctly to ecomClient ([d59e190](https://github.com/ecomclub/ecomplus-auth/commit/d59e1903a2315cfe9fdb9ab03c90d9c1f51b32c5))
* myId for authenticated request ([83f2316](https://github.com/ecomclub/ecomplus-auth/commit/83f231637691203d9867530f3d2118c560d6ea15))

## [0.1.0](https://github.com/ecomclub/ecomplus-auth/compare/v0.0.2...v0.1.0) (2019-11-01)


### Features

* **admin-session:** add new session method ([3128fbe](https://github.com/ecomclub/ecomplus-auth/commit/3128fbee5d5b7580a9b0efbbf3a81597d8702758))
* **method:** add request api method [#4](https://github.com/ecomclub/ecomplus-auth/issues/4) ([5fd0aa9](https://github.com/ecomclub/ecomplus-auth/commit/5fd0aa9cfd9fc79e1121dad1ca199b737e4a0e18))
* **session-id:** save instance session key and unique ID ([2d634f7](https://github.com/ecomclub/ecomplus-auth/commit/2d634f70b0e92e021278ff7a00a9451806500577))
* check authentication ([75ead33](https://github.com/ecomclub/ecomplus-auth/commit/75ead33525fe2117fed98fbdfcb75e7a8f3873ca))
* destroy session and emit event ([5f3a301](https://github.com/ecomclub/ecomplus-auth/commit/5f3a301c1491b8f321c5d12e9f86f2dfa014cab4))
* login via email ([6a1c0ad](https://github.com/ecomclub/ecomplus-auth/commit/6a1c0ad6f497332b2f4bca776700b10735112595))
* request login and set session ([910534c](https://github.com/ecomclub/ecomplus-auth/commit/910534ca591e8ab925b7eda17f5933b3a1d6677f))
* returns authentication if user logged in ([845ca78](https://github.com/ecomclub/ecomplus-auth/commit/845ca7890d6b3cede1d70ce90117567e24e9f119))
* saves credentials in session and emit login event ([daf6c2b](https://github.com/ecomclub/ecomplus-auth/commit/daf6c2bbcd1793e69c37f73eefea237d161b41e1))
* setup methods ([19ecc83](https://github.com/ecomclub/ecomplus-auth/commit/19ecc836c2cb5a8ce90c294c1e1468a045762125))


### Bug Fixes

* **#3:** session property made private ([c18b00e](https://github.com/ecomclub/ecomplus-auth/commit/c18b00e3e98215a27953af1b150b2501f4fa1d91)), closes [#3](https://github.com/ecomclub/ecomplus-auth/issues/3)
* **admin-session:** renaming 'newSession' to 'newAdminSession' ([eb352aa](https://github.com/ecomclub/ecomplus-auth/commit/eb352aaecc1bfc7c2f0b1b640a86e58326e8219f))
* **get-session:** returns session even without login (empty session) ([b00571c](https://github.com/ecomclub/ecomplus-auth/commit/b00571ceb6ff007289d47e1d672402e67b93ca72))
* **is-logged:** call Date.getTime (valueOf is usally internal method) ([b8f599c](https://github.com/ecomclub/ecomplus-auth/commit/b8f599c5405b83016d53854b6de4d311bd96179f))
* **set-session:** emit login event with 'self', not 'session' ([9c760dc](https://github.com/ecomclub/ecomplus-auth/commit/9c760dcd9148985421e735b0a9c5893b131f3469))
* [#8](https://github.com/ecomclub/ecomplus-auth/issues/8) ([965ccf6](https://github.com/ecomclub/ecomplus-auth/commit/965ccf6dcd046d5886df8a73262881d47c39e705))
* correct property name ([cc9d66d](https://github.com/ecomclub/ecomplus-auth/commit/cc9d66d338c1a87bad5527d8d249390ae83e7555))

### 0.0.2 (2019-10-28)
