// Declare constants 'fullName', 'studentID' & 'groupNumber'
const fullName = "Marwan Jaman";
const studentID = 2713014;
const groupNumber = 4;

// Create function displayStudent()
function displayStudent(fullName, studentID, groupNumber)
{
    console.log("Student name: " + fullName);
    console.log("ID: " + studentID);
    console.log("Group number: " + groupNumber);
}

// Export student info from this file
exports.studentInfo = displayStudent(fullName, studentID, groupNumber);

// Display current date & time
const dateTime = new Date();
exports.dateTimeNow = dateTime.toLocaleString();

// Create arrow function to display favourite language
const favLanguage = () =>
{
    return "Python";
}
exports.studentFavLanguage = favLanguage();

// Calculate a unique value using Student ID
const uniqueValue = (studentID) =>
{
    undefined
}
exports.b = uniqueValue(studentID);