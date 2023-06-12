# Using Node.js 18 as its currently the latest LTS version
# Also using the alpine version to reduce the image size
FROM node:18-alpine

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]