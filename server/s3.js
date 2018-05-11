require('dotenv').config()

const AWS = require('aws-sdk')
const UUID = require('uuid/v4');
const Busboy = require('busboy');
const { AWS_REGION, AWS_BUCKET, AWS_ACCESS_KEY, AWS_SECRET_KEY } = process.env;
AWS.config.update({
    accessKeyId: process.env.AWS_ACCESSKEY,
    secretAccessKey: process.env.AWS_SECRETKEY,
    region: process.env.AWS_REGION
})

const S3 = new AWS.S3()

function uploadObject(req, res){
    let chunks = [],
      fname,
      ftype,
      fEncoding;

    let busboy = new Busboy({ headers: req.headers });
    busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
      console.log(
        'File [' +
          fieldname +
          ']: filename: ' +
          filename +
          ', encoding: ' +
          encoding +
          ', mimetype: ' +
          mimetype
      );

      fname = filename.replace(/ /g, '_');
      ftype = mimetype;
      fEncoding = encoding;
      file.on('data', function(data) {
        console.log(chunks);
        chunks.push(data);
      });
      file.on('end', function() {
        console.log('File [' + filename + '] Finished');
      });
    });
    busboy.on('finish', function() {
      const userId = UUID();
      const params = {
        Bucket: AWS_BUCKET, 
        Body: Buffer.concat(chunks), 
        Key: `${userId}-${fname}`,
        ContentType: ftype, 
        ACL: 'public-read'
      };
     
      S3.upload(params, (err, s3res) => {
        if (err) {
          console.log(err);
          res.status(200).send({ err, status: 'error' });
        } else {
          console.log(s3res);
          res.status(200).send({
            data: s3res,
            status: 'success',
            msg: 'Image successfully uploaded.'
          });
        }
      });
    });
    req.pipe(busboy);

  }

module.exports =  {
    uploadPhoto: uploadObject
}