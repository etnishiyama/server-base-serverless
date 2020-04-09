#!/bin/bash
[ "$UID" -eq 0 ] || exec sudo bash "$0" "$@"
sudo docker run -d -it -p 9324:9324 s12v/elasticmq:latest
