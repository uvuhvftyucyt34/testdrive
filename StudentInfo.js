// Arrow function with no name, this function does not take any argument vrbname = () => {}
// Code starts from here:
const dateofBirth= "05/12/2005"
const getStudentName = () =>
{
    return "Marwan Jaman";
}
const getCampusName = () =>
{
    return ("UEL Campus ");
}

// Exporting functions & variable outside the module 
exports.getName=getStudentName 
exports.Location=getCampusName 
exports.dob=dateofBirth

// How to export function with parameters 
exports.Studentgrade=(marks)=> 
{
    if (marks>50 && marks <70)
        return ("B grade");
    else
        return ("A grade");
}