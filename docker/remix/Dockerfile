# DEFAULT SETTINGS
FROM node:20-alpine as base

WORKDIR /var/www
COPY package*.json /
EXPOSE 3001
# DEFAULT SETTINGS

# SETTINGS FOR PROD ENV
FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["npm", "start"]
# SETTINGS FOR PROD ENV

# SETTINGS FOR DEV ENV
FROM base as dev
ENV NODE_ENV=development
RUN npm install
COPY . /
CMD ["npm", "start"]
# SETTINGS FOR DEV ENV