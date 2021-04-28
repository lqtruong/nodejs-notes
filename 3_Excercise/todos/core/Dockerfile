FROM node:14.16-alpine

MAINTAINER Le Quoc Truong

# do not know why the environment variables has not been taken from docker-compose.yml file
ARG HOST=localhost
ARG PORT=4000
ARG NODE_ENV=development
ARG LOG_LEVEL=info
ARG PROJECT_DIR=/usr/app

RUN rm -rf $PROJECT_DIR/node_modules

ADD ./src $PROJECT_DIR
# ADD ./logs PROJECT_DIR
# ADD ./data PROJECT_DIR

ADD ./package.json $PROJECT_DIR
ADD ./package-lock.json $PROJECT_DIR
ADD ./tsconfig.json $PROJECT_DIR

WORKDIR $PROJECT_DIR

EXPOSE $PORT

RUN npm prune
RUN npm install