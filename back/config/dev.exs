use Mix.Config

config :juris, Juris.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "api",
  username: "postgres",
  password: "postgres",
  hostname: "pg-api.docker"
