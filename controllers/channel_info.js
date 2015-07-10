if(Meteor.isClient){
  Template.channel_info.helpers({
    users:function(){
      return Users.find()
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
  })
}
