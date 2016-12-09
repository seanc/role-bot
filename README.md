# role-bot [![NPM version](https://badge.fury.io/js/role-bot.svg)](https://npmjs.org/package/role-bot) [![Build Status](https://travis-ci.org/seanc/role-bot.svg?branch=master)](https://travis-ci.org/seanc/role-bot)

> Discord bot designed to get the users' roles

## Installation

```sh
$ npm install -g seanc/role-bot
```

## Usage

```sh
$ role-bot [--token] [--prefix]
```

### Example

```sh
$ role-bot --token Mfa. --prefix "!"
```

## Configuration

Make sure a `.rolebotrc` file exists,
an typical configuration should look like so:

```toml
token = Mja
prefix = !
```

Passing in command line parameters will override these values

## License

MIT © [Sean Wilson](https://imsean.me)
