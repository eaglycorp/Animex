'use strict'
const Anime = use('App/Models/Anime')
const Database = use('Database')
const Redis = use('Redis')
const base_url = 'http://localhost:3333/api'

class AnimeController {

    async index({ request, response }) {

        //get request
        const get = request.get()

        //for pagination
        const limit = parseInt(get.content)
        const page = parseInt(get.page)
        const offset = (page - 1) * limit
        const nextPage = page + 1
        const prevPage = page - 1

        // sort
        const paramsSort = get.sort

        //search
        const paramsSearch = get.search


        if (paramsSearch) {
            let allAnime=[]
            const convertSearch = paramsSearch.split('%20')
            const search = convertSearch.join(' ')
            const animes = await Database.select('*')
                .from('animes')
                .where('title', 'LIKE', '%' + search + '%')
                .orderBy('title')
                .limit(limit)
                .offset(offset)
            const count = await Database.select('*')
                .from('animes')
                .where('title', 'LIKE', '%' + search + '%')
                .orderBy('title')

                let genre = ''

                for(let i = 1; i<animes.length; i++) {
                        genre = await Database.select('genres.title').from('genres').innerJoin('anime_genres', 'genres.id', 'anime_genres.id_genre').where('anime_genres.id_anime', animes[i].id)
                        let detailAnime = animes[i]
                        let gagah={detailAnime, genre}
                        allAnime.push(gagah)
                }    

            return response.json({
                total: count.length,
                perPage: limit,
                page: page,
                lastPage: Math.ceil(count.length / limit),
                nextUrl: base_url + '?search=' + search + '&content=' + limit + '&page=' + nextPage,
                prevUrl: base_url + '?search=' + search + '&content=' + limit + '&page=' + prevPage,
                results: allAnime
            })

        } else {
            let anime = ''
            let count = ''
            let allAnime= []
            switch (paramsSort.toLowerCase()) {
                case 'movie':
                    anime = await Database
                        .select('*')
                        .from('animes')
                        .where('id_series', '5')
                        .orderBy('animes.title')
                        .limit(limit)
                        .offset(offset)
                    count = await Database
                        .select('*')
                        .from('animes')
                        .where('id_series', '5')
                        .orderBy('animes.title')
                    break

                case 'all':
                    anime = await Database.select('*')
                        .from('animes')
                        .orderBy('title', 'asc')
                        .limit(limit)
                        .offset(offset)
                    count = await Database.select('*')
                        .from('animes')
                        .orderBy('title', 'asc')
                    
                        
                    break

                case 'random':

                    const countrandom = Math.floor(Math.random() * 1000);

                    anime = await Database.select('*')
                        .from('animes')
                        .where('id', countrandom)
                        .limit(limit)
                        .offset(offset)
                    count = await Database.select('*')
                        .from('animes')
                        .where('id', countrandom)
                    break

                case 'popular':
                    anime = await Database.select('*')
                        .from('animes')
                        .orderBy('view', 'desc')
                        .limit(limit)
                        .offset(offset)
                    count = await Database.select('*')
                        .from('animes')
                        .orderBy('view', 'desc')
                    break

                case 'trending':
                    anime = await Database.select('*')
                        .from('animes')
                        .where({
                            status: 'Ongoing'
                        })
                        .orderBy('view', 'desc')
                        .limit(limit)
                        .offset(offset)
                    count = await Database.select('*')
                        .from('animes')
                        .where({
                            status: 'Ongoing'
                        })
                        .orderBy('view', 'desc')
                    break

                case 'topall':
                    anime = await Database.select('*')
                        .from('animes')
                        .orderBy('score', 'desc')
                        .limit(limit)
                        .offset(offset)
                    count = await Database.select('*')
                        .from('animes')
                        .orderBy('score', 'desc')
                    break

                case 'latest':
                    anime = await Database.select('animes.*')
                        .from('videos')
                        .innerJoin('animes', 'videos.id_anime', 'animes.id')
                        .orderBy('videos.created_at', 'desc')
                        .limit(limit)
                        .offset(offset)

                    count = await Database.select('animes.*')
                        .from('videos')
                        .innerJoin('animes', 'videos.id_anime', 'animes.id')
                        .orderBy('videos.created_at', 'desc')

                    break

                default:
                    return response.status(401).json('Error 404. Route not found')
            }
            let genre = ''

            for(let i = 0; i<anime.length; i++) {
                    genre = await Database.select('genres.title').from('genres').innerJoin('anime_genres', 'genres.id', 'anime_genres.id_genre').where('anime_genres.id_anime', anime[i].id)
                    let detailAnime = anime[i]
                    let gagah={detailAnime, genre}
                    allAnime.push(gagah)
            }

            return response.json({
                total: count.length,
                perPage: limit,
                page: page,
                lastPage: Math.ceil(count.length / limit),
                nextUrl: base_url + '?sort=' + paramsSort + '&content=' + limit + '&page=' + nextPage,
                prevUrl: base_url + '?sort=' + paramsSort + '&content=' + limit + '&page=' + prevPage,
                results: allAnime
            })
        }
    }

