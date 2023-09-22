# İlk aşama: React uygulamasını build et
FROM node:18 as builder

WORKDIR /app

# Proje bağımlılıklarını kopyala ve bağımlılıkları yükle
COPY package*.json ./
RUN npm install

# Uygulama kaynak kodunu kopyala ve uygulamayı derle
COPY . .
RUN npm run build

# React uygulamasının build dosyalarını Nginx'in çalışacağı dizine kopyala
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]