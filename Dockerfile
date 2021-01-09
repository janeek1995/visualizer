FROM node:14.15.4-stretch

COPY . /app
WORKDIR /app
EXPOSE 8080
CMD ["./run.sh"]
