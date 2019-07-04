/*
  LIST S3 buckets for this credential pair
  Relies upon credentials stored in ~/.aws/crendentials
*/

// vars for this operation
var params = {};

// get instance of s3 api
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

s3.listBuckets(params, function(err,data) {
  if(err) {
    console.log(err,err.stack);
  }
  else {
    console.log(data);
  }
});