    async anime_genre({ request, response }) {
        const get = request.get()
        const genreName = request.params.genreName

        let allAnime=[]
        // pagination
        const limit = parseInt(get.content)
        const page = parseInt(get.page)
        const offset = (page - 1) * limit
        const nextPage = page + 1
        const prevPage = page - 1

        // sorting genre
        const anime = await Database
            // .raw("select * from anime_genres join animes on anime_genres.id_anime = animes.id join genres on anime_genres.id_genre = genres.id where genres.title = ?", [genreName])
            .select('animes.*')
            .from('anime_genres')
            .innerJoin('animes', 'anime_genres.id_anime', 'animes.id')
            .innerJoin('genres', 'anime_genres.id_genre', 'genres.id')
            .where('genres.title', genreName)
            .limit(limit)
            .offset(offset)

        const count = await Database
            // .raw("select * from anime_genres join animes on anime_genres.id_anime = animes.id join genres on anime_genres.id_genre = genres.id where genres.title = ?", [genreName])
            .select('animes.*')
            .from('anime_genres')
            .innerJoin('animes', 'anime_genres.id_anime', 'animes.id')
            .innerJoin('genres', 'anime_genres.id_genre', 'genres.id')
            .where('genres.title', genreName)

            let genre = ''
            
            for(let i = 1; i<anime.length; i++) {
                    genre = await Database.select('genres.title').from('genres').innerJoin('anime_genres', 'genres.id', 'anime_genres.id_genre').where('anime_genres.id_anime', anime[i].id)
                    let detailAnime = anime[i]
                    let gagah={detailAnime, genre}
                    allAnime.push(gagah)
            }    
            
        return response.json({
            total: count.length,
            perPage: limit,
            page: page,
            lastPage: Math.ceil(count.length / limit),
            nextUrl: base_url + '/genre/' + genreName + '?content=' + limit + '&page=' + nextPage,
            prevUrl: base_url + '/genre/' + genreName + '?content=' + limit + '&page=' + prevPage,
            results: allAnime
        })
    }


    async anime_relation({ request, response }) {
        const get = request.get()
        const genrePertama = get.genrePertama
        const genreKedua = get.genreKedua

        const limit = parseInt(get.content)
        const page = parseInt(get.page)
        const offset = (page-1) * limit
        const nextPage = page + 1
        const prevPage = page - 1

        const genreAnime = await Database.raw('SELECT animes.* FROM animes JOIN (SELECT id_anime,COUNT(id_genre) AS genre FROM anime_genres JOIN genres on anime_genres.id_genre = genres.id WHERE genres.title="'+genrePertama+'" OR genres.title="'+genreKedua+'" GROUP BY id_anime HAVING genre=2) AS a ON animes.id=a.id_anime LIMIT '+limit)
        const count = await Database.raw('SELECT animes.* FROM animes JOIN (SELECT id_anime,COUNT(id_genre) AS genre FROM anime_genres JOIN genres on anime_genres.id_genre = genres.id WHERE genres.title="'+genrePertama+'" OR genres.title="'+genreKedua+'" GROUP BY id_anime HAVING genre=2) AS a ON animes.id=a.id_anime')

        const animeGenre = genreAnime[0]
        console.log(animeGenre[0].id)
        let genre = ''
        let allAnime = []
        for(let i = 0; i<animeGenre.length; i++) {
                genre = await Database.select('genres.title').from('genres').innerJoin('anime_genres', 'genres.id', 'anime_genres.id_genre').where('anime_genres.id_anime', animeGenre[i].id)
                let detailAnime = animeGenre[i]
                let gagah={detailAnime, genre}
                allAnime.push(gagah)
        } 

        return response.json({
            total: count.length,
            perPage : limit,
            page: page,
            lastPage: Math.ceil(count.length / limit),
            nextUrl: base_url + '/related?genrePertama='+genrePertama+'&genreKedua='+genreKedua+'&content='+limit+'&page='+nextPage,
            prevUrl: base_url + '/related?genrePertama='+genrePertama+'&genreKedua='+genreKedua+'&content='+limit+'&page='+prevPage,
            results: allAnime
        })
    }


    async genre_list({ request, response }) {
        const genre = await Database.select('*')
            .from('genres')

        return response.json({
            data: genre
        })
    }


