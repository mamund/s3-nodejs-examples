/*
  DELETE an object in an existing S3 bucket
  Relies on  ~/.aws/credentials
*/

// modules
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

// params
var params = {};
params.Bucket = 'node-sdk-sample-7b5311fd-4df9-44aa-b67a-69817816b1f6';
params.Key = 'hello_world.txt';

// action
s3.deleteObject(params, function(err,data) {
  if(err) {
    console.log(err,err.stack);
  }
  else {
    console.log(data);
  }
});

