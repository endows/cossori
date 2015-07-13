if(Meteor.isClient){
  Router.configure({
    layoutTemplate: 'body'
  })





  Router.route('/info',function(){
    this.render('info')
  })
}
