'use strict'

const Booking = use('App/Models/Booking')

class BookingController {
    async showPending({params}) {
        let booking = await Booking.findBy('user_id', params.id)
        let pendingBooking = await booking.findBy('status', 'pending')
        return pendingBooking
    }

    async showConfirm({params}) {
        let booking = await Booking.findBy('user_id', params.id)
        let confirmBooking = await booking.findBy('status', 'confirm')
        return confirmBooking
    }

    async accept({params}) {
        
    }
}

module.exports = BookingController
