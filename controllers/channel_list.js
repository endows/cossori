if(Meteor.isClient){
  Template.channel_list.helpers({
    channels:function(){
      return Channels.find()
    }
  })

  Template.channel_list.events({
    'submit form':function(e){
      var urlInput = e.target[0]
      var titleInput = e.target[1]
      Meteor.call('addChannel',{
        image:urlInput.value,
        title:titleInput.value
      })
    }
  })

  Meteor.subscribe('channels')
}
