FROM node:18-alpine

WORKDIR /app

# Set npm to use legacy peer deps and increase memory
ENV NODE_OPTIONS="--max-old-space-size=512"

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy source code
COPY . .

EXPOSE 3000

# Run the app in development mode
CMD ["npm", "start"]
