if(Meteor.isClient){
  Template.channel_info.helpers({
    users:function(){
      return Users.find()
    }
  })

  Meteor.startup(function(){
    Meteor.subscribe('users')
  })
}
