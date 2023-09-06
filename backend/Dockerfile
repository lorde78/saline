# DEFAULT SETTINGS
FROM node:18-alpine as base
WORKDIR /var/www/salinebackend
COPY  . .
RUN npm install
# RUN npx prisma db push 
EXPOSE 3001
