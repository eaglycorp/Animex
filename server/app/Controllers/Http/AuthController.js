'use strict'
const User = use('App/Models/User')
const {validate} = use('Validator')

class AuthController {
    async register({request, auth, response}) {
        const rules = {
            email:'required|email|unique:users,email',
            username: 'required|unique:users,username',
            name: 'required',
            password: 'required|min:8'
        }
        const register = request.only([
            'name',
            'username',
            'email',
            'password'
        ])

        const validation = await validate(register, rules)
        if (validation.fails()){
            return validation.messages()
        } else {
            const user = new User()
            user.name = register.name
            user.username = register.username
            user.email = register.email
            user.password = register.password

            await user.save()

            const accessToken = await auth.withRefreshToken().generate(user)
            return response.json({
                'user': user,
                'access_token': accessToken
            })
        }
    }

    async login({request, auth, response}) {
        const rules = {
            email:'email'
        }
        const login = request.only([
            'email',
            'password'
        ])
        const email = login.email
        const password = login.password

        const validation = await validate(email, rules)
        if (validation.fails()) {
            const user = await User.findBy('username',email)
            if (user) {
                const accessToken = await auth.withRefreshToken().attempt(user.email,password)
                return response.json({
                    'user': user,
                    'access_token': accessToken
                })
            } else {
                return response.status(401).json({
                    field: 'email',
                    message: 'Cannot find user with provided email'
                })
            }
        } else {
            const user = await User.findBy('email',email)
            const accessToken = await auth.withRefreshToken().attempt(email,password)
            return response.json({
                'user': user,
                'access_token': accessToken
            })
        }
    }
}

module.exports = AuthController
