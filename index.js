//write your code here!
//using the element.remove() to remove the ("main") element
const element = document.getElementById("main");
element.remove("main");

//Using document.createElement() to create 'h1#victory'
let newHeader = document.createElement("h1");

//Creating <h1> with id  'victory'
 newHeader.id = "victory" 

 //creating <h1> with a message including "YOUR NAME is the champion"
 newHeader.innerHTML = "YOUR-NAME is the champion"