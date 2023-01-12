import multer from "multer";

export let upload = multer({storage: multer.memoryStorage()});
export let multipleUpload = upload.fields([{name: 'image', maxCount: 1}, {name: 'file', maxCount: 1}]);