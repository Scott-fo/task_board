FROM node:19

WORKDIR /gateway

COPY /gateway/package.json .

RUN npm install

COPY /gateway .
COPY /protos ../protos

EXPOSE 8000

CMD ["npm", "start"]
