# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16.16 as build-stage
LABEL stage=builder
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG env=test
RUN npm run build -- --output-path=./dist/out --configuration $env

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginxinc/nginx-unprivileged:1.23
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

