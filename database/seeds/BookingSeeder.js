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
    await Booking.createMany(
      [
        {
          start_date:'2019-01-01 12:00:00',
          end_date: '2019-01-01 13:00:00',
          status: 'Completed',
          post_id: 1,
          user_id: 2
        },
        {
          start_date:'2019-08-11 12:00:00',
          end_date: '2019-08-11 13:00:00',
          status: 'Pending',
          post_id: 1,
          user_id: 3
        },
        {
          start_date:'2019-07-01 12:00:00',
          end_date: '2019-07-01 13:00:00',
          status: 'Completed',
          post_id: 1,
          user_id: 4
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-04 13:00:00',
          status: 'Booked',
          post_id: 1,
          user_id: 5
        },
        {
          start_date:'2019-10-01 12:00:00',
          end_date: '2019-10-01 13:00:00',
          status: 'Pending',
          post_id: 6,
          user_id: 5
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-01 13:00:00',
          status: 'Pending',
          post_id: 7,
          user_id: 1
        },
        {
          start_date:'2019-01-01 12:00:00',
          end_date: '2019-01-01 13:00:00',
          status: 'Completed',
          post_id: 8,
          user_id: 1
        },
        {
          start_date:'2019-08-11 12:00:00',
          end_date: '2019-08-11 13:00:00',
          status: 'Pending',
          post_id: 9,
          user_id: 1
        },
        {
          start_date:'2019-07-01 12:00:00',
          end_date: '2019-07-01 13:00:00',
          status: 'Completed',
          post_id: 10,
          user_id: 5
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-04 13:00:00',
          status: 'Booked',
          post_id: 12,
          user_id: 13
        },
        {
          start_date:'2019-10-01 12:00:00',
          end_date: '2019-10-01 13:00:00',
          status: 'Pending',
          post_id: 14,
          user_id: 15
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-01 13:00:00',
          status: 'Pending',
          post_id: 16,
          user_id: 17
        },{
          start_date:'2019-01-01 12:00:00',
          end_date: '2019-01-01 13:00:00',
          status: 'Completed',
          post_id: 18,
          user_id: 19
        },
        {
          start_date:'2019-08-11 12:00:00',
          end_date: '2019-08-11 13:00:00',
          status: 'Pending',
          post_id: 20,
          user_id: 21
        },
        {
          start_date:'2019-07-01 12:00:00',
          end_date: '2019-07-01 13:00:00',
          status: 'Completed',
          post_id: 22,
          user_id: 23
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-04 13:00:00',
          status: 'Booked',
          post_id: 24,
          user_id: 25
        },
        {
          start_date:'2019-10-01 12:00:00',
          end_date: '2019-10-01 13:00:00',
          status: 'Pending',
          post_id: 25,
          user_id: 26
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-01 13:00:00',
          status: 'Pending',
          post_id: 11,
          user_id: 13
        },{
          start_date:'2019-01-01 12:00:00',
          end_date: '2019-01-01 13:00:00',
          status: 'Completed',
          post_id: 14,
          user_id: 23
        },
        {
          start_date:'2019-08-11 12:00:00',
          end_date: '2019-08-11 13:00:00',
          status: 'Pending',
          post_id: 11,
          user_id: 26
        },
        {
          start_date:'2019-07-01 12:00:00',
          end_date: '2019-07-01 13:00:00',
          status: 'Completed',
          post_id: 22,
          user_id: 30
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-04 13:00:00',
          status: 'Booked',
          post_id: 24,
          user_id: 15
        },
        {
          start_date:'2019-10-01 12:00:00',
          end_date: '2019-10-01 13:00:00',
          status: 'Pending',
          post_id: 15,
          user_id: 16
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-01 13:00:00',
          status: 'Pending',
          post_id: 12,
          user_id: 23
        },{
          start_date:'2019-01-01 12:00:00',
          end_date: '2019-01-01 13:00:00',
          status: 'Completed',
          post_id: 11,
          user_id: 3
        },
        {
          start_date:'2019-08-11 12:00:00',
          end_date: '2019-08-11 13:00:00',
          status: 'Pending',
          post_id: 12,
          user_id: 6
        },
        {
          start_date:'2019-07-01 12:00:00',
          end_date: '2019-07-01 13:00:00',
          status: 'Completed',
          post_id: 22,
          user_id: 3
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-04 13:00:00',
          status: 'Booked',
          post_id: 4,
          user_id: 25
        },
        {
          start_date:'2019-10-01 12:00:00',
          end_date: '2019-10-01 13:00:00',
          status: 'Pending',
          post_id: 15,
          user_id: 6
        },
        {
          start_date:'2019-09-01 12:00:00',
          end_date: '2019-09-01 13:00:00',
          status: 'Pending',
          post_id: 15,
          user_id: 3
        },
      ]
    )
  }
}

module.exports = BookingSeeder
