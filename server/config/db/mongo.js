var mongoose = require('mongoose');
var config = {
   port: process.env.PORT || 8000,
   db: 'mongodb://root:azerty@ds023475.mlab.com:23475/blog'


};

module.exports = mongoose.connect(config.db, function(err) {
   if (err) {
      throw err;
   }
   console.log("succesfully connected to db : solive_test");
});
