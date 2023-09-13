FROM nginx:1.25.0-alpine

ADD nginx.conf /etc/nginx/
ADD server.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443 3010 3011 3020 3021

CMD ["nginx"]