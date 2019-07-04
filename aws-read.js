/*
  READ an object in an existing S3 bucket
  Relies on  ~/.aws/credentials
*/

// modules
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

// params
var params = {};
params.Bucket = 'node-sdk-sample-8a616993-e756-4f3f-8d25-2a04aa756b39';
params.Key = 'hello_world.txt';

// action
s3.getObject(params, function(err,data) {
  if(err) {
    console.log(err,err.stack);
  }
  else {
    console.log(data.Body.toString('utf-8'));
  }
});
