# DEFAULT SETTINGS
FROM node:20-alpine as base

WORKDIR /var/www
COPY package*.json /
EXPOSE 3000
# DEFAULT SETTINGS

# SETTINGS FOR PROD ENV
FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /
CMD ["node", "bin/www"]
# SETTINGS FOR PROD ENV

# SETTINGS FOR DEV ENV
FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install # nodemon allows the server to automatically reload after each changes
COPY . /
CMD ["nodemon", "bin/www"]
# SETTINGS FOR DEV ENV