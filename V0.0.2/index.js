'use strict';
var _ = require('underscore');
var async = require('async');
var Q = require('q');
module.exports = function(C,M,H){
  var q = Q.defer();

  M.test = function(){
    var _q = Q.defer();
    _q.resolve({data:"中文和zimu from v0.0.2"})
    return _q.promise;
  }
  q.resolve({'foo':M});
  return q.promise;
};
