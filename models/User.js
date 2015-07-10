Users = Meteor.users

Meteor.publish('users',function(){
  return Users.find()
})
