const print = (inp) => { console.log(inp) };
const obj = {
    FName: "Kiruthik",
    LName: "Kumar",
    Age: 19
}
print("Myself " + obj.FName + " " + obj.LName + " and my age is " + obj.Age);
print(obj);
obj["Sex"] = "Male";
print(obj);
delete obj["Sex"];
print(obj);