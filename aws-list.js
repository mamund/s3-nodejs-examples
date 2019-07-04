/*
  LIST objects in an existing S3 bucket
  Relies on  ~/.aws/credentials
*/

// modules
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

// params
var params = {};
params.Bucket = 'node-sdk-sample-8a616993-e756-4f3f-8d25-2a04aa756b39';
params.MaxKeys = 100;

// action
s3.listObjects(params, function(err,data) {
  if(err) {
    console.log(err,err.stack);
  }
  else {
    console.log(data);
  }
});

