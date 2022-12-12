// console.log("Script running.....")
// document.querySelector(".cross").style.display ="none";

// document.querySelector(".hamburger").addEventListener("click", ()=>{
// console.log("clicked")
//     document.querySelector(".sidebar").classList.toggle("Go");
//     if (document.querySelector(".sidebar").classList.contains("Go")){
//         document.querySelector(".ham").style.display="inline"
//         document.querySelector(".cross").style.display = "none"
      
//     }else{
//         document.querySelector(".cross").style.display = "inline"
//         document.querySelector(".ham").style.display = "none"
//     }
// })




console.log("Script running.....")
document.querySelector(".cross").style.display = "none";

document.querySelector(".hamburger").addEventListener("click", () => {
    console.log("clicked")
    document.querySelector(".sidebar").classList.toggle("Go");
    if (document.querySelector(".sidebar").classList.contains("Go")) {
        document.querySelector(".cross").style.display = "none"
        setTimeout(() => {
            document.querySelector(".ham").style.display = "inline"
        }, 350);
       

    } else {
        document.querySelector(".cross").style.display = "inline"
        document.querySelector(".ham").style.display = "none"
    }
})
