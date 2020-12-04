FROM node
ADD . /home/app
WORKDIR /home/app
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]