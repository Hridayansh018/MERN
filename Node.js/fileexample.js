
    //writeFile
    //appendFile
    //deleteFile

    const fs = require('fs');

    //readFile

    // fs.readFile('Node.js/test.js', 'utf8', (err, data) => {
    //     if (err) {
    //         console.log("===================");
    //         console.log("|                 |");
    //         console.log("|                 |");
    //         console.log("-------------------");
    //         console.log("error occured");
    //         console.log("-------------------");
    //         console.log("|                 |");
    //         console.log("|                 |");
    //         console.log("===================");
    //         console.log(err);
    //     } else {
    //         console.log(data);
    //     }
    // })

 
// let Content = "hello";
// fs.writeFile('Node.js/text.js', Content, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("file created");
//     }
// })

let Content = "hello";
fs.appendFile('Node.js/test.js', Content, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file created");
    }
})

let code = "le bhau likh"

code = 
fs.appendFile('Node.js/test.js', code, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file created");
    }
})

let data = "huehuehueheuhuehue";
fs.writeFile('Node.js/test.js', data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("file created");
    }
})