/*
  ADD a new object to an existing bucket
  Relies upon credentials stored in ~/.aws/crendentials
*/

// get instance of s3 API
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

// vars for this operation
var params = {};
params.Bucket = 'node-sdk-sample-8a616993-e756-4f3f-8d25-2a04aa756b39';
params.Key = 'another_record.txt';
params.Body = 'hello, another!';

s3.putObject(params, function(err,data) {
  if(err) {
    console.log(err,err.stack);
  }
  else {
    console.log(data);
  }
});


