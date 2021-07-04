# BUILD APP
FROM node:12-stretch AS builder
#add user
#RUN addgroup -S myuser && adduser -S myuser -G mygroup

#change user
#USER myuser 

#container working directory
WORKDIR /home/app

#copy from host to target container
COPY . .

#npm ci is like npm i but will be locked to package-lock.json (no minor updates ^#.#.#)
RUN npm ci && npm run build

#SERVE BUILT APP FROM NGINX
FROM nginx:1.17


COPY --from=builder /home/app/build /usr/share/nginx/html