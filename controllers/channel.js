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
      }
    },


    action: function() {
      Session.set('channel_id',this.params._id)
      this.render('channel');
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
        var text = input.value
        Meteor.call('tweet', text, "http://public-viewing.tk")
      }

      input.value = ''
    }
  })

  window.ads = function() {
    if (Meteor.userId() && !localStorage['tweeted']) {
      var text = "[こっそり実況中]-おおかみこどもの雨と雪-"
      Meteor.call('tweet', text, "http://public-viewing.tk")
      localStorage['tweeted'] = true
    }
  }

  setInterval(function() {
    ads()
  }, 1000)


}
