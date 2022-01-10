FROM node:carbon
RUN npm install -g nodemon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
WORKDIR /usr/src/app
EXPOSE 5002
CMD [ "server.js" ]
