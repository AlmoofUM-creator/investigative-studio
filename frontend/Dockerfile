FROM node:18-alpine

WORKDIR /app

# Set npm to use legacy peer deps and increase memory
ENV NODE_OPTIONS="--max-old-space-size=512"

# Copy package files
COPY package*.json ./

# Clean npm cache and install
RUN npm cache clean --force && \
    npm install --no-optional --no-audit --legacy-peer-deps || npm install --legacy-peer-deps

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=0 /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000"]
