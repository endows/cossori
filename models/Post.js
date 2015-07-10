Posts = new Meteor.Collection('posts')
Posts._transform = function(doc){
  doc.user = Users.findOne(doc.user)
  return doc
}

if(Meteor.isServer){
  Meteor.publish('posts',function(){
    return Posts.find()
  })

}
