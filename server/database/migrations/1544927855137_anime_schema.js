'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AnimeSchema extends Schema {
  up () {
    this.create('animes', (table) => {
      table.increments()
      table.integer('id_series')
      table.string('title', 100)
      table.text('description')
      table.string('status', 10)
      table.integer('tahun', 5)
      table.string('rating', 30)
      table.double('score')
      table.text('studio')
      table.integer('durasi',3)
      table.integer('view')
      table.string('thumbnail', 255)
      table.timestamps()
    })
  }

  down () {
    this.drop('animes')
  }
}

module.exports = AnimeSchema
