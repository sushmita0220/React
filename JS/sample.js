var a =120;
console.log("This is value declared in var type before altering:"+""+a);  
{
    var a =7
    console.log("This is value declared in var type after altering:"+""+a);  
}

let b = 120;
console.log("This is value declared in var type before altering:"+""+b);  
{
    let b =7
    console.log("This is value declared in var type after altering:"+""+b);  
}
console.log("This is value declared in var type after block altering:"+""+b);  
const c =20;
console.log("This is value declared in const type:"+""+c); 
// IF ELSE
d = 0
if (d==0){
    console.log("The number is zero and adding 1 to make it positive")
    d = d+1
}
if (d>0){
    console.log("The number is positive")
}
else{
    console.log("The number is negative")
}

//LOOPING: FOR, FORIN, FOREACH, WHILE, DO WHILE
a = 5
for (i=0;i<a;i++){
console.log(i)
}

//WHILE
i=0
while(i <=a){
    console.log(i)
    i++
}
array = [10,20]
array.forEach(element => {
    console.log(element)
});
