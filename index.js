const info = require("./information.js");
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Meuuuhhhjour je m'appelle ${info.student} j'ai actuellement ${info.age} meuhans et j'étudie dans la célèbre meuuhhcole de ${info.campus}`),
    e : "^ ^",
    T : "U "
}));
