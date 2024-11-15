FROM node:20-alpine

ENV NODE_OPTIONS=--openssl-legacy-provider

RUN apk add --no-cache git

WORKDIR icefishOS
COPY . .

RUN yarn
RUN yarn build

CMD yarn serve
