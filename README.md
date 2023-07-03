# Crystal Bot

Crystal Bot is a general purpose mineflayer bot written in Typescript using a class based approach.

## Running
```
npm install
npm run build
npm start
```

Or with docker:

```
docker build --pull --rm -f "dockerfile" -t crystalbot:latest "."
docker run --env-file .env --volume mineflayer-profiles:/profiles --name crystal-bot -d crystalbot:latest
```

Running the code in docker and connecting to `localhost` will not work as the container is isolated from the actual pc.
To connect to a server running on the same pc as the bot, use `host.docker.internal` instead of `localhost`.

## Configuration
Crystal Bot uses a `.env` file to configure the bot. An example is provided in `.env.example`. The following environment variables are used:

| Field    | Value                                   | Required? |
|----------|-----------------------------------------|-----------|
| USERNAME | The username of the bot.                | ✔         |
| HOST     | The server address to connect to.       | ✔         |
| PORT     | The server port to connect to.          | ✘         |
| VERSION  | The minecraft version to use.           | ✘         |
| AUTH     | The auth method to use when logging in. | ✘         |
| OWNER    | The username of the owner of the bot.   | ✘         |

