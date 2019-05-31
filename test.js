// var fs = require('fs');
// fs.open(
//     'info.txt', 'r',
//     function (err, handle) { // we'll see more about the err param in a bit
//         var buf = new Buffer(100000);
//         fs.read(
//             handle, buf, 0, 100000, null,
//             function (err, length) {
//                 console.log(buf.toString('utf8', 0, length));
//                 fs.close(handle, function () { /* don't care */ });
//             }
//         );
//     }
// ); 

var fs = require('fs');
fs.open(
    'info.txt', 'r',
    function (err, handle) {
        if (err) {
            console.log("ERROR: " + err.code
                + " (" + err.message + ")");
            return;
        }
        var buf = new Buffer(100000);
        fs.read(
            handle, buf, 0, 100000, null,
            function (err, length) {
                if (err) {
                    console.log("ERROR: " + err.code +
                        " (" + err.message + ")");
                    return;
                }
                console.log(buf.toString('utf8', 0, length));
                fs.close(handle, function () { /* don't care */ });
            }
        );
    }
); 