FROM node:16.14.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@8.5.3
RUN npm install --force
COPY . .
RUN npm run build

FROM node:16.14.0-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install -g npm@8.5.3
RUN npm install -g serve
COPY --from=build /usr/src/app/build ./dist
EXPOSE 2002
CMD serve ./dist -C -l 2002
