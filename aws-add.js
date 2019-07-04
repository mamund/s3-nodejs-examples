/*
  ADD a new object to an existing bucket
  Relies on  ~/.aws/credentials
*/

// modules
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

// params
var params = {};
params.Bucket = 'node-sdk-sample-8a616993-e756-4f3f-8d25-2a04aa756b39';
params.Key = 'another_record.txt';
params.Body = 'hello, another!';

// action
s3.putObject(params, function(err,data) {
  if(err) {
    console.log(err,err.stack);
  }
  else {
    console.log(data);
  }
});


