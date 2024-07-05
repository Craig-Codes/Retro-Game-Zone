import pg_migrate from "node-pg-migrate";
import type { RunnerOption } from "node-pg-migrate";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });

const env = {
  PGUSER: process.env.POSTGRES_USER,
  PGPASSWORD: process.env.POSTGRES_PASSWORD,
  PGHOST: "172.21.0.2",
  PGPORT: process.env.POSTGRES_PORT,
  PGDATABASE: process.env.POSTGRES_DB,
};

const databaseUrl = `postgres://${env.PGUSER}:${env.PGPASSWORD}@${env.PGHOST}:${env.PGPORT}/${env.PGDATABASE}`;

const options: RunnerOption = {
  databaseUrl: databaseUrl,
  migrationsTable: "pgmigrations",
  dir: "migrations",
  direction: "up",
  count: 1,
  ignorePattern: "",
};

export default async () => await pg_migrate(options);
