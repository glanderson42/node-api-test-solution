FROM node:18.3.0-alpine3.14

ARG NODE_ENV=development
ARG PORT=3000

ENV NODE_ENV=${NODE_ENV}
ENV NODE_PORT=${PORT}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE ${PORT}

CMD ["node", "src/index.js"]