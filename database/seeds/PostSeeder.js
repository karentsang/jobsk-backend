'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Post = use('App/Models/Post')

class PostSeeder {
  async run () {
    await Post.createMany(
      [
        {
          type:'Offering',
          post_img:"https://cdn4.vectorstock.com/i/1000x1000/54/73/cleaning-staff-flat-rounded-square-icon-with-long-vector-7575473.jpg",
          category:'A',
          lat:'22.339099',
          lng:'114.150042',
          price: 36,
          user_id: 3
        },
        {
          type:'Providing',
          post_img:"https://thumbs.dreamstime.com/b/cleaning-staff-character-equipment-cartoon-vector-illustration-company-service-man-uniform-professional-79741730.jpg",
          category:'B',
          lat:'22.338099',
          lng:'114.151042',
          price: 37,
          user_id: 6
        },
        {
          type:'Providing',
          post_img:"https://www.sentralservices.com/sites/default/files/styles/portal_image/public/icon-cleaning.png?itok=KR-Rw1oW",
          category:'C',
          lat:'22.339099',
          lng:'114.152042',
          price: 38,
          user_id: 1
        },
        {
          type:'Offering',
          post_img:"http://www.hoodamathrun.club/wp-content/uploads/ph/thumb-photostock-vector-cleaning-staff-in-different-positions-vector-illustration-cleaning-service-people-vacuuming-and-wash.jpg",
          category:'D',
          lat:'22.337099',
          lng:'114.156042',
          price: 39,
          user_id: 2
        },
        {
          type:'Offering',
          post_img:"https://st4.depositphotos.com/6723736/27222/v/950/depositphotos_272225374-stock-illustration-cleaning-workers-professional-cleaning-staff.jpg",
          category:'E',
          lat:'22.336099',
          lng:'114.159042',
          price: 40,
          user_id: 5
        },
        {
          type:'Offering',
          post_img:"https://cdn3.iconfinder.com/data/icons/hotel-service-staff-chef-waiter-and-receptionist/66/55-512.png",
          category:'F',
          lat:'22.331099',
          lng:'114.151042',
          price: 41,
          user_id: 4
        }
      ]
    )
  }
}

module.exports = PostSeeder
