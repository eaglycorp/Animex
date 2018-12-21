# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Setting .env 
Create .env file manualy in folder server
```bash
HOST=0.0.0.0
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=mEbW0Nez90SxfI7dBt4kgYMfXDowzDVk
DB_CONNECTION=mysql
DB_HOST=Your Database Host
DB_PORT=Your Port
DB_USER=Your Database User
DB_PASSWORD= YOur Database Password
DB_DATABASE=animes
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt
```
### Endpoint
| end Point     | description   |
| ------------- | ------------- |
| https://animeapp1.herokuapp.com/api?sort=all&content=10&page=1 | get all anime  |
| https://animeapp1.herokuapp.com/api?sort=movie&content=10&page=1  | get all movie  |
| https://animeapp1.herokuapp.com/api?sort=random&content=10&page=1  | get random anime  |
| https://animeapp1.herokuapp.com/api?sort=popular&content=10&page=1  | get popular anime  |
| https://animeapp1.herokuapp.com/api?sort=trending&content=10&page=1  | get trending anime  |
| https://animeapp1.herokuapp.com/api?sort=topall&content=10&page=1  | get top anime  |
| https://animeapp1.herokuapp.com/api?sort=latest&content=10&page=1  | get new anime  |
| https://animeapp1.herokuapp.com/api/genre  | get all genre  |
| https://animeapp1.herokuapp.com/api/anime/id | get det detail anime  |
| https://animeapp1.herokuapp.com/api/anime/id/video?content=10&page=1  | get all episode anime  |
| https://animeapp1.herokuapp.com/api/genre/Action?content=10&page=1 | get anime with genre |
| https://animeapp1.herokuapp.com/api/A?content=10&page=1 | get sort by aplhabet |
| https://animeapp1.herokuapp.com/api/related?genrePertama=idgenre1&genreKedua=idgenre2&content=10&page=1 | get anime with genre |
