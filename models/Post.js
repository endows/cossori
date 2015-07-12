Posts = new Meteor.Collection('posts')
Posts._transform = function(doc){
  doc.user = Users.findOne(doc.user)
  return doc
}

if(Meteor.isServer){
  Meteor.publish('postsWithChannel',function(channel_id){
    return Posts.find({channel:channel_id})
  })
}
