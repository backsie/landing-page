FROM nginx:alpine

# Copy static files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY privacy-policy.html /usr/share/nginx/html/
COPY terms-of-service.html /usr/share/nginx/html/
COPY apple-touch-icon.png /usr/share/nginx/html/
COPY favicon-16x16.png /usr/share/nginx/html/
COPY favicon-32x32.png /usr/share/nginx/html/
COPY favicon.ico /usr/share/nginx/html/
COPY logo.png /usr/share/nginx/html/
COPY hero.mp4 /usr/share/nginx/html/
COPY fonts /usr/share/nginx/html/fonts
COPY public /usr/share/nginx/html/public

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
