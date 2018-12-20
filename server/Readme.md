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
