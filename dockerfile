FROM node:12.18.3 as build-deps
WORKDIR /usr/src/app
COPY ./build ./
# COPY package.json yarn.lock ./
# RUN yarn
# COPY . ./
# RUN yarn build

FROM nginx:1.12-alpine
COPY --from=build-deps /usr/src/app /usr/share/nginx/html
# COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

#docker build -f dockerfile -t comms-login .
#docker run -p 9005:80 comms-login
