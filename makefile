include .env
export

build:
	docker compose build

up:
	docker compose up

down:
	docker compose down

rebuild: build up 

prod-build:
	docker-compose -f docker-compose.prod.yml build

prod-up:
	docker-compose -f docker-compose.prod.yml up

prod-down:
	docker-compose -f docker-compose.prod.yml down

pull:
	git pull

redeploy: pull prod-build prod-up

exec-frontend:
	docker exec -it retro-game-zone-frontend /bin/sh

exec-backend:
	docker exec -it retro-game-zone-backend /bin/sh

exec-nginx:
	docker exec -it retrogamezone_nginx_1 /bin/sh

exec-databse:
	docker exec -it retrogamezone_nginx_1 /bin/sh

run-migration: 
	docker exec -it retro-game-zone-backend /bin/sh -c 'export DATABASE_URL=${POSTGRES_USER}://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB} && npm run migrate:up'


