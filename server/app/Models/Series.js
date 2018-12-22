'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Series extends Model {
    static get table() {
        return 'series'
    }

    static get primaryKey() {
        return 'id'
    }
}

module.exports = Series
