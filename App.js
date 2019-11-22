// const fs = require('fs');


// const userName = 'Max';

// fs.writeFile('user-data.txt', 'Name: ' + userName, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('WROTE FILE')
// }); 

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('INCOMING Request');
//     console.log(req.method, req.url);


//     if (req.method === 'POST') {
//         let body = '';
//         req.on('end', () => {
//             console.log(body);
//             res.end('<h1>GOT ITTT</h1>')
//         });
//         req.on('data', chunk => {
//             body += chunk;
//         });

//     } else {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<form method="POST"><input type="text" name="username"><button type="summit">Create USER</button></from>');
//     };
// });
// server.listen(5000);


const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.send('hi')
});

app.listen(5000);