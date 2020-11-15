FROM node:15.0.1-stretch

COPY . /app
WORKDIR /app
EXPOSE 8080
CMD ["./run.sh"]
