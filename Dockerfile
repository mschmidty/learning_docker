FROM node:16
WORKDIR /app
COPY package*.json .

RUN npm install
## Production
# NPM ci --only=production

COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["npm", "run", "dev"]
