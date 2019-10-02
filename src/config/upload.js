const path = require("path");
const multer = require("multer");

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..", "..", "uploads"),
        filename: (request, file, callback) => {
            const extension = path.extname(file.originalname);
            const filename = path.basename(file.originalname, extension);

            callback(null, `${filename}-${Date.now()}${extension}`);
        }
    })
};
