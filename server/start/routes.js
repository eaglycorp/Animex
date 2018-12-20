'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.group( () => {
    Route.post('/auth/register', 'AuthController.register')
    Route.post('/auth/login', 'AuthController.login')
    Route.get('', 'AnimeController.index')
    // .middleware(['auth:jwt'])
    Route.get('/related', 'AnimeController.anime_relation')
    Route.get('/cache', 'UserController.index')
    Route.get('/anime/:id', 'AnimeController.anime_detail')
    Route.get('/anime/:id/video', 'AnimeController.anime_video')
    Route.get('/anime/:animeId/video/:videoId', 'AnimeController.detail_video')
    Route.get('/genre', 'AnimeController.genre_list')
    Route.get('/:alphabet', 'AnimeController.anime_abjad')
    Route.get('/genre/:genreName', 'AnimeController.anime_genre')
   
}).prefix('api') 
