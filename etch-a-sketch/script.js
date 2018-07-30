let gridDisplay = document.getElementById("container");
// let eachCell = document.querySelectorAll(".cell")
let container = document.querySelector(".container");
let resetButton = document.querySelector("#reset");
let rainbow = document.querySelector("#rainbow")
let size = 16;


function makeGrid(size){
    let newContainer = document.createElement("div")
    for(let i = 0; i < size * size; i++){
        let newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.style.height =(500 / size - 1) + "px";
        newCell.style.width =(500 / size - 1) + "px";
        newContainer.appendChild(newCell);
    }
    newContainer.classList.add("container")
    gridDisplay.appendChild(newContainer);
    let eachCell = document.getElementsByClassName(".cell")
    let container = document.querySelector(".container");
    container.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "black";
    })
    rainbow.addEventListener("click", function(event){
        container.removeEventListener("mouseover", console.log("off"));
        container.addEventListener("mouseover", function(event){
            let r = Math.floor(Math.random() * 255 + 1)
            let g = Math.floor(Math.random() * 255 + 1)
            let b = Math.floor(Math.random() * 255 + 1)
            event.target.style.backgroundColor = "rgb(" + r +", " + g + ", " + b + ")"
        })
    })
}

makeGrid(size);


resetButton.addEventListener("click", function(){
    size = prompt("How many rows and columns would you like?")
    if (size >= 10 && size <= 64){
        removeGrid()
        makeGrid(size);
    } else {
        size = prompt("Please pick a number between 10 & 64")
    }
})

function removeGrid(){
    let oldChild = document.querySelector(".container");
    gridDisplay.removeChild(oldChild);
}
