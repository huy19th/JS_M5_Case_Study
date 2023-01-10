import admin from "firebase-admin";
import axios from "axios";
import dotenv from "dotenv";
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
const folder = 'song';

const uploadFirebase = async (req, res) => {
    let file = req.file;
    file.originalname = `${Date.now()}-${file.originalname}`;
    const blob = bucket.file(`${folder}/${file.originalname}`);
    const blobWriter = blob.createWriteStream({
        metadata: {
            contentType: req.file.mimetype
        }
    })

    blobWriter.on('error', (err) => {
        console.log(err)
    })

    blobWriter.on('finish', async () => {
        console.log('File Uploaded');
        let api = `https://firebasestorage.googleapis.com/v0/b/${process.env.STORAGE_BUCKET}/o/${folder}%2F${file.originalname}`;
        let uploadedFileInfo = await axios.get(api);
        console.log(uploadedFileInfo.data.downloadTokens);
        res.status(200).json({ api: api })
    })

    blobWriter.end(file.buffer);


}

export default uploadFirebase;