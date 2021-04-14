const zlib_compress = require('zlib');
const crypto_sec = require('crypto');
const multipipe = require('multipipe');
module.exports.compressAndEncrypt = password => {
    return multipipe(
        zlib_compress.createGzip(),
        crypto_sec.createCipher('aes192', password)
    );
};