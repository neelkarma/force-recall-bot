# Force Recall

> Recover deleted or edited messages.

## Dev Guide

1. Install NodeJS
2. Enable corepack.
3. Clone this repo.
4. `pnpm i`
5. Create a `.env` file with a `BOT_TOKEN` environment variable set to the Discord bot token.
6. `pnpm start`

## Deploy Guide

1. Install Docker.
2. Clone this repo.
3. Create a `.env` file with a `BOT_TOKEN` environment variable set to the Discord bot token.
4. `docker build -t force-recall-bot .`
5. `docker run --env-file .env force-recall-bot`
