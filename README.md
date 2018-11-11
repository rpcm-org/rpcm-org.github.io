# RP Crucial Mode

[RPCM](https://github.com/rpcm-org) is a mode for [FiveM](https://github.com/kanersps/essentialmode) with emphasis for role play.

## Deploy

To deploy RP Crucial Mode with whole ecosystem, please follow those steps.

### Pre-Deploy

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

### First Deploy

    source .rpcm.env
    sudo docker-compose pull
    sudo -E docker-compose up -d --build

### Adminer Interface for MariaDB

    system: MySQL
    server: rpcm_db
    username: root
    password: <${RPCM_DB_ROOT_PASSWORD} from your .rpcm.env file>
    database: <empty, because DB is not created yet>

### Hints

    # To stop docker-compose ecosystem
    docker-compose down

    # Interactive bash in container
    sudo docker exec -ti <container> /usr/bin/bash

    # To remove database data
    sudo rm -fR /srv/rpcm/db/*

    # Locally on server if you need work with le-companion:
    sudo docker exec dockerrpcm_le-companion_1 /app/cert_status
    sudo docker exec dockerrpcm_le-companion_1 /app/force_renew

## Docker containers

RP Crucial Mode project provides this docker container:
* [rpcmorg/fivem](https://hub.docker.com/r/rpcmorg/fivem/)

## How To Contribute

Firstly, you need setup your local git repository:

    git clone <repository>

    git config user.name "<author name>"
    git config user.email "<author e-mail>"

    # optionaly
    git config user.signingkey <public GPG key>

    # setup commit template
    git config commit.template .git-commit-template

## Useful Links

### FiveM
* [Builds](http://runtime.fivem.net/artifacts/fivem/build_proot_linux/master/)
* [Key Registration](https://keymaster.fivem.net/)
* [Natives](https://runtime.fivem.net/doc/natives/)
* [fivem-mysql-async](https://github.com/brouznouf/fivem-mysql-async/)

### Docker
* [MariaDB](https://hub.docker.com/_/mariadb/)
* [letsencrypt-nginx-proxy-companion](https://hub.docker.com/r/jrcs/letsencrypt-nginx-proxy-companion/)

### Others
* [Markdown](https://guides.github.com/features/mastering-markdown/)
