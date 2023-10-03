let first = document.getElementById("first")
let btn = document.querySelector(".onClick")
let success = true;
let changeSuccess = success;

const onClick = ()=>{
    if(changeSuccess === true){
        first.setAttribute("hidden","false")
        !changeSuccess
    }
    else{
        first.setAttribute("hidden","true")
        // changeSuccess = !success
    }
    
}

btn.addEventListener("click", onClick())

onClick()