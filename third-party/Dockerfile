FROM node:16 
WORKDIR /app 
COPY package.json ./ 
RUN npm install 
COPY src/ ./src 
EXPOSE 5000 
CMD ["npm", "start"] 
