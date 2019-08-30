'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookingSchema extends Schema {
  up () {
    this.create('bookings', (table) => {
      table.increments()
      table.datetime('start_date').notNullable()
      table.datetime('end_date').notNullable()
      table.string('status').defaultTo('pending')
      table.integer('user_id').notNullable()
      table.integer('post_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bookings')
  }
}

module.exports = BookingSchema
