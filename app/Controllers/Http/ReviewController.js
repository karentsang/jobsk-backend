'use strict'

const Review = use('App/Models/Review')

class ReviewController {
    
    async index () {
        let review = await Review.all()
        return review
    }

    async show() {
        let review = await Review
            .query()
            .where('user_id', params.id)
            .fetch()
        return review
    }
}

module.exports = ReviewController
