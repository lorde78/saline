FROM nginx:1.25.0-alpine

ADD nginx.conf /etc/nginx/
ADD server.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443

CMD ["nginx"]