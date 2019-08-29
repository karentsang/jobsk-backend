'use strict'

const Post = use('App/Models/Post')
const User = use('App/Models/User')


class PostController {

    async index ({params}) {
        let post = await Post.findBy('type', params.type)
        return post
    }

    async filter ({params}) {
        let post = await Post.findBy('type', params.type)
        let filter = await post.findBy('category', params.filter)
        return filter
    }
    
    async create({ request,params }) {
        let post = new Post()
        post.type = params.type
        post.post_img = request.body.post_img
        post.category = request.body.category
        post.lat = request.body.lat
        post.lng = request.body.lng
        post.price = request.body.price
        await post.save()
        return ('New post created')
    }

    async show({params}) {
        let post = await Post.findBy('user_id', params.id)
        return post
    }

}

module.exports = PostController
