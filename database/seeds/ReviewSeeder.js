'use strict'

/*
|--------------------------------------------------------------------------
| ReviewSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Review = use('App/Models/Review')

class ReviewSeeder {
  async run () {
    await Review.createMany(
      [
        {
          star: 5,
          comment: 'good',
          user_id: 1,
          reviewer_id: 2
        },
        {
          star: 4,
          comment: 'goodgood',
          user_id: 1,
          reviewer_id: 3
        },
        {
          star: 3,
          comment: 'goodgoodgood',
          user_id: 4,
          reviewer_id: 5
        },
        {
          star: 2,
          comment: 'goodgoodgoodgoodgood',
          user_id: 6,
          reviewer_id: 1
        },
        {
          star: 5,
          comment: 'goodgoodgoodgoodgood',
          user_id: 2,
          reviewer_id: 4
        },
        {
          star: 1,
          comment: 'goodgoodgoodgoodgoodgoodgood',
          user_id: 3,
          reviewer_id: 6
        }
      ]
    )
  }
}

module.exports = ReviewSeeder
