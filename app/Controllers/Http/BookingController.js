'use strict'

const Booking = use('App/Models/Booking')
const Post = use('App/Models/Post')

class BookingController {
    async index () {
        let booking = await Booking.all()
        return booking
    }

    async showPending({params}) {
        let pendingBooking = await Booking
            .query()
            .where({
                'user_id': params.id,
                'status': 'Pending'})
            .fetch()
        return pendingBooking
    }

    async showConfirm({params}) {
        let confirmBooking = await Booking
            .query()
            .where({
                'user_id': params.id,
                'status': 'Confirm'})
            .fetch()
        return confirmBooking
    }

    async create({request, params}) {
        let booking = new Booking()
        booking.start_date = request.body.start_date
        booking.end_date = request.body.end_date
        booking.user_id = request.body.user_id
        booking.post_id = params.id
        await booking.save()
        return (`Booking created:${booking}`)
    }

    async accept({params}) {
        let acceptBooking = await Booking.find(params.bid)
        if (acceptBooking.status == 'Completed') {
            return('Booking already completed!')
        }
        else{
            acceptBooking.status = 'Confirm'
            await acceptBooking.save()
            // console.log(acceptBooking)
            let otherBookings = await Booking
                .query()
                .where('post_id',acceptBooking.post_id)
                .whereNot('status', 'Confirm')
                .whereNot('status', 'Completed')
                .update({status: 'Reject'})

            let rejectBooking = await Booking.query().where('post_id',acceptBooking.post_id).fetch()
            return rejectBooking
        } 
    }

    // async showConfirmed({params}) {
    //     let all = await this.accept({params})
    //     let booking = await all.query().where('status', 'Confirm').fetch()
    //     return booking
    // }

    // async showOthers({params}) {
    //     let all = await this.accept({params})
    //     let bookings = await all.query().whereNot('status', 'Confirm').fetch()
    //     return bookings
    // }
}

module.exports = BookingController
