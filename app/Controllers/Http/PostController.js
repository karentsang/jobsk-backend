'use strict'

const Post = use('App/Models/Post')

class PostController {

    async indexS ({request, response, params}) {
        let post = await Post.find('type', 'service')
        return post
    }

    async indexJ ({request, response, params}) {
        let post = await Post.all()
        return post
    }
}

module.exports = PostController
