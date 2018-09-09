FROM node:carbon

ENV HEKETI_SERVER_URL=""  HEKETI_SERVER_USER="admin" HEKETI_SERVER_SECRET=""

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build


# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]