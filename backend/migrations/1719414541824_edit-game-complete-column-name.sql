-- Up Migration
ALTER TABLE games
    RENAME COLUMN game_complete TO game_timestamp;

-- Down Migration
ALTER TABLE games
    RENAME COLUMN game_timestamp TO game_complete;
