# =========================
# Etapa 1: build do React
# =========================
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# =========================
# Etapa 2: servidor do site
# =========================
FROM node:20-alpine
WORKDIR /app

RUN npm install -g serve
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]