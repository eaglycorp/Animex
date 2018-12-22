'use strict'
const Genre = use('App/Models/Genre')


class GenreController {
    async index({request, response}) {

        // const query = 'select *from genres'
        // return response.json(query)


        // const a = await Genre.select('*').from('genres')
        // return a

        let genres = await Genre.all()
        return response.json(genres)
    }
}

module.exports = GenreController
