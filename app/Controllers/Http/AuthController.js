'use strict'

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
  }
  
  module.exports = AuthController
  
