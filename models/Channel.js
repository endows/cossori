Channels = new Meteor.Collection('channels')

if(Meteor.isServer){
  Meteor.publish('channels',function(){
    return Channels.find()
  })

  Meteor.methods({
    'addChannel':function(new_channel){
      Channels.insert(new_channel)
    }
  })

}
