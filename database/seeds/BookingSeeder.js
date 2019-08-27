'use strict'

/*
|--------------------------------------------------------------------------
| BookingSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Booking = use('App/Models/Booking')

class BookingSeeder {
  async run () {
    await Booking.creatMany(
      [
        {
          start_date:'2019-01-01 12:00:00',
          end_date: '2019-01-01 13:00:00',
          status: 'Completed',
          post_id: 1,
          user_id: 3
        },
        {
          start_date:'2019-08-11 12:00:00',
          end_date: '2019-08-11 13:00:00',
          status: 'Completed',
          post_id: 1,
          user_id: 6
        },
        {
          start_date:'2019-07-01 12:00:00',
          end_date: '2019-07-01 13:00:00',
          status: 'Completed',
          post_id: 2,
          user_id: 3
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-04 13:00:00',
          status: 'Booked',
          post_id: 4,
          user_id: 5
        },
        {
          start_date:'2019-10-01 12:00:00',
          end_date: '2019-10-01 13:00:00',
          status: 'Pending',
          post_id: 5,
          user_id: 6
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-01 13:00:00',
          status: 'Pending',
          post_id: 1,
          user_id: 3
        }
      ]
    )
  }
}

module.exports = BookingSeeder
