#!/bin/sh

_vaultp_prompt $1

read -r VAULT_PROFILE VAULT_ADDR VAULT_TOKEN <<< $(cat ~/.vaultp)

export VAULT_PROFILE=$VAULT_PROFILE
export VAULT_ADDR=$VAULT_ADDR
export VAULT_TOKEN=$VAULT_TOKEN
