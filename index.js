//const Person = require('./person');
const FileObject = require('./fileops');
var fo = new FileObject();
fo.filename = "file_that_does_not_exist";
fo.file_exists( function (err, results) {
 if (err) {
 console.log("Aw, bummer: " + JSON.stringify(err));
 return;
 }
 console.log("file exists!!!");
}); 

// console.log(person.name);
// const person1 = new Person('gary', 30);
// person1.greeting();