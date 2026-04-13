const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY || "public_Y20J5XgvKrs+aaYYHFUiJebKDts=",
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT || "https://ik.imagekit.io/gj0o1xcrm"
});

async function uploadFile(buffer) {

    const result = await imagekit.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    });

    return result;
}

module.exports = uploadFile;