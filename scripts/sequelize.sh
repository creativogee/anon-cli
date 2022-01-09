#! /bin/bash

# ls -la ~ | grep -i .bashrc 

cat << EOT >> ~/.bashrc
alias seq="sequelize"
alias seqg="sequelize model:generate"
alias seqm="sequelize db:migrate"
alias sequ="sequelize db:migrate:undo"
alias seqs="sequelize db:migrate:status"
alias sequ.="sequelize db:migrate:undo:all"
EOT
