# DEFAULT SETTINGS
FROM node:18-alpine as base
WORKDIR /var/www/salinebackend
COPY  . .
RUN npm install
# RUN npx prisma db push
CMD [ "npm", 'start' ] 
EXPOSE 3001
