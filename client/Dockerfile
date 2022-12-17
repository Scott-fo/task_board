FROM node:19

WORKDIR /client

COPY /client/package.json .

RUN npm install

COPY /client .

EXPOSE 3000

CMD ["npm", "start"]
