# DEFAULT SETTINGS
FROM node:18-alpine as base

WORKDIR /var/www/salinebackend
VOLUME test-ci-cd/backend
COPY  . .
RUN npm install
EXPOSE 3001
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
WORKDIR /var/www/salinebackend
EXPOSE 3001
CMD ["npm", "dev"]
# SETTINGS FOR DEV ENV