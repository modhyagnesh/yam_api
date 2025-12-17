FROM node:18-alpine
 
WORKDIR /app
 
COPY package.json package-lock.json* yarn.lock* ./
 
RUN npm install --production
 
COPY . .
 
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1341
 
EXPOSE 1341
 
CMD ["npm", "start"]

 