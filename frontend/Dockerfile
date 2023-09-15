# DEFAULT SETTINGS
FROM node:18-alpine as base

WORKDIR /var/www/salinefrontend
EXPOSE 3001
# SETTINGS FOR DEV ENV
FROM base as dev
ENV NODE_ENV=development
COPY . .
RUN npm install
CMD ["npm","dev"]
# SETTINGS FOR DEV ENV