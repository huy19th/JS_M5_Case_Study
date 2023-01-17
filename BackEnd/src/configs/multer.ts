import multer from "multer";

export let upload = multer({storage: multer.memoryStorage()});
export let multipleUpload = upload.fields([{name: 'imageUser', maxCount: 1},
{name: 'imageAlbum', maxCount: 1},
{name: 'imageArtist', maxCount: 1},
{name: 'imageSong', maxCount: 1},
{name: 'song', maxCount: 1}]);
