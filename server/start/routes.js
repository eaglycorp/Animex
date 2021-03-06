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
    Route.get('', 'MovieController.index')
    Route.get('/related', 'MovieController.anime_relation')
    Route.get('/cache', 'UserController.index')
    Route.get('/anime/:id', 'MovieController.anime_detail')
    Route.get('/anime/:id/video', 'MovieController.anime_video')
    Route.get('/anime/:animeId/video/:videoId', 'MovieController.detail_video')
    Route.get('/genre', 'MovieController.genre_list')
    Route.get('/:alphabet', 'MovieController.anime_abjad')
    Route.get('/genre/:genreName', 'MovieController.anime_genre')
   
}).prefix('api') 
