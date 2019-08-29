'use strict'

const User = use('App/Models/User')

class UserController {
    async show({params}) {
        let user = await User.find(params.id)
        return user
    }

    async edit({request, params}) {
        let user = await User.find(params.id)
        user.bio = request.body.bio
        await user.save()
        return ('Bio updated')
    }
}

module.exports = UserController
