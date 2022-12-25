var hello = 'world';
console.log(hello + '\n');
//###########################################
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle + '\n');
}
//###########################################
var brendan = 'super cool';
console.log(brendan + '\n');
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
//###########################################
var food = 'chicken';
console.log(food + '\n');
eat();
function eat() {
    food = 'half-chicken';
    console.log(food + '\n');
    var food = 'gone';
}
