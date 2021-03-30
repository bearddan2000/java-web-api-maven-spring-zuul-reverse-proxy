# java-web-api-maven-spring-zuul-reverse-proxy

## Description
A springboot app that uses zuul
as a reverse proxy. All requests
to `/api` will be forwarded to nodejs
server.

## Tech stack
- java
- maven
  - springboot
  - netflix zuul
- nodejs

## Docker stack
- openjdk:11-jdk
- node:latest

## To run
`sudo ./install.sh -u`
- http://localhost/all
- http://localhost/api/all

## To stop
`sudo ./install.sh -d`

## For help
`sudo ./install.sh -h`

## Credits
- https://spring.io/guides/gs/routing-and-filtering/
