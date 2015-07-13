if(Meteor.isClient){
  Router.route('/', {
    action:function(){
      Meteor.call('visit','')
      this.render('channel_list');
    },
    waitOn:function(){
      return [
        Meteor.subscribe('channels'),
        Meteor.subscribe('users')
      ]
    }


  })
  Template.channel_list.helpers({
    channels:function(){
      return Channels.find()
    }
  })

  Template.channel_list.events({
    'submit form':function(e){
      var urlInput = e.target[0]
      var titleInput = e.target[1]
      if(urlInput.value && titleInput.value){
        Meteor.call('addChannel',{
          image:urlInput.value,
          title:titleInput.value
        })    
      }

    }
  })


}
