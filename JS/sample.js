var a =120;
console.log("This is value declared in var type before altering:"+""+a);  
{
    var a =7
    console.log("This is value declared in var type after altering:"+""+a);  
}

let j = 120;
console.log("This is value declared in var type before altering:"+""+j);  
{
    let j =7
    console.log("This is value declared in var type after altering:"+""+j);  
}
console.log("This is value declared in var type after block altering:"+""+j);  
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
//array = [10,20]
//array.forEach(element => {
  //  console.log(element)
//});
const array = [10,20,"KSP",23.08,Date()]
for (var ele in array){
    console.log(array[ele])
}


array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
array.pop()
console.log("After popping:")

if(array.length>0){
    console.log("elements are present")
    for(var ele of array){
        console.log(ele)
    }
}
else{
    console.log("elements are not present")
}
array.push(1)
if(array.length>0){
    console.log("elements are present")
    for(var ele of array){
        console.log(ele)
    }
}
else{
    console.log("elements are not present")
}
//OBJECT
a = {
    car: "Audi",
    model: "A8",
    airbags:8,
    wheels:5,
    color:"blue"
}
console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
a.car = "BMW"
console.log(a)
a.sunroof = "Yes"
console.log(a)

//NESTED OBJS
console.log(a['color'])
console.log(a.airbags)
var some = 'model'
console.log(a[some])
console.log(a)
a.car = "BMW"
console.log(a)
a.sunroof = {isPresent:"YES",Shape:"Rectangle"}
console.log(a)
console.log(a.sunroof.isPresent)
for(var ele in a){
    console.log(ele+ ":"+ a[ele])
    if(typeof a[ele]=="object")
    {
        for(var val in a[ele]){
            console.log(val +":"+a[ele][val])
        }
    }
}

// functions
function fun_name(){
    console.log(5+5+"KSP"+5+5)
}
fun_name()

function fun_name(a,b){
    console.log(a+b+5+5+"KSP"+5+5)
    return(a+b+5+5+"KSP"+5+5)
}
console.log(fun_name(5,5))

