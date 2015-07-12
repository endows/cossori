Users = Meteor.users
Users._transform = function(doc){
  doc.visiting = Channels.findOne(doc.visiting)
  return doc
}

if (Meteor.isServer) {

  Meteor.publish('users', function() {
    return Users.find()
  })

  Meteor.methods({
    'visit':function(channel_id){
      Users.update({_id:this.userId},{$set:{visiting:channel_id}})
    }
  })

}
