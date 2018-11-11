# RP Crucial Mode ORG

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
    mkdir -p /srv/fivem/db

### First Deploy

    source .rpcm.env
    sudo docker-compose pull
    sudo -E docker-compose up -d --build

### Hints

    # To stop docker-compose ecosystem
    docker-compose down

    # Interactive bash in container
    sudo docker exec -ti <container> /usr/bin/bash

    # To remove database data
    sudo rm -fR /srv/fivem/db/*

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

### Others
* [Markdown](https://guides.github.com/features/mastering-markdown/)
