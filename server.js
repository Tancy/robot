var express = require('express');
// online
//var robot = require('dingtalk-robot')('0da9ad7d030cb10f398076d764c2af6089945f9453e5090c2c6a539684e8f5d6');

// daily
var robot = require('dingtalk-robot')('067234d560ad32c41989a1fe69c05a336b445591cec3ff786aae397d332b4c34');

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/send', function(req, res) {

  if(req.query.title !='undefined' && req.query.md !='undefined'){
    var md = decodeURIComponent(req.query.md);
    robot.send({
      msgtype: 'markdown',
      markdown: {
          title: 'robot',
          text: md
        }
    }, function(err, data) {
        if (err) {
            res.jsonp({'status':'no','error':err});
            return;
        }
        res.jsonp({'status':'ok'});
    });
  }else{
    res.jsonp({status:'error'});
  }
});
app.listen(7001, function () {
  console.log('Example app listening on port 7001!');
});