#!/usr/bin/env bash
# backup db from remote server -- wp @Asher
#

cd "$(dirname "$0")"

# source common variables
source ./variables.sh

#sh db_backup_local.sh

cd ..

gunzip -c  './backup/__after-commit__~Ac~text~fix~__wp-ashbournewm-test-2025-01-23-17:45:09.sql.gz' | docker exec -i ${LOCAL_DOCKER_NAMESPACE}-db-1 mariadb -u wordpress --password=${DB_PASSWORD} wordpress
