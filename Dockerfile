FROM node:8.9.4
RUN mkdir -p /usur/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm","start"]