'use strict'

/*
|--------------------------------------------------------------------------
| SeriesSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

const Series = use('App/Models/Series')

class SeriesSeeder {
  async run () {
    // const s1 = new Series()
    // s1.title='TV'
    // await s1.save()

    // const s2 = new Series()
    // s2.title='Special'
    // await s2.save()

    // const s3 = new Series()
    // s3.title='OVA'
    // await s3.save()

    // const s4 = new Series()
    // s4.title='ONA'
    // await s4.save()

    // const s5 = new Series()
    // s5.title='Movie'
    // await s5.save()
  }
}

module.exports = SeriesSeeder
