# DEFAULT SETTINGS
FROM node:18-alpine as base
WORKDIR /var/www/salinefrontend
COPY . .
CMD ["npm" , "start"]
EXPOSE 3001
# DEFAULT SETTINGS

# SETTINGS FOR PROD ENV
FROM base as production
ENV NODE_ENV=production
COPY . .
# SETTINGS FOR PROD ENV

# SETTINGS FOR DEV ENV
FROM base as dev
ENV NODE_ENV=development
RUN npm cache clean --force
RUN npm install
RUN npm install nodemon --save-dev
EXPOSE 3001
# SETTINGS FOR DEV ENV