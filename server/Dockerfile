# Multi-stage Dockerfile for Node.js Express Backend
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine AS runner
WORKDIR /app
RUN apk add --no-cache curl
ENV NODE_ENV=production
USER node
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY . .

EXPOSE 5000
HEALTHCHECK --interval=20s --timeout=3s --retries=3 \
  CMD curl -f http://localhost:5000/healthz || exit 1

CMD ["node", "server.js"]
