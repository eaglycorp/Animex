'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Video extends Model {
    anime() {
        return this.belongsTo('App/Models/Anime', 'id', 'id_anime')
    }
    static get table() {
        return 'videos'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = Video
