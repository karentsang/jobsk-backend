'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Review extends Model {
    user() {
        return this.belongsTo('App/Models/User')
    }
    reviewer() {
        return this.belongsTo('App/Models/User',reviewer_id,id)
    }
}

module.exports = Review
