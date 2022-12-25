mean();
var food = 'meat';
function mean() {
    food = "chicken";
    console.log(food + '\n');
    var food = "fish";
    console.log(food + '\n');
}
console.log(food + '\n');
console.log(food + '\n');
//###################################
var genre = "disco";
console.log(genre + '\n');
rewind();
function rewind() {
    genre = "rock";
    console.log(genre + '\n');
    var genre = "r&b";
    console.log(genre + '\n');
}
console.log(genre + '\n');
//###################################
dojo = "san jose";
console.log(dojo + '\n');
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo + '\n');
    var dojo = "burbank";
    console.log(dojo + '\n');
}
console.log(dojo + '\n');
//###################################
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo.state = "closed for now";
    }
    return dojo;
}
