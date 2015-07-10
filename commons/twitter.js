
if (Meteor.isServer) {
  Meteor.methods({
    tweet: function(text,url) {
      var ACCESS_TOKEN = Meteor.user().services.twitter.accessToken
      var ACCESS_TOKEN_SECRET = Meteor.user().services.twitter.accessTokenSecret
      console.log(Meteor.user())
      var Twitter = Meteor.npmRequire('twitter')
      var client = new Twitter({
        consumer_key: "rp02I9NlanW0Rt1vC6GA",
        consumer_secret: "0II62Hr66QiOKjmASsexCrzPJChkxon1icm2avyQrvM",
        access_token_key: ACCESS_TOKEN,
        access_token_secret: ACCESS_TOKEN_SECRET
      });
      client.post('statuses/update', {status: text + ' ' + url},  function(error, tweet, response){
        if(error) throw error;
        console.log(tweet);  // Tweet body.
        console.log(response);  // Raw response object.
      });
    }
  })
}
