const Wreck = require('@hapi/wreck');

const wreckVideo = async (req, res) => {
    return new Promise((resolve, reject) => {
        resolve(Wreck.request('GET',
            'https://archive.org/download/isforAto1953/isforAto1953_512kb.mp4',
            { redirects: 3 },
            (err, response) => {

                if (err) {
                    throw err;
                }

                let sent = 0;
                res.response.on('peek', (chunk) => {

                    sent += chunk.length;
                    process.stdout.write(sent + ' bytes written to response \r');
                });
            }));
    });
};

module.exports = wreckVideo;
