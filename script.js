const blur = document.getElementById("content")
const button = document.querySelector("button")


button.addEventListener("click", ()=>{
    blur.classList.toggle("active")
    if(blur.classList.contains("active")){
        button.textContent = "Cover Content"
        button.style.backgroundColor = "rgb(49, 48, 77, 0.5)"
        document.getElementById("text-area").style.opacity = "0"

    }else{
        button.textContent = "See Content"
        button.style.backgroundColor = "rgb(49, 48, 77, 0.7)"
        document.getElementById("text-area").style.opacity = "1"   
    }
})
