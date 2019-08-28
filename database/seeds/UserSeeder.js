'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
  async run () {
    await User.createMany(
      [
        {
          // username:'suang1',
          email:'suang1@gmail.com',
          password:'suang123',
          firstname:'suang1',
          bio:'hahaha',
          profile_img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
        },
        {
          // username:'suang2',
          email:'suang2@gmail.com',
          password:'suang223',
          firstname:'suang2',
          bio:'bababa',
          profile_img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
        },
        {
          // username:'suang3',
          email:'suang3@gmail.com',
          password:'suang323',
          firstname:'suang3',
          bio:'cacaca',
          profile_img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
        },
        {
          // username:'suang4',
          email:'suang4@gmail.com',
          password:'suang423',
          firstname:'suang4',
          bio:'dadada',
          profile_img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
        },
        {
          // username:'suang5',
          email:'suang5@gmail.com',
          password:'suang523',
          firstname:'suang5',
          bio:'eaeaea',
          profile_img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
        },
        {
          // username:'suang6',
          email:'suang6@gmail.com',
          password:'suang623',
          firstname:'suang6',
          bio:'fafafa',
          profile_img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png',
        }
      ]
    )
  }
}

module.exports = UserSeeder
