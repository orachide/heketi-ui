FROM node:carbon

ENV HEKETI_SERVER_URL=""  HEKETI_SERVER_USER="admin" HEKETI_SERVER_SECRET=""

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run-script build

EXPOSE 3000

CMD [ "npm", "start" ]