let container = document.getElementById("container")
let btn = document.getElementById("btn")
let box = document.querySelectorAll(".box")

function hover(e){
   if(e.target.classList == "box"){e.target.classList = "box-colored"} 
}

function fillContainer(num){
    for(i=0; i<num; i++){
      let box = document.createElement("div")
      box.classList.add("box")
      container.appendChild(box)
    }
}

function clickBtn(){
    boxes = prompt("How many rows and columns do you want?")
    num = parseInt(boxes)
    num = num * num
    container.innerHTML = ""
    fillContainer(num)
}

fillContainer(256)


container.addEventListener("mouseover", hover)
btn.addEventListener("click", clickBtn)