# DEFAULT SETTINGS
FROM node:18-alpine as base

WORKDIR /var/www/salinefrontend
EXPOSE 3001
# DEFAULT SETTINGS

# SETTINGS FOR PROD ENV
FROM base as production
ENV NODE_ENV=production
COPY . .
RUN npm ci
RUN npm run build
CMD ["npm","serve"]
# SETTINGS FOR PROD ENV

# SETTINGS FOR DEV ENV
FROM base as dev
ENV NODE_ENV=development
COPY . .
RUN npm install
CMD ["npm","dev"]
# SETTINGS FOR DEV ENV