#!/bin/bash
git pull
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)
docker build -t webpage$1 .
docker run -d -p 80:80 --name webpage$1 webpage$1
docker ps
