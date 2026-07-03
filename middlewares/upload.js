import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";


//test fist time in cloudirary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 20 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith("image/")) {
            return cb(new Error("Only image files are allowed!"), false);
        }
        cb(null, true);
    },
});


export const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                folder: "instagram-clone",
            },
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
    });
};


export default upload;