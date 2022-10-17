FROM node:18-alpine

WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json tsconfig.json ./

RUN npm install \
	&& npm run build

COPY . .

EXPOSE 3003

CMD ["node", "dist/server.js"]