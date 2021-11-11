//Example: Function
function Display(x) { 
    console.log(x);
}
function myFunction() {
    let interval = setInterval(function(){ 
         console.log("Hello");
         count += 1; 
         if(count === 5){
            clearInterval(interval);
        }
        }, 3000);
  }
let count=0;
Display(100);
myFunction();