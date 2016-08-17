var moment = require('moment');
var crypto = require('crypto');
var request = require('request');



module.exports = {
    test: function (req, res) {
      var timeFromEpoch = moment.utc().unix();
      var api_key="un7myb8kyp5y2jxkpj6wp454";
      var secret="akj7aBx6yZ";
      var sig = crypto.createHash('sha256').update(api_key + secret + timeFromEpoch).digest('hex');
      var finalUrl = "http://api.stats.com/v1/stats/soccer/fran/standings/?season=2015&accept=json&api_key="+api_key+"&sig=" + sig;

      request.get(finalUrl).pipe(res);
    },
};
