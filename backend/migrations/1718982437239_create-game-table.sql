-- Up Migration
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    game_name VARCHAR(255) NOT NULL,
    player1 VARCHAR(255) NOT NULL,
    player2 VARCHAR(255) NOT NULL,
    game_complete TIMESTAMPTZ,
    winner VARCHAR(255) NOT NULL
);

-- Down Migration

DROP TABLE games;
