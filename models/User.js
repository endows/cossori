Users = Meteor.users

if(Meteor.isServer){

Meteor.publish('users',function(){
  return Users.find()
})

}
