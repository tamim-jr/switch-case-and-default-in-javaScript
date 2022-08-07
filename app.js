//Theory of Switch:

// switch (expression){
//     case condition :
//         codeBlock
//         break;
// }

//Example
let text;
let rollNumber = 15;
switch (rollNumber){
    case 1: 
    text = "You are first!"
    break;
    case 2: 
    text = "You are second!"
    break;
    case 3: 
    text = "You are Third!"
    break;
    default: 
    text = "Your role number is out of First Second and Third."
    break;
}
console.log(text)