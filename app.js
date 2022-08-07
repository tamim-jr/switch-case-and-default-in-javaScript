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

//Select rgb color

let color = "Cyan";
let output;

switch (color){
    case "Red":
    case "Green":
    case "Blue":
        output = "You are selected RGB's one color"
    break;
    default :
        output = "You are select without RGB color"
    break;
    case "Cyan":
    output = "You select cyan color"
    break;
}
console.log(output);