const concatFiles = require('./stream_concat_files.js');
concatFiles(process.argv[2], process.argv.slice(3), () => {
    console.log('Files concatenated successfully');
});

// node .\stream_concat_files_require.js stream_join_out.txt input.txt fileA.txt