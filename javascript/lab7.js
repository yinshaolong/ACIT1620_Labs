course1 = {
    code: "ACIT 1515",
    name: "Scripting for IT"
}
course2 = {
    code: "ACIT 1620",
    name: "Fundamental Web Technologies"
}
course3 = {
    code: "MATH 1310",
    name: "Technical Math for IT"
}
let courseList = [course1, course2, course3];
let userInput;
let shouldPrompt = true;
do{
    // console.log(`shouldPrompt: ${shouldPrompt}`);
    userInput = prompt("Enter a 4 digit number: ")
    if (userInput.length != 4 || isNaN(userInput)){
        console.log("Invalid input. Please try again.")
        // continue;
    }
    else{
        shouldPrompt = false;
    }
}while(shouldPrompt)
let inList = false;
for (course of courseList){
    if (course.code.split(' ')[1] === userInput){
        console.log(`Yes I am taking the course: ACIT ${course.code} - ${course.name}`);
        inList = true;
    }
}
if (!inList){
    let newCourse = {code: userInput, name: null};
    courseList.push(newCourse);
    console.log("Successfully added")
}