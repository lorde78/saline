# DEFAULT SETTINGS
FROM node:18-alpine as base
WORKDIR /var/www/salinebackend
EXPOSE 3000
# DEFAULT SETTINGS

# SETTINGS FOR PROD ENV
FROM base as production
ENV NODE_ENV=production
COPY . .
RUN npm ci
CMD ["npm", "start"]
# SETTINGS FOR PROD ENV

# SETTINGS FOR DEV ENV
FROM base as dev
ENV NODE_ENV=development
COPY ./package*.json .
RUN npm install
CMD ["npm", "start:dev"]
# SETTINGS FOR DEV ENV