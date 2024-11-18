const btn = document.getElementById("btn")
let counter = 0;

btn.addEventListener("click", function(){
    counter = counter +1;
    return console.log(`${counter}`);
})