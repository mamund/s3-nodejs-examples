/*
  CREATE new bucket and add an object
  relies on ~/.aws/credentials
*/

// load libs & get instance of s3 API
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
var s3 = new AWS.S3();

// Create a bucket and upload something into it
var bucketName = 'node-sdk-sample-' + uuid.v4();
var keyName = 'hello_world.txt';
var body = 'Hello, World!';

var bucketParams = {};
bucketParams.Bucket = bucketName;

var objectParams = {};
objectParams.Bucket = bucketName;
objectParams.Key = keyName;
objectParams.Body = body;

s3.createBucket(bucketParams, function() {
  s3.putObject(objectParams, function(err, data) {
    if (err)
      console.log(err)
    else
      console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
  });
});
