FROM node:14-alpine As development

LABEL "server"="Server-api-graphql"
LABEL maintainer="joseagraz29@gmail.com"
LABEL version="1.0"

WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install --only=development
COPY . .
RUN yarn run build


EXPOSE 4000
CMD ["yarn", "run", "start" , "dev"]
