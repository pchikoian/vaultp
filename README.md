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

## Shell prompt
```sh
function aws_prof {
  local profile="${AWS_PROFILE:=default}"

  echo "%{$fg_bold[blue]%}aws:(%{$fg[yellow]%}${profile}%{$fg_bold[blue]%})%{$reset_color%} "
}
```

```sh
PROMPT='OTHER_PROMPT_STUFF $(aws_prof)'
```

## Reference

* [awsp](https://github.com/johnnyopao/awsp)
