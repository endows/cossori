Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({
    service: "twitter"
  })
  ServiceConfiguration.configurations.insert({

    "service": "twitter",
    "consumerKey": "rp02I9NlanW0Rt1vC6GA",
    "secret": "0II62Hr66QiOKjmASsexCrzPJChkxon1icm2avyQrvM"
  })
})
