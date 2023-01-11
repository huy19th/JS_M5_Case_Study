import admin from "firebase-admin";
import axios from "axios";
import dotenv from "dotenv";
import { MetadataWithSuchNameAlreadyExistsError } from "typeorm";
dotenv.config();

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        privateKey: process.env.PRIVATE_KEY,
        clientEmail: process.env.CLIENT_EMAIL
    }),
    storageBucket: process.env.STORAGE_BUCKET
})

const bucket = admin.storage().bucket();

const uploadFirebase = async (req, res, next) => {
    let files = req.files;
    let fileToBeUploaded = Object.keys(files).length;
    let fileUploaded = 0;
    for (let field in files) {
        let file = files[field][0];
        let folder = field;
        file.originalname = `${Date.now()}-${file.originalname}`;
        const blob = bucket.file(`${folder}/${file.originalname}`);
        const blobWriter = blob.createWriteStream({
            metadata: {
                contentType: file.mimetype
            }
        })
        blobWriter.on('error', (err) => {
            console.log(err)
        })
        blobWriter.on('finish', async () => {
            console.log('File Uploaded');
            let api = `https://firebasestorage.googleapis.com/v0/b/${process.env.STORAGE_BUCKET}/o/${folder}%2F${file.originalname}`;
            let uploadSucessInfo = await axios.get(api);
            let public_url = `${api}?alt=media&token=${uploadSucessInfo.data.downloadTokens}`;
            req.body[field] = public_url;
            fileUploaded++;
            if (fileUploaded == fileToBeUploaded) {
                next();
            }
        })
        blobWriter.end(file.buffer);
    }
}

export default uploadFirebase;