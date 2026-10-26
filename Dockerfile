# Prototype Kit 14 requires Node.js 22 or later
FROM node:24.22.1-alpine3.23

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

RUN mkdir -p .tmp

# Set production environment
ENV NODE_ENV=production

# Change ownership to non-root user and switch to it
RUN chown -R 1001:1001 /app
USER 1001

EXPOSE 3000
CMD ["npm", "start"]
