'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    const u1 = new User()
    u1.name = 'Fitra'
    u1.username = 'fitraaditama7'
    u1.email = 'fitraaditama7@gmail.com'
    u1.password = 'pass1'
    await u1.save()

    const u2 = new User()
    u2.name = 'Risman'
    u2.username = 'rsmn'
    u2.email = 'rsmnalay@gmail.com'
    u2.password = 'pass2'
    await u2.save()
  }
}

module.exports = UserSeeder