    async anime_detail({ request, response }) {
        const animeId = request.params.id
        const get = request.get()


        const detail = await Database.select('animes.*', 'series.title as type')
            .from('animes')
            .innerJoin('series', 'animes.id_series', 'series.id')
            .where('animes.id', animeId)
        
        let detailAnime = detail[0]

        const genre = await Database.select('genres.title')
            .from('anime_genres')
            .innerJoin('animes', 'anime_genres.id_anime', 'animes.id')
            .innerJoin('genres', 'anime_genres.id_genre', 'genres.id')
            .where('animes.id', animeId)

        return response.json({
            results: {
                detailAnime: detailAnime,
                genres: genre
            }
        })
    }

    async anime_video({ request, response }) {
        const animeId = request.params.id
        const get = request.get()

        //for pagination
        const limit = parseInt(get.content)
        const page = parseInt(get.page)
        const offset = (page - 1) * limit
        const nextPage = page + 1
        const prevPage = page - 1

        const episode = await Database.select('videos.*')
            .from('videos')
            .innerJoin('animes', 'videos.id_anime', 'animes.id')
            .where('animes.id', animeId)
            .orderBy('id', 'desc')
            .limit(limit)
            .offset(offset)

        const count = await Database.select('videos.*')
            .from('videos')
            .innerJoin('animes', 'videos.id_anime', 'animes.id')
            .where('animes.id', animeId)
            .orderBy('id', 'desc')

        return response.json({
            total: count.length,
            perPage: limit,
            page: page,
            lastPage: Math.ceil(count.length / limit),
            nextUrl: base_url + '/anime/' + animeId + '/video?content=' + limit + '&page=' + nextPage,
            prevUrl: base_url + '/anime/' + animeId + '/video?content=' + limit + '&page=' + prevPage,
            results: {
                listVideo: episode
            }
        })
    }

    async detail_video({ request, response }) {

        const animeId = request.params.animeId
        const videoId = request.params.videoId

        const episode = await Database//.raw('select videos.* from videos join animes on videos.id_anime = animes.id where animes.id=' + animeId + ' and videos.id =' + videoId)
        .select('videos.*')
        .from('videos')
        .innerJoin('animes', 'videos.id_anime', 'animes.id')
        .where('animes.id', animeId)
        .andWhere('videos.id', videoId)

        return response.json({
            results: episode
        })
    }

    async anime_abjad({ request, response }) {
        //get request
        const get = request.get()
        const alpha = request.params.alphabet
        
        let allAnime=[]

        //for pagination
        const limit = parseInt(get.content)
        const page = parseInt(get.page)
        const offset = (page - 1) * limit
        const nextPage = page + 1
        const prevPage = page - 1

        const anime = await Database.select('*')
            .from('animes')
            .where('title', 'LIKE', alpha + '%')
            .orderBy('title')
            .limit(limit)
            .offset(offset)
        const count = await Database.select('*')
            .from('animes')
            .where('title', 'LIKE', alpha + '%')
            .orderBy('title')

           
            let genre = ''

            for(let i = 1; i<anime.length; i++) {
                    genre = await Database.select('genres.title').from('genres').innerJoin('anime_genres', 'genres.id', 'anime_genres.id_genre').where('anime_genres.id_anime', anime[i].id)
                    let detailAnime = anime[i]
                    let gagah={detailAnime, genre}
                    allAnime.push(gagah)
            }    

        return response.json({
            total: count.length,
            perPage: limit,
            page: page,
            lastPage: Math.ceil(count.length / limit),
            nextUrl: base_url + '/' + alpha + '?content=' + limit + '&page=' + nextPage,
            prevUrl: base_url + '/' + alpha + '?content=' + limit + '&page=' + prevPage,
            results: allAnime
        })
    }

    async cache_anime() {
        const cachedAnimes = await Redis.get('animes')
        if (this.cachedAnimes) {
            return JSON.parse(cachedAnimes)
        }

        const animes = await Anime.all()
        await Redis.set('animes', JSON.stringify(animes))
        return animes
    }

    async store({ request, response }) {
        const title = request.input('title')
        const description = request.input('description')
        const status = request.input('status')
        const tahun = request.input('tahun')
        const rating = request.input('rating')
        // const score = request.input('score')
        const studio = request.input('studio')
        const durasi = request.input('durasi')
        const view = request.input('view')
        const thumbnail = request.input('thumbnail')
        const id_series = request.input('id_series')

        const anime = new Anime()
        anime.title = title
        anime.description = description
        anime.status = status
        anime.tahun = tahun
        // anime.score = score
        anime.rating = rating
        anime.studio = studio
        anime.durasi = durasi
        anime.view = view
        anime.thumbnail = thumbnail
        anime.id_series = id_series

        await anime.save()
        return response.json
    }

    async select_series({ params, response }) {
        a = await Database.select('*')
            .from('animes')
            .innerJoin('series', 'animes.id_series', 'series.id')
            .where('animes.id_series', params.id)

        return response.json(a)
    }

}

module.exports = AnimeController
