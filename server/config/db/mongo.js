var mongoose = require('mongoose');
var config = {
   port: process.env.PORT || 8000,
   db: process.env.MONGOLAB_URI || 'mongodb://localhost/solive_test'
};

module.exports = mongoose.connect(config.db, function(err) {
   if (err) {
      throw err;
   }
   console.log("succesfully connected to db : solive_test");
});
