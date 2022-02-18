FROM node:lts-alpine as builder
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
RUN npm run build

FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/package*.json .
COPY --from=builder /usr/src/app/dist .
RUN npm install --production --silent

EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["node", "main.js"]
