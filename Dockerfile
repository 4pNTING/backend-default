FROM node:20
WORKDIR /app

COPY package*.json ./

# Install all dependencies including devDependencies for tsc and tsc-alias
RUN npm install --legacy-peer-deps

COPY . .

# Build the project
RUN npm run build

# Fix the typescript path aliases in the built dist directory
RUN npx --yes tsc-alias

# Expose the API and gRPC ports
EXPOSE 3000 9897

# Start the application
CMD ["node", "dist/main.js"]
