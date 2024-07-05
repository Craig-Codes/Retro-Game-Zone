# Retro Game Hub

The retro game hub allows users to play two classic games, Noughts & Crosses, and Connect 4. There is also a leaderboard and game history stored in a database, allowing for some competition amongst users.

Here's an overview:

## Environmentals

Place the following into a .env file at the same level as the docker-compose file:

POSTGRES_HOST=database
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password123
POSTGRES_DB=gamezone-db
POSTGRES_PORT=5432

## Database Migrations

Handled using the node-pg-migrate package

1. Run the containers (make build / make up)
2. Run the migrate command (make ) run-migration

# Backend

To update: npx tsc - converts to typescript ready to deploy

# Running the App (1st time)

1. create a .env file in the RetroGameZone directory, adding the values in this README to it
2. In the CMD run 'make build' to build our containers
3. Run 'make up' to run the containers
4. Run database migrations - run 'make run-migration'

The app is now up and running, with a live database!
