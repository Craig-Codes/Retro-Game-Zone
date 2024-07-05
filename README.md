# Retro Game Hub

The retro game hub allows users to play two classic games, Noughts & Crosses, and Connect 4. Users can enjoy the games with an 8-bit music tack, controlled via a draggable CD component which persists across games. There is also a leaderboard and game history stored in a database, allowing for some competition amongst users.

Here's an overview:

https://github.com/Craig-Codes/Retro-Game-Zone/assets/48647012/3e309fc9-9f5d-4474-8a96-127117a35626

## Running the App

1. Clone this repo
2. Create a .env file at the top level, adding the following:

```
        POSTGRES_HOST=database
        POSTGRES_USER=postgres
        POSTGRES_PASSWORD=password123
        POSTGRES_DB=gamezone-db
        POSTGRES_PORT=5432
```

3. The application is dockerised, so run 'make build' in the terminal
4. Run the database migrations (only required the first time the app is run). Run 'make run-migration' in the terminal

The app is now up and running, with an active database which will now persist data when the app is stopped and restarted. View the makefile for a full list of commands.

## Technologies

### Frontend

The frontend uses [React](https://react.dev/) with [Vite](https://vitejs.dev/) to setup the development environment. TypeScript is also used, as it provides a robust, scalable, and developer-friendly approach to building complex JavaScript applications. The combination of static typing, advanced language features, and improved tooling make TypeScript the language of choice for modern frontends.

### Backend

The backend used [Node.js](https://nodejs.org/en), and the [express](https://expressjs.com/) framework, along with TypeScript.

#### <ins>API Endpoints</ins>

The API uses REST principles, with two simple endpoints, one to retrieve the last 10 games played, along with the top 3 players, and another to upload the results of a game.

GET /game expected response:

```
{
  "history": [
    {
      "id": 31,
      "game_name": "Connect Four",
      "player1": "Tom",
      "player2": "John",
      "game_timestamp": "2024-07-05T08:53:55.878Z",
      "winner": "John"
    },
    {
      "id": 30,
      "game_name": "Noughts & Crosses",
      "player1": "Craig",
      "player2": "Matt",
      "game_timestamp": "2024-07-05T08:53:30.487Z",
      "winner": "Craig"
    },
    {
      "id": 29,
      "game_name": "Connect Four",
      "player1": "Craig",
      "player2": "Ryan",
      "game_timestamp": "2024-07-04T12:32:17.403Z",
      "winner": "Ryan"
    },
    {
      "id": 28,
      "game_name": "Noughts & Crosses",
      "player1": "Player 1",
      "player2": "Player 2",
      "game_timestamp": "2024-07-03T08:48:33.268Z",
      "winner": "Player 1"
    },
    {
      "id": 27,
      "game_name": "Noughts & Crosses",
      "player1": "Player 1",
      "player2": "Player 2",
      "game_timestamp": "2024-07-01T09:24:01.226Z",
      "winner": "Player 1"
    },
    {
      "id": 26,
      "game_name": "Connect Four",
      "player1": "Player 1",
      "player2": "Player 2",
      "game_timestamp": "2024-07-01T09:22:39.607Z",
      "winner": "Player 1"
    },
    {
      "id": 25,
      "game_name": "Noughts & Crosses",
      "player1": "Player 1",
      "player2": "Player 2",
      "game_timestamp": "2024-07-01T07:49:21.159Z",
      "winner": "Player 1"
    },
    {
      "id": 24,
      "game_name": "Connect Four",
      "player1": "Craig",
      "player2": "Karen",
      "game_timestamp": "2024-06-28T17:09:37.815Z",
      "winner": "Craig"
    },
    {
      "id": 23,
      "game_name": "Noughts & Crosses",
      "player1": "Craig",
      "player2": "Karen",
      "game_timestamp": "2024-06-28T17:08:14.855Z",
      "winner": "Karen"
    },
    {
      "id": 22,
      "game_name": "Noughts & Crosses",
      "player1": "Craig",
      "player2": "Stefano",
      "game_timestamp": "2024-06-28T14:04:56.029Z",
      "winner": "Stefano"
    }
  ],
  "leaderboard": [
    {
      "player": "Craig",
      "games_won": "10",
      "latest_game": "2024-07-05T08:53:30.487Z"
    },
    {
      "player": "Tom",
      "games_won": "8",
      "latest_game": "2024-06-28T11:39:44.500Z"
    },
    {
      "player": "Player 1",
      "games_won": "5",
      "latest_game": "2024-07-03T08:48:33.268Z"
    }
  ]
}
```

POST /game expects a request body:

```
{"gameName": "test",
     "timeStamp": "2024-07-05T12:34:56.789Z",
      "winner": "Craig",
      "player1": "Craig",
      "player2": "Andy"}
```

with a successful response being:

```
{
  "message": "success"
}
```

### Database

The app uses PostgreSQL in a docker container, which is connected to and queried using the pg (node-postgres) package [pg](https://www.npmjs.com/package/pg)

DB migrations are handled using the node-pg-migrate package [node-pg-migrate](https://www.npmjs.com/package/node-pg-migrate/v/2.23.0)

### Infrastructure

The app makes use of Docker, allowing it to be deployed quickly and easy across multiple platforms.

The backend and frontend have their own Dockerfiles, ensuring the containers have the correct dependancies.

Docker Compose is then used to orchestrate the containers, along with spinning up the database and an isntance of pgadmin to help administer the database through a GUI. Docker Compose also controls the setup of the network, allowing the containers to communicate, along with the creation of volumes to persist data. Finally, the file allows environment variables to be accessed by the relevant containers.
