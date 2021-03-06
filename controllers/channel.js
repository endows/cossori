if (Meteor.isClient) {


  Router.route('/channel/:_id', {
    waitOn: function() {
      return [
        Meteor.subscribe('channels'),
        Meteor.subscribe('users'),
        Meteor.subscribe('postsWithChannel', this.params._id)
      ]
    },

    data: {
      channel:function(){
        return Channels.findOne(Session.get('channel_id'))
      },
      my:function(){
        return Meteor.user()
      },
      posts:function(){
        return Posts.find().fetch().reverse()
      },
      visiters:function(){
        return Channels.findOne(Session.get('channel_id')).visiters
      }
    },


    action: function() {
      Session.set('channel_id',this.params._id)
      Session.set('channel_name',Channels.findOne(this.params._id).title)
      Meteor.call('visit',this.params._id)
      Meteor.call('tweet',"【こっそり実況中】" + Session.get('channel_name'),"http://public-viewing.tk/channel/" + this.params._id)
      if(Meteor.userId()){
        this.render('channel');
      }else{
        this.render('channe_no_login')
      }
    }
  })


  Template.channel.events({
    'submit form': function(e) {
      e.preventDefault()
      var input = e.target[0]
      var flag = e.target[1]
      Posts.insert({
        channel: Session.get('channel_id'),
        user: Meteor.userId(),
        body: input.value
      })

      if (flag.checked) {
        var text = input.value + " #こっそり実況"
        Meteor.call('tweet', text, "http://public-viewing.tk/channel/" + Session.get('channel_id'))
      }

      input.value = ''
    }
  })

}
