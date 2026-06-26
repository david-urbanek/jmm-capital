#!/bin/bash
# Wrapper pro shadcnblocks — načte API klíč z .env.local automaticky
export SHADCNBLOCKS_API_KEY=$(grep SHADCNBLOCKS_API_KEY .env.local | cut -d= -f2)
pnpm dlx shadcn@4.10.0 add "$@"
