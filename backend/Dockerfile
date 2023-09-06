# DEFAULT SETTINGS
FROM node:18-alpine as base
WORKDIR /var/www/salinebackend
# COPY  ./package*.json /var/www/salinebackend/
COPY  . .
RUN npm install
# RUN npx prisma db push 
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
# COPY ./package*.json .
RUN npm install
CMD ["npm", "start"]
# SETTINGS FOR DEV ENV