const math = require('mathjs')

let args = process.argv.slice(2)
let mathExpr = args.join(" ")

evaled_math = math.evaluate(mathExpr)
console.log(evaled_math)