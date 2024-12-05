FROM node:14 AS build

#build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

#production
FROM nginx:1.24.0
RUN rm -rf /etc/nginx/conf.d
COPY ./react_nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/public
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]