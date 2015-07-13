if(Meteor.isClient){
  Router.configure({
    layoutTemplate: 'body'
  })

  Router.route('/', function () {
    Meteor.call('visit','')
    this.render('channel_list');

  })



  Router.route('/info',function(){
    this.render('info')
  })
}
