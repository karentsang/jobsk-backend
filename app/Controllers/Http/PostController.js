'use strict'

const Post = use('App/Models/Post')
const User = use('App/Models/User')


class PostController {

    async getUserId({params}) {
        let post = await Post.find(params.pid)
        let userId = post.user_id
        return userId
    }

    async indext () {
        let post = await Post.all()
        return post
    }

    async indexOne({params}) {
        let post = await Post.find(params.pid)
        return post
    }
    
    async index ({params}) {
        let post = await Post
            .query()
            .where('type', params.type)
            .fetch()
        return post
    }

    async filter ({params}) {
        let post = await Post
            .query()
            .where({'type': params.type,
                'category': params.filter})
            .fetch()
        return post
    }
    
    async create({ request,params }) {
        let post = new Post()
        post.type = params.type
        post.post_img = request.body.post_img
        post.category = request.body.category
        post.lat = request.body.lat
        post.lng = request.body.lng
        post.price = request.body.price
        post.user_id = request.body.user_id
        await post.save()
        return post
    }

    async show({params}) {
        let post = await Post
            .query()
            .where('user_id', params.id)
            .fetch()
        return post
    }

}

module.exports = PostController
