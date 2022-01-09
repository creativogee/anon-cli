#! /bin/bash

cat << EOT >> ~/.bashrc
alias gcl="git clone"
alias gpl="git pull"
alias gps="git push"
alias gco="git checkout"
alias gcm="git add . && git commit -m"
alias gdl="git branch -d"
alias gdr="git push origin --delete"
alias garu="git remote add origin"
alias gcru="git remote set-url origin"
alias gvru="git remote -v"
alias gup="git remote update"
alias xgit="rm -rf .git"
EOT