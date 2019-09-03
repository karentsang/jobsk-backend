'use strict'
const User = use('App/Models/User')

class AuthController {

    async register ({request, response, auth}) {
      let { email, password, firstname, bio, profile_img } = request.body
      let user = new User()
      user.email = email
      user.password = password
      user.firstname = firstname
      user.bio = bio
      user.profile_img = profile_img
      await user.save()

      let accessToken = await auth.generate(user)
      response.send('Account Created')
        return response.json({"user": user, "access_token": accessToken})
      }
  
    async login ({request, response, auth}) {
        let { email, password } = request.body
        try {
          if (await auth.attempt(email, password)) {
            let user = await User.findBy('email', email)
            let accessToken = await auth.generate(user)
            return response.send({"user":user, "access_token": accessToken})
          }
        }
        catch (e) {
          return response.json({message: 'You first need to register!'})
        }
      }

      async loginGoogle({request, response, auth}) {
        let { email,uid,firstname,img } = request.body
        let test = await User.findBy('email',email)
        try{
          if (test==null) {
            let user = new User()

            user.email = email
            user.password = uid
            user.firstname = firstname
            user.profile_img = img
            await user.save()
            
            let accessToken = await auth.generate(user)
            response.send('Account Created')
            return response.json({"user": user, "access_token": accessToken})
          }
          else{
            let accessToken = await auth.generate(test)
            response.send('Account Retrieved')
            return response.json({"user": test, "access_token": accessToken})
          }
        }
        catch(e){
          return response.json({message: 'You already have an account'})
        }
      }
  }
  
  module.exports = AuthController
  
