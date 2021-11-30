FROM node:16-alpine AS setup

WORKDIR /app

COPY ./src ./

FROM setup AS build

RUN npm ci && npm run build

FROM node:16-alpine

WORKDIR /app

COPY --from=build /app/package* ./
COPY --from=build /app/__dist ./__dist
COPY --from=build /app/node_modules ./node_modules
