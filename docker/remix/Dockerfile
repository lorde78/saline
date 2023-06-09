# DEFAULT SETTINGS
FROM node:18-alpine as base

WORKDIR /var/www/salinefrontend
COPY package*.json .
EXPOSE 3001
# DEFAULT SETTINGS

# SETTINGS FOR PROD ENV
FROM base as production
ENV NODE_ENV=production
COPY . .
RUN npm install
CMD ["npm", "run", "build"]
CMD ["npm", "start"]
# SETTINGS FOR PROD ENV

# SETTINGS FOR DEV ENV
FROM base as dev
ENV NODE_ENV=development
RUN npm cache clean --force
RUN npm install
# SETTINGS FOR DEV ENV