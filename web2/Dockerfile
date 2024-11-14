# 1. Use an official Node.js image as the base image
FROM node:20-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the application code to the working directory
COPY . .

# 6. Expose the application on port 3000
EXPOSE 3000

# 7. Specify the command to start the application
CMD ["npm", "start"]
