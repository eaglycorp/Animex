'use strict'
const Series = use('App/Models/Series')

class SeriesController {
    async index({request, response}) {
        let series = await Series.all()
        return response.json(series)
    }

    
}

module.exports = SeriesController
