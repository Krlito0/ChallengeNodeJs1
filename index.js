const info = require("./information.js");
var cowsay = require("cowsay");

console.log(cowsay.say({
    text : (`Bonjour je m'appelle ${info.student} j'ai actuellement ${info.age} ans et j'étudie dans la célèbre école de ${info.campus}`),
    e : "oO",
    T : "U "
}));
