FROM node
RUN mkdir /project
WORKDIR /project
COPY . .
RUN npm install
RUN npx tsc
CMD node index.js
