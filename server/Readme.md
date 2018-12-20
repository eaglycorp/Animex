- Create .env file manuali in folder server
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
    DB_PASSWORD= Your Database Password
    DB_DATABASE=Your Database Name
    SESSION_DRIVER=cookie
    HASH_DRIVER=bcrypt
 
 - Change Directory to server cd server
 - Run Server using 
    adonis serve --dev
 
 
 
