FROM node:19

WORKDIR /app

COPY . .

RUN npm install

RUN npx webpack

CMD [ "npm", "start" ]