let n = 301293;
function digitize(n) {

return n.toString().split('').reverse().map(Number);

}
console.log(digitize(n));