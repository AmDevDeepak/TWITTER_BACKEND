import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import { config } from "./serverConfig.js";
const { ACCESS_KEY_ID, AWS_REGION, SECRET_ACCESS_KEY, BUCKET_NAME } = config;

aws.config.update({
  region: AWS_REGION,
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
});

const s3 = new aws.S3();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: BUCKET_NAME,
    metadata: function (req, file, cb) {
      cb(null, { fieldName:  file.fieldname});
    },
    acl: "public-read",
    key: function (req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

export default upload;
