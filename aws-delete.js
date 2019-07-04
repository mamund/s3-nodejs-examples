/*
  DELETE an object in an existing S3 bucket
  Relies upon credentials stored in ~/.aws/crendentials
*/

// vars for this operation
var params = {};
params.Bucket = 'node-sdk-sample-7b5311fd-4df9-44aa-b67a-69817816b1f6';
params.Key = 'hello_world.txt';

var AWS = require('aws-sdk');
var s3 = new AWS.S3();

s3.deleteObject(params, function(err,data) {
  if(err) {
    console.log(err,err.stack);
  }
  else {
    console.log(data);
  }
});

