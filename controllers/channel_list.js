if(Meteor.isClient){
  Template.channel_list.helpers({
    channels:function(){
      return Channels.find()
    }
  })

  Meteor.subscribe('channels')
}
