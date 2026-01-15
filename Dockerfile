# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Define build arguments for environment variables
ARG VITE_BASE_URL

# Set environment variables during the build process
ENV VITE_BASE_URL=$VITE_BASE_URL

RUN npm run build

# Production Stage
FROM nginx:stable-alpine AS production

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]