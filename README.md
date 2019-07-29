# vaultp - VAULT Profile Switcher

Switch Vault profile easily

## Preparation

Setup your profile in `~/.vault/config`

(create folder if not exists)

config example

```
{
  "default": {
    "address": "https://vault.example.com",
    "token": "toke1"
  },
  "profile2": {
    "address": "https://vault2.example.com",
    "token": "toekn2"
  }
}
```

## Setup

```sh
npm install -g vaultp
```

Add the following to your `.bashrc` or `.zshrc` config
```sh
alias vaultp="source _vaultp"
```

## Usage
```sh
vaultp
```

## Reference

* [awsp](https://github.com/johnnyopao/awsp)
