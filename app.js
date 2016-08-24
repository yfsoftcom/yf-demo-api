var async = require('async');
var config = require('./config.js');
var M = {};
var v002 = require('./V0.0.2');
var yfserver = require('yf-api-server');
var app = yfserver(config);

async.parallel({
  '0.0.2':function(cb){
    v002(config,M,yfserver.hook).then(function(biz){
      cb(null,biz);
    });
  }
},function(err,results){
    if(err){
      console.log(err);
      return;
    }
    app.setBizModules(results);
    app.start();
  }
);
