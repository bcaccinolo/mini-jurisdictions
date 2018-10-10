# Mini-Jurisdiction Backend

## Setup the database

To launch the Postgres database, you need to have a Docker machine installed.

You will also need to install dnsdock (https://github.com/aacebedo/dnsdock) to allow accessing a docker image through an alias.
```
docker run -d -v /var/run/docker.sock:/var/run/docker.sock --name dnsdock --restart=always -p 172.18.0.1:53:53/udp aacebedo/dnsdock:latest-amd64
```

Then when this is installed, you just need to launch:
```
cd ops/
docker-compose up
```

### Run migrations
```mix ecto.migrate```

### Loads Seeds
```mix seeds.load```

### Activate fuzzy search
```mix db.set_extension```

## Launch the server
```
iex -S mix
```
The server is launched on the port 3100.

## Access endpoints

### Paginated list of jurisdictions

http://localhost:3100/jurisdictions/1

### Search

http://localhost:3100/fuzzy/bul

## Testing

### DB setup for testing
```
 MIX_ENV=test mix ecto.drop
 MIX_ENV=test mix ecto.create
 MIX_ENV=test mix ecto.migrate
 MIX_ENV=test mix seeds.load
 MIX_ENV=test mix db.set_extension
```

## Possible setup problem

Running iex, there was this kind if problem:
```
iex -S mix

== Compilation error in file lib/repo.ex ==
** (CompileError) lib/repo.ex:2: module Ecto.Repo is not loaded and could not be found
    (elixir) expanding macro: Kernel.use/2
    lib/repo.ex:2: Repo (module)
```

To solve this:
```
mix deps.clean --all
mix deps.get
iex -S mix
```
