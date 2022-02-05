const os = require("os");
const url = require("url");

console.log("파일명 : " + __filename);
console.log("현재 경로 : " + __dirname);
console.log("아키텍처 : " + process.arch);
console.log("Host name : " + os.hostname());

process.on('exit', (code) => {

    console.log("프로세스가 종료되었어요.");

});

console.log('Hello World...!');
