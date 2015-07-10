if(Meteor.isClient){
  Template.channel_info.helpers({
    users:function(){
      return Users.find()
    },
    my:function(){
      return Meteor.user()
    },
    posts:function(){
      return Posts.find()
    }
  })

  Template.channel_info.events({
    'submit form':function(e){
      e.preventDefault()
      var input = e.target[0]
      var flag = e.target[1]
      Posts.insert({
        user:Meteor.userId(),
        body:input.value
      })

      if(flag){
        var text = input.value + " #金曜ロードショー #おおかみこどもの雨と雪"
        Meteor.call('tweet',text,"http://public-viewing.tk")
      }
      
      input.value = ''
    }
  })

  window.ads = function(){
    if(Meteor.userId() && !localStorage['tweeted']){
      var text = "「おおかみこどもの雨と雪」の実況なう #金曜ロードショー #おおかみこどもの雨と雪"
      Meteor.call('tweet',text,"http://public-viewing.tk")
      localStorage['tweeted'] = true
    }
  }

  setInterval(function(){
    ads()
  },1000)

  Meteor.startup(function(){
    Meteor.subscribe('users')
    Meteor.subscribe('posts')
  })
}
