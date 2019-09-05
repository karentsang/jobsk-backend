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
          bio:'Suang is a super model based in Hong Kong',
          profile_img:'https://randomuser.me/api/portraits/men/83.jpg',
        },
        {
          // username:'suang2',
          email:'sukalst@gmail.com',
          password:'suang223',
          firstname:'Tim',
          bio:'Tim ORourke is a leading professional commercial photographer based in Hong Kong.',
          profile_img:'https://tophotography.com/wp-content/uploads/2014/05/10404118_10152383847071020_926386005955461653_n.jpg',
        },
        {
          // username:'suang3',
          email:'sabrinaforever.fu@gmail.com',
          password:'suang323',
          firstname:'Sabrina',
          bio:'Sabrina is a U.K trained painter based in Hong Kong',
          profile_img:'https://images.app.goo.gl/2U9eFDpyVRbD1CS79',
        },
        {
          // username:'suang4',
          email:'sukalst@gmail.com',
          password:'suang423',
          firstname:'Olivia',
          bio:'British-Hong Kong DJ/producer Olivia Dawn has been shaking up the industry with her unique talent at the age of 25.',
          profile_img:'https://images.app.goo.gl/j2EMKd7kVyxqWA8Q8',
        },
        {
          // username:'suang5',
          email:'sukalst@gmail.com',
          password:'suang523',
          firstname:'Zihao',
          bio:'Zihao is a dance tutor based in Hong Kong and Macau.',
          profile_img:'https://images.app.goo.gl/TvYsMHexWsHPGMcu8',
        },
        {
          // username:'suang6',
          email:'sukalst@gmail.com',
          password:'suang623',
          firstname:'Harrison',
          bio:'Harrison Wong, founder of Harrison Wong Ltd based in Hong Kong ',
          profile_img:'https://randomuser.me/api/portraits/men/18.jpg',
        },
        {
          // username:'suang1',
          email:'suang1@gmail.com',
          password:'suang123',
          firstname:'suang1',
          bio:'Suang is a super model based in Hong Kong',
          profile_img:'https://randomuser.me/api/portraits/women/40.jpg',
        },
        {
          // username:'suang2',
          email:'sukalst@gmail.com',
          password:'suang223',
          firstname:'Tim',
          bio:'Tim ORourke is a leading professional commercial photographer based in Hong Kong.',
          profile_img:'https://randomuser.me/api/portraits/men/26.jpg',
        },
        {
          // username:'suang3',
          email:'sabrinaforever.fu@gmail.com',
          password:'suang323',
          firstname:'Sabrina',
          bio:'Sabrina is a U.K trained painter based in Hong Kong',
          profile_img:'https://randomuser.me/api/portraits/men/62.jpg',
        },
        {
          // username:'suang4',
          email:'sukalst@gmail.com',
          password:'suang423',
          firstname:'Olivia',
          bio:'British-Hong Kong DJ/producer Olivia Dawn has been shaking up the industry with her unique talent at the age of 25.',
          profile_img:'https://randomuser.me/api/portraits/women/80.jpg',
        },
        {
          // username:'suang5',
          email:'sukalst@gmail.com',
          password:'suang523',
          firstname:'Zihao',
          bio:'Zihao is a dance tutor based in Hong Kong and Macau.',
          profile_img:'https://randomuser.me/api/portraits/women/76.jpg',
        },
        {
          // username:'suang6',
          email:'sukalst@gmail.com',
          password:'suang623',
          firstname:'Harrison',
          bio:'Harrison Wong, founder of Harrison Wong Ltd based in Hong Kong ',
          profile_img:'https://randomuser.me/api/portraits/men/58.jpg',
        },
        {
          // username:'suang1',
          email:'suang1@gmail.com',
          password:'suang123',
          firstname:'suang1',
          bio:'Suang is a super model based in Hong Kong',
          profile_img:'https://randomuser.me/api/portraits/men/79.jpg',
        },
        {
          // username:'suang2',
          email:'sukalst@gmail.com',
          password:'suang223',
          firstname:'Tim',
          bio:'Tim ORourke is a leading professional commercial photographer based in Hong Kong.',
          profile_img:'https://randomuser.me/api/portraits/men/71.jpg',
        },
        {
          // username:'suang3',
          email:'sabrinaforever.fu@gmail.com',
          password:'suang323',
          firstname:'Sabrina',
          bio:'Sabrina is a U.K trained painter based in Hong Kong',
          profile_img:'https://randomuser.me/api/portraits/men/27.jpg',
        },
        {
          // username:'suang4',
          email:'sukalst@gmail.com',
          password:'suang423',
          firstname:'Olivia',
          bio:'British-Hong Kong DJ/producer Olivia Dawn has been shaking up the industry with her unique talent at the age of 25.',
          profile_img:'https://randomuser.me/api/portraits/women/11.jpg',
        },
        {
          // username:'suang5',
          email:'sukalst@gmail.com',
          password:'suang523',
          firstname:'Zihao',
          bio:'Zihao is a dance tutor based in Hong Kong and Macau.',
          profile_img:'https://randomuser.me/api/portraits/women/42.jpg',
        },
        {
          // username:'suang6',
          email:'sukalst@gmail.com',
          password:'suang623',
          firstname:'Harrison',
          bio:'Harrison Wong, founder of Harrison Wong Ltd based in Hong Kong ',
          profile_img:'https://randomuser.me/api/portraits/women/17.jpg',
        },
        {
          // username:'suang1',
          email:'suang1@gmail.com',
          password:'suang123',
          firstname:'suang1',
          bio:'Suang is a super model based in Hong Kong',
          profile_img:'https://randomuser.me/api/portraits/women/58.jpg',
        },
        {
          // username:'suang2',
          email:'sukalst@gmail.com',
          password:'suang223',
          firstname:'Tim',
          bio:'Tim ORourke is a leading professional commercial photographer based in Hong Kong.',
          profile_img:'https://randomuser.me/api/portraits/women/73.jpg',
        },
        {
          // username:'suang3',
          email:'sabrinaforever.fu@gmail.com',
          password:'suang323',
          firstname:'Sabrina',
          bio:'Sabrina is a U.K trained painter based in Hong Kong',
          profile_img:'https://randomuser.me/api/portraits/women/12.jpg',
        },
        {
          // username:'suang4',
          email:'sukalst@gmail.com',
          password:'suang423',
          firstname:'Olivia',
          bio:'British-Hong Kong DJ/producer Olivia Dawn has been shaking up the industry with her unique talent at the age of 25.',
          profile_img:'https://randomuser.me/api/portraits/women/65.jpg',
        },
        {
          // username:'suang5',
          email:'sukalst@gmail.com',
          password:'suang523',
          firstname:'Zihao',
          bio:'Zihao is a dance tutor based in Hong Kong and Macau.',
          profile_img:'https://randomuser.me/api/portraits/men/51.jpg',
        },
        {
          // username:'suang6',
          email:'sukalst@gmail.com',
          password:'suang623',
          firstname:'Harrison',
          bio:'Harrison Wong, founder of Harrison Wong Ltd based in Hong Kong ',
          profile_img:'https://randomuser.me/api/portraits/men/15.jpg',
        },
        {
          // username:'suang1',
          email:'suang1@gmail.com',
          password:'suang123',
          firstname:'suang1',
          bio:'Suang is a super model based in Hong Kong',
          profile_img:'https://randomuser.me/api/portraits/men/44.jpg',
        },
        {
          // username:'suang2',
          email:'sukalst@gmail.com',
          password:'suang223',
          firstname:'Tim',
          bio:'Tim ORourke is a leading professional commercial photographer based in Hong Kong.',
          profile_img:'https://randomuser.me/api/portraits/men/17.jpg',
        },
        {
          // username:'suang3',
          email:'sabrinaforever.fu@gmail.com',
          password:'suang323',
          firstname:'Sabrina',
          bio:'Sabrina is a U.K trained painter based in Hong Kong',
          profile_img:'https://randomuser.me/api/portraits/men/57.jpg',
        },
        {
          // username:'suang4',
          email:'sukalst@gmail.com',
          password:'suang423',
          firstname:'Olivia',
          bio:'British-Hong Kong DJ/producer Olivia Dawn has been shaking up the industry with her unique talent at the age of 25.',
          profile_img:'https://randomuser.me/api/portraits/men/31.jpg',
        },
        {
          // username:'suang5',
          email:'sukalst@gmail.com',
          password:'suang523',
          firstname:'Zihao',
          bio:'Zihao is a dance tutor based in Hong Kong and Macau.',
          profile_img:'https://randomuser.me/api/portraits/women/28.jpg',
        },
        {
          // username:'suang6',
          email:'sukalst@gmail.com',
          password:'suang623',
          firstname:'Harrison',
          bio:'Harrison Wong, founder of Harrison Wong Ltd based in Hong Kong ',
          profile_img:'https://randomuser.me/api/portraits/men/54.jpg',
        },
      ]
    )
  }
}

module.exports = UserSeeder
