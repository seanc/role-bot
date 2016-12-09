# role-bot

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

### Commands

```
!role [user mentions]
```

Example
```
!role @sean @daf
```

If no user mentions are specified, it will return your roles.

## Configuration

Make sure a `.rolebotrc` file exists,
an typical configuration should look like so:

```
token = Mfa.
prefix = !
```

Passing in command line parameters will override these values

## License

MIT © [Sean Wilson](https://imsean.me)
