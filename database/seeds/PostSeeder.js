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
          post_img:"https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2019/04/e0ce93ecb4876af5b43fb9a9ef7e7c3c.jpg",
          category:'Photographers',
          lat:'22.339099',
          lng:'114.150042',
          price: 200,
          user_id: 1
        },
        {
          type:'Providing',
          post_img:"https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
          category:'Interior + Designers',
          lat:'22.338099',
          lng:'114.151042',
          price: 200,
          user_id: 1
        },
        {
          type:'Providing',
          post_img:"http://www.tommitchelldrum.com/wp-content/uploads/2016/07/Tom2016-2142-edit-1024x736.jpg",
          category:'Musicians',
          lat:'22.339099',
          lng:'114.152042',
          price: 200,
          user_id: 1
        },
        {
          type:'Offering',
          post_img:"https://www.star2.com/wp-content/uploads/2019/06/130044-770x470.jpeg",
          category:'Painters',
          lat:'22.337099',
          lng:'114.156042',
          price: 200,
          user_id: 1
        },
        {
          type:'Offering',
          post_img:"https://images.businessoffashion.com/site/uploads/2017/03/26_TheTimesAreRacing.jpg?auto=format%2Ccompress&crop=top&fit=crop&h=275&w=494",
          category:'Dancers',
          lat:'22.336099',
          lng:'114.159042',
          price: 200,
          user_id: 1
        },
        {
          type:'Offering',
          post_img:"http://1.bp.blogspot.com/-km7c8z0l6V8/T2Czl7xTBLI/AAAAAAAAS2M/XtYEIFLuraQ/s400/eye-candy-caio-cesar-171.jpg",
          category:'Models',
          lat:'22.331099',
          lng:'114.151042',
          price: 200,
          user_id: 4
        },
        {
          type:'Offering',
          post_img:"http://www.victorialeighphoto.com/wp-content/uploads/2018/05/maxresdefault.jpg",
          category:'Photographers',
          lat:'22.322099',
          lng:'114.122042',
          price: 200,
          user_id: 3
        },
        {
          type:'Providing',
          post_img:"http://www.webthoughtspot.org/wp-content/uploads/2018/10/7-Tips-To-Become-A-Wedding-Photographer-2.jpg",
          category:'Photographers',
          lat:'22.333099',
          lng:'114.133042',
          price: 200,
          user_id: 1
        },
        {
          type:'Providing',
          post_img:"https://i1.adis.ws/i/canon/250d-family-photography-1-1920x1080_d3af94d2-7b91-11e9-ab6e-b8ac6f21b630.jpg?w=100%&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)",
          category:'Photographers',
          lat:'22.344099',
          lng:'114.144042',
          price: 200,
          user_id: 1
        },
        {
          type:'Offering',
          post_img:"https://phototrend.fr/wp-content/uploads/2019/04/canon-eos-250d-lifestyle-7-940x626.jpg",
          category:'Photographers',
          lat:'22.355099',
          lng:'114.155042',
          price: 200,
          user_id: 25
        },
        {
          type:'Offering',
          post_img:"http://hartmandesigngroup.com/sites/default/files/Capture15_3.JPG",
          category:'Interior + Designers',
          lat:'22.366099',
          lng:'114.166042',
          price: 200,
          user_id: 5
        },
        {
          type:'Offering',
          post_img:"https://images.adsttc.com/media/images/5d35/bc32/284d/d171/0e00/021a/newsletter/feature_-_12_ArcherOffice_Camperdown_HRZ.jpg?1520002608",
          category:'Interior + Designers',
          lat:'22.377099',
          lng:'114.177042',
          price: 200,
          user_id: 6
        },
        {
          type:'Offering',
          post_img:"http://www.otoseriilan.com/wp-content/uploads/2019/02/architecture-interior-design-8357.jpg",
          category:'Interior + Designers',
          lat:'22.388099',
          lng:'114.188042',
          price: 200,
          user_id: 7
        },
        {
          type:'Providing',
          post_img:"https://cdnassets.hw.net/dims4/GG/78ac5ed/2147483647/resize/876x%3E/quality/90/?url=https%3A%2F%2Fcdnassets.hw.net%2F65%2Fe5%2Fb30ac57342418152dbf5c7c3f11c%2Ftmpeaae-2etmp-tcm20-1936858.jpg",
          category:'Interior + Designers',
          lat:'22.399099',
          lng:'114.199042',
          price: 200,
          user_id: 8
        },
        {
          type:'Providing',
          post_img:"https://media2.fdncms.com/sacurrent/imager/u/original/21764181/jim_cullum.jpg",
          category:'Musicians',
          lat:'22.439099',
          lng:'114.252042',
          price: 200,
          user_id: 5
        },
        {
          type:'Offering',
          post_img:"https://cdn.mos.cms.futurecdn.net/MJ4xmbGcbsKZda5XEkjZGc-320-80.jpg",
          category:'Musicians',
          lat:'22.3012374',
          lng:'114.1859092',
          price: 200,
          user_id: 10
        },
        {
          type:'Offering',
          post_img:"https://bestdigitalpianoguides.com/wp-content/uploads/2016/01/Learning-musical-theory-with-playing-piano.jpg",
          category:'Musicians',
          lat:'22.336099',
          lng:'114.359042',
          price: 200,
          user_id: 11
        },
        {
          type:'Offering',
          post_img:"https://image.shutterstock.com/image-photo/beautiful-woman-playing-piano-260nw-475801879.jpg",
          category:'Musicians',
          lat:'22.311099',
          lng:'114.131042',
          price: 200,
          user_id: 12
        },
        {
          type:'Offering',
          post_img:"http://eltecolote.org/content/wp-content/uploads/2016/10/Anthony-Holdsworth_07web.jpg",
          category:'Painters',
          lat:'22.239099',
          lng:'114.250042',
          price: 200,
          user_id: 15
        },
        {
          type:'Providing',
          post_img:"http://www.authordorothyslikker.com/wp-content/uploads/2019/01/GettyImages-922707682-5b90467bc9e77c0025931eef.jpg",
          category:'Painters',
          lat:'22.338099',
          lng:'114.191042',
          price: 200,
          user_id: 14
        },
        {
          type:'Providing',
          post_img:"https://cdn8.dissolve.com/p/D985_58_216/D985_58_216_1200.jpg",
          category:'Painters',
          lat:'22.319099',
          lng:'114.152042',
          price: 200,
          user_id: 15
        },
        {
          type:'Offering',
          post_img:"https://cdn6.dissolve.com/p/D985_58_214/D985_58_214_1200.jpg",
          category:'Painters',
          lat:'22.307099',
          lng:'114.106042',
          price: 200,
          user_id: 16
        },
        {
          type:'Offering',
          post_img:"https://www.danceinforma.com/wp-content/uploads/2018/07/Dance-Medicine.jpg",
          category:'Dancers',
          lat:'22.326099',
          lng:'114.179042',
          price: 200,
          user_id: 17
        },
        {
          type:'Offering',
          post_img:"https://www.out.com/sites/out.com/files/2015/05/29/whelan_yi-chun_wu-main.jpg",
          category:'Dancers',
          lat:'22.351099',
          lng:'114.251042',
          price: 200,
          user_id: 25
        },
        {
          type:'Offering',
          post_img:"https://www.emotions.ae/wp-content/uploads/2019/05/hip-hop-dance-1.jpg",
          category:'Dancers',
          lat:'22.329099',
          lng:'114.100042',
          price: 200,
          user_id: 19
        },
        {
          type:'Providing',
          post_img:"https://cdn8.dissolve.com/p/D985_47_236/D985_47_236_1200.jpg",
          category:'Dancers',
          lat:'22.398099',
          lng:'114.191042',
          price: 200,
          user_id: 15
        },
        {
          type:'Providing',
          post_img:"https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2014/10/dani-diamond-posing-how-to-model-photogaphy-best-top-fstoppersb.jpg",
          category:'Models',
          lat:'22.369099',
          lng:'114.162042',
          price: 200,
          user_id: 21
        },
        {
          type:'Offering',
          post_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpueycNxu5aGanLQXJXCB7M5hzZHj9AUEqS1mXHynTONAG6VV",
          category:'Models',
          lat:'22.347099',
          lng:'114.146042',
          price: 200,
          user_id: 22
        },
        {
          type:'Offering',
          post_img:"http://7-themes.com/data_images/out/72/7019081-model-girl-miranda-kerr.jpg",
          category:'Models',
          lat:'22.296099',
          lng:'114.199042',
          price: 200,
          user_id: 23
        },
        {
          type:'Offering',
          post_img:"https://data.whicdn.com/images/272302293/superthumb.jpg?t=1483154764",
          category:'Models',
          lat:'22.281099',
          lng:'114.151042',
          price: 200,
          user_id: 24
        }
      ]
    )
  }
}

module.exports = PostSeeder
