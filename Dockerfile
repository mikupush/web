FROM node:22 AS builder

WORKDIR /build

COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.29.2

COPY --from=builder /build/dist /usr/share/nginx/html
