// Display current date and time
const currentDateTime = new Date();

console.log("This is my first program");
console.log("Programe run on : " +  currentDateTime.toLocaleString());

// Declare variables EmpName & EmpSalary and store "John" & 50000 respectively
var EmpName = "John";
var EmpSalary = 50000;

// Declare function EmployeeInfo
function EmployeeInfo(name, Salary)
{
    // Print employee name & salary
    console.log("Welcome " + name + " Your monthly Salary is " + Salary);
}

// Calling the function
EmployeeInfo(EmpName, EmpSalary);

// Add this for Second Exercise 
const EmpSkills = (skills,Name,LabGrp) => {
  console.log("Student ID " + Name);
  console.log("Expert in "+ skills);
  console.log("Lab Group Name",LabGrp); 
}

EmpSkills("java","2713014","Grp 4");
// Arrow functions use concise => syntax, inherits 'this' from the surrounding scope, not from the function itself, does not have its
// own arguments object, cannot be used as a constructor, not hoisted which means the function must be declared before it's called,
// and isn't suitable for object methods with 'this' being different.

// Code for third Exercise
const student = require('./StudentInfo');
const person = require('./Person');

// Because getName is the function we use ()
console.log("Student Name:" +student.getName());
console.log(student.Location());
console.log(student.dob);
// Because dob is a variable we do not use ()
console.log("grade is "+student.Studentgrade(55));

// Create person1 object
person1 = new person("Jim","USA","myemail@gmail.com");
console.log("using Person Module", person1.getPersonInfo());

// Display PC information
os=require("os");
const util=require('util');
console.log("temporary directory"+ os.tmpdir());
console.log("hostname: "+ os.hostname());
console.log("OS: " + os.platform() +"release:"+ os.release()); 
console.log("Uptime: "+ (os.uptime())/3600 +" hours");
console.log("userInfo " + util.inspect(os.userInfo()));
console.log("Memory: "+ os.totalmem()/1000000000 + "GB");
console.log(" free: "+os.freemem()/1000000000 + "GB");
console.log("CPU "+ util.inspect(os.cpus()));
console.log("Network "+ util.inspect(os.networkInterfaces()));

console.log("==========================================================================================================================")

const portfolio = require('./PortfolioTask');
portfolio.studentInfo;
console.log(portfolio.dateTimeNow);
console.log("Student's favourite language: " + portfolio.studentFavLanguage);
console.log(portfolio.b);