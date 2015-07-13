Channels = new Meteor.Collection('channels')
Channels._transform = function(doc){
  doc.visiters = Users.find({visiting:doc._id})
  return doc
}


if(Meteor.isServer){
  Meteor.publish('channels',function(){
    return Channels.find()
  })

  Meteor.methods({
    'addChannel':function(new_channel){
      Channels.insert(new_channel)
    }
  })

}
