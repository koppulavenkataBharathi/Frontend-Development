// Task 1: Create and Access Object Properties
// Objective: Create an object representing a book and access its properties.

var book={
    title:"Beautiful Life",
    author:"John Deo",
    yearPublished:2004,
    genre:"Thiller"

}
console.log(book.title);
console.log(book.author);
console.log(book.yearPublished);
console.log(book.genre);
console.log(book["title"]);
console.log(book["author"]);
console.log(book["yearPublished"]);
console.log(book["genre"]);

// Task 2: Modify and Delete Object Properties
// Objective: Modify and delete properties of an existing object.

var car={
    make:"Audio",
    model:"A3",
    year:2023,
    color:"red"
}
// car.color="White";
car["color"]="Black";
// delete car.year;
delete car["year"];
console.log(car);

// Task 3: Nested Objects
// Objective: Create an object with nested objects and access their properties.

var student={
    name:"Bharathi",
    age:24,
    address:{
        street:"chandanagar",
        city:"Hyderabad",
        state:"Telangana"
    },
    courses:{
        HTML:"A",
        CSS:"B",
        JavaScript:"C"
    }
}
console.log(student.address.city);
console.log(student.address.state);
console.log(student["courses"]["HTML"]);
console.log(student["courses"]["CSS"]);

// Task 4: Looping Through Object Properties
// Objective: Loop through the properties of an object and print them.

var employee ={
    name:"Bharathi",
    position:"Software Developer",
    department:"Network",
    salary:30000,
}
for(let key in employee){
    console.log([key]+" "+employee[key]);
}

// Task 5: Using Methods in Objects
// Objective: Add methods to an object and call them.

var calculator={
    num1:5,
    num2:3,
    add:function(){
        return this.num1+this.num2;
    },
    sub:function(){
        return this.num1-this.num2;
    },
    mul:function(){
        return this.num1*this.num2;
    },
    div:function(){
        return this.num1/this.num2;
    },
    mod:function(){
        return this.num1%this.num2;
    }

}
console.log(calculator.add());
console.log(calculator["add"]());
console.log(calculator.sub());
console.log(calculator["sub"]());
console.log(calculator.mul());
console.log(calculator["mul"]());
console.log(calculator.div());
console.log(calculator["div"]());
console.log(calculator.mod());
console.log(calculator["mod"]());

//Task :6 Nested Object Iteration
//Objective: Create an object with nested objects and use nested for...in loops to print all properties and their values.

var company={
    name:"TCS",
    location:"Hyderabad",
    employees:{
        Prasad:"Analyst",
        Rahul:"Developer",
        Mahesh:"Frontend",
        Suresh:"Tester"
    }
}
for(let key in company){
    // console.log([key]);
    

    if (key === 'employees') {
        for (let employee in company[key]) {
          console.log(company[key][employee]);
        }
    }

}

// Task 7 :Calculate Average Age
// Objective: Create an object with a list of people and their ages, then use a for...in loop to calculate the average age.

var people= {
  Prasad: 24,
  Rahul: 32,
  Mahesh: 18,
  Suresh: 23,
};
// console.log(Object.keys(people).length);
var sum=0;
for(let key in people){
  // console.log(people[key]);
  
var sum=sum+people[key];

}
average=sum/Object.keys(people).length;
console.log(average);
