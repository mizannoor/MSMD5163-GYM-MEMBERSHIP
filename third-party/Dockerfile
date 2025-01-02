FROM node:14 
WORKDIR /app 
COPY package.json ./ 
RUN npm install 
COPY src/ ./src 
EXPOSE 6000 
CMD ["npm", "start"] 
