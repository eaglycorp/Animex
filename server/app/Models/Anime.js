'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Anime extends Model {
    series() {
        return this.hasOne('App/Models/Series', 'id', 'id_series')
    }
    static get table() {
        return 'animes'
    }

    static get primaryKey() {
        return 'id'
    }
}


module.exports = Anime
