#! /bin/bash

tput setaf 2; echo  =====================
echo "Welcome to Anon CLI"
echo version: $(cat "$1" | grep -i version | cut -c 14- | sed 's/.$//')
echo =====================