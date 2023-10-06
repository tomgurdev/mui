FROM node:18
MAINTAINER "Tom Gur"
RUN mkdir -p /opt/app
COPY . /opt/app
WORKDIR /opt/app
RUN npm install --save react react-dom react-scripts  -g
RUN npm install
EXPOSE 443
ENTRYPOINT ["node" , "server.js"]