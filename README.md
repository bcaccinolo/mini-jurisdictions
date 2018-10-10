# mini-jurisdictions

![alt text](https://github.com/bcaccinolo/mini-jurisdictions/blob/master/img/screenshot.png)

## What is Mini-Jurisdiction?

It is a demo project to develop my tech competencies.

The backend is done with Elixir with the help of Plug and Cowboy.

The frontend is done with React and SemanticUI.

Functionaly speaking, this project lists all the existing jurisdictions in the world.

There is also a search field to look for a specific jurisdiction.

## Fuzzy search

The search is fuzzy, it means that if you search for 'gren', you will get in return 'Grenade' and 'Greece' even if Greece doesn't contain the letter 'n'.

This feature is based on the Postgres extension 'pg_trgm'.
It splits every query in a list of 3 letters blocks called 'trigrams.

For example:
```
SELECT show_trgm('Leo');

returns {" l"," le","eo ",leo}
```

## Docker?

To keep the setup simple, the Postgres DB is in a Docker image.

The good thing is that this dependency doesn't need to be installed.

