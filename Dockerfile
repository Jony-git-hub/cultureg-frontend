# Étape 1 : build Angular
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
# Build production Angular
RUN npm run build -- --configuration production

# Étape 2 : serveur Nginx
FROM nginx:alpine

# Copier les fichiers buildés Angular vers Nginx
COPY --from=build /app/dist/cultureg-frontend /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
