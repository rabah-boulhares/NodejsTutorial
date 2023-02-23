// console.log("one");
// process.nextTick(() => console.log("this is process.next1"));
// console.log("two");

const fs = require("node:fs");

setTimeout(() => console.log(1), 100);
fs.readFile(__filename, () => console.log("file read"));
