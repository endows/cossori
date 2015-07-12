if(Meteor.isClient){
  Router.configure({
    layoutTemplate: 'body'
  })

  Router.route('/', function () {
    this.render('channel_list');
  })

  Router.route('/channel/:_id',{
    waitOn: function () {
      // return one handle, a function, or an array
      return Meteor.subscribe('channels');
    },

    action: function () {
      this.render('channel');
    }
  })

  Router.route('/info',function(){
    this.render('info')
  })
}
