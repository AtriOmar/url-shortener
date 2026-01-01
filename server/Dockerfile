# syntax=docker.io/docker/dockerfile:1

FROM node:22-alpine AS base

####################
# Builder
####################
FROM base AS builder
WORKDIR /app

# Install deps (npm / yarn / pnpm)
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm install; \
  else npm install; \
  fi

# Copy source
COPY . .

# Build app (creates dist/)
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else npm run build; \
  fi


####################
# Runner
####################
FROM base AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 express

 
 # Copy only what we need
 COPY --from=builder /app/dist ./dist
 COPY --from=builder /app/package.json ./package.json
 COPY --from=builder /app/node_modules ./node_modules
 COPY --from=builder /app/public ./public

USER express

CMD ["node", "dist/server.js"]
