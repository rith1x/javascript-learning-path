const print = (inp) => { console.log(inp); };



// VAR 

var a = "apple";
console.log(a); //apple
a = "banana";
console.log(a); //banana

const apple = () => {
    console.log(a); //banana
    a = "carrot";
}
apple();
console.log(a); //carrot

//BLOCK SCOPE

if (2 > 1) {
    console.log(a);  //carrot
    a = "mango";
    console.log(a); //mango
}


//CONST

const b = "Unchangeable";

print(b);
b = "Error pops"

