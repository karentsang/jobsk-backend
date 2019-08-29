'use strict'

const Review = use('App/Models/Review')

class ReviewController {
    async show() {
        let review = await Review.findBy('user_id', params.id)
        return review
    }
}

module.exports = ReviewController
