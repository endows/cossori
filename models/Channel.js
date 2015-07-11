Channels = new Meteor.Collection('channels')

if(Meteor.isServer){
  Meteor.publish('channels',function(){
    return Channels.find()
  })

}
