FROM node:19

WORKDIR /emails

COPY /emails/package.json .

RUN npm install

COPY /emails .

COPY /protos ../protos

EXPOSE 50051

CMD ["npm", "start"]
