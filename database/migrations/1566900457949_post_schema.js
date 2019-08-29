'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('type').notNullable()
      table.string('post_img')
      table.string('category').notNullable()
      table.string('lat').notNullable()
      table.string('lng').notNullable()
      table.integer('price').notNullable()
      table.integer('user_id').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
