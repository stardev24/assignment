# pull official base image
FROM node:latest

RUN mkdir -p /usr/src/app/frontend

WORKDIR /usr/src/app/frontend

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

# start app
CMD ["npm", "start"] 