# Deploy

To deploy RP Crucial Mode with whole Docker ecosystem, please follow those steps.

## Pre-Deploy

    # Clone repository
    git clone https://github.com/rpcm-org/docker-rpcm.git

    # Change the directory
    cd docker-rpcm/

    # Edit environemt variables
    cp contrib/rpcm.env .rpcm.env
    vim .rpcm.env

    # Create directory database files
    sudo mkdir -p /srv/rpcm/db

    # Create directories for nginx proxy
    # and let's encrypt companion
    sudo mkdir -p /srv/rpcm/nginx/conf.d/
    sudo mkdir -p /srv/rpcm/nginx/html
    sudo mkdir -p /srv/rpcm/nginx/certs

## First Deploy

    source .rpcm.env
    sudo -E docker-compose pull
    sudo -E docker-compose up -d --build

## Adminer Interface for MariaDB

    system: MySQL
    server: rpcm_db
    username: root
    password: <${RPCM_DB_ROOT_PASSWORD} from your .rpcm.env file>
    database: <empty, because DB is not created yet>

## Hints

    # To stop docker-compose ecosystem
    sudo docker-compose down

    # Interactive bash in container
    sudo docker exec -ti <container> /usr/bin/bash

    # To remove database data
    sudo rm -fR /srv/rpcm/db/*

    # Locally on server if you need work with le-companion:
    sudo docker exec dockerrpcm_le-companion_1 /app/cert_status
    sudo docker exec dockerrpcm_le-companion_1 /app/force_renew

## Alternative deploy without Docker

RP Crucial Mode can be alternatively deployed as any other FiveM resource, but it is not fully supported by us for now.
