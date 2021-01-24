# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-rc.4](https://github.com/ecomplus/auth/compare/v1.0.0-rc.3...v1.0.0-rc.4) (2021-01-24)

## [1.0.0-rc.3](https://github.com/ecomplus/auth/compare/v1.0.0-rc.2...v1.0.0-rc.3) (2021-01-20)


### ⚠ BREAKING CHANGES

* **instance:** `ecomAuth.session` is undefined

### Features

* **events:** emit new updateAuthentication and updateStore events ([fd800d8](https://github.com/ecomplus/auth/commit/fd800d8c0d622e6386829c4d7ec95e95deb12a6c))


### Bug Fixes

* **instance:** session object is internal only (security) ([a9a317b](https://github.com/ecomplus/auth/commit/a9a317b7740fe4201e9578209fb255f4739b066d))

## [1.0.0-rc.2](https://github.com/ecomplus/auth/compare/v1.0.0-rc.1...v1.0.0-rc.2) (2021-01-19)


### Bug Fixes

* **request-api:** fix parsing base method args ([21a7ca1](https://github.com/ecomplus/auth/commit/21a7ca167ddc6f123e5facf688038c247f3898f9))

## [1.0.0-rc.1](https://github.com/ecomclub/ecomplus-auth/compare/v1.0.0-rc.0...v1.0.0-rc.1) (2021-01-19)


### Bug Fixes

* **emitter:** fix handling instance events ([d39b882](https://github.com/ecomclub/ecomplus-auth/commit/d39b882375c288154a2e421bf2a14c7f1e8096b2))

## [1.0.0-rc.0](https://github.com/ecomclub/ecomplus-auth/compare/v1.0.0-rc...v1.0.0-rc.0) (2021-01-07)


### ⚠ BREAKING CHANGES

* **create-ecomplus-session:** removed old 'newAdminSession' method
* **check-login:** removed old 'isLogin' method

### Features

* **fetch-store:** add new 'fetchStore' method with cache ([2d82108](https://github.com/ecomclub/ecomplus-auth/commit/2d8210865fcdd819d0046405feb9851ba26753e9))


### Bug Fixes

* **deps:** bump @ecomplus/client to v2 ([adcf75c](https://github.com/ecomclub/ecomplus-auth/commit/adcf75ca64e2f71829559a1f4eeb59a02bc473b3))


* **check-login:** rename method to 'checkLogin' ([091a824](https://github.com/ecomclub/ecomplus-auth/commit/091a824b120990a617a49fe7eaef29a1897b7f98))
* **create-ecomplus-session:** rename to 'createEcomplusSession' ([bda4bc9](https://github.com/ecomclub/ecomplus-auth/commit/bda4bc9fc7d4a843b6057d3fed4fd51b4eb92c3e))

## [1.0.0-rc](https://github.com/ecomclub/ecomplus-auth/compare/v0.4.1...v1.0.0-rc) (2021-01-07)


### Bug Fixes

* **deps:** update dependency axios to ^0.21.0 [security] ([#90](https://github.com/ecomclub/ecomplus-auth/issues/90)) ([0b71186](https://github.com/ecomclub/ecomplus-auth/commit/0b7118611c7fd3c18c63ab6de888110d5d5e994e))

### [0.4.1](https://github.com/ecomclub/ecomplus-auth/compare/v0.4.0...v0.4.1) (2019-12-05)


### Features

* **locale:** set lang after login ([#27](https://github.com/ecomclub/ecomplus-auth/issues/27)) ([23375bb](https://github.com/ecomclub/ecomplus-auth/commit/23375bb5702ce8de2c09d3b9da10907662db8cf9))


### Bug Fixes

* **fetch-authentication:** fix calling self.requestApi ([612f8f2](https://github.com/ecomclub/ecomplus-auth/commit/612f8f2413976c4545972bf8ecf15b2f26d4ebc4))

## [0.4.0](https://github.com/ecomclub/ecomplus-auth/compare/v0.3.2...v0.4.0) (2019-11-18)

### [0.3.2](https://github.com/ecomclub/ecomplus-auth/compare/v0.3.1...v0.3.2) (2019-11-17)

### [0.3.1](https://github.com/ecomclub/ecomplus-auth/compare/v0.3.0...v0.3.1) (2019-11-06)


### Features

* **fetch-authentication:** fetch Store API and return respective auth ([dcda880](https://github.com/ecomclub/ecomplus-auth/commit/dcda880b3506c941e584542d517b35370da3341a))
* **fetch-authentication:** save authentication in session for 30s ([d2ea162](https://github.com/ecomclub/ecomplus-auth/commit/d2ea1629aea519c0f6f0b576a1e93a263e07d221))
* **get-authentication-id:** return session.my_id ([1659bc1](https://github.com/ecomclub/ecomplus-auth/commit/1659bc13e8c31254af2fe9b11aa2ffea24127289))
* **methods:** [#9](https://github.com/ecomclub/ecomplus-auth/issues/9) ([2c1e95e](https://github.com/ecomclub/ecomplus-auth/commit/2c1e95e5acfe6e33012fdfabbce08431a4bd5c63))


### Bug Fixes

* **fetch-authentication:** fix handling authentication unset timeout ([cb0b398](https://github.com/ecomclub/ecomplus-auth/commit/cb0b398a9c3a49c04f8e97b0efa507d0af50ca93))

## [0.3.0](https://github.com/ecomclub/ecomplus-auth/compare/v0.2.0...v0.3.0) (2019-11-05)


### ⚠ BREAKING CHANGES

* 'apiRequest' method removed (to 'requestApi')
* **api-request:** changed apiRquest method params

### revert

* **api-request:** back to req options separated ([23bbe89](https://github.com/ecomclub/ecomplus-auth/commit/23bbe8944e05a9eaea8dfb4bb5aa70087fcf6723))


* rename 'apiRequest' to 'requestApi' ([be9f739](https://github.com/ecomclub/ecomplus-auth/commit/be9f7393037f100b101c38f7108a08bfeef62eea))

## [0.2.0](https://github.com/ecomclub/ecomplus-auth/compare/v0.1.3...v0.2.0) (2019-11-04)


### ⚠ BREAKING CHANGES

* **api-request:** changed apiRequest method arguments

### Bug Fixes

* **api-request:** pass options object to ecomClient.store ([7f857c2](https://github.com/ecomclub/ecomplus-auth/commit/7f857c2b5afd3fa8f5d88e6ff3ea1cb7389faea7))

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
