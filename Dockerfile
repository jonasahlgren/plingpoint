FROM node:latest
COPY index.js .
COPY package.json .
COPY yarn.lock .
EXPOSE 3000
RUN yarn install
CMD node index.js

