let menuList = document.getElementById("menuList");
// let hamMenu = document.getElementById("hamMenu");
// console.log(hamMenu);
let icon = document.getElementById("icon");
// let iconName = icon.name;

let iconName = icon.getAttribute("name")
// console.log(iconName, "iconName"); 

console.log(icon, "icon");
console.log(iconName, "iconName");

icon.addEventListener("click", ()=>{
    console.log("okok")


    if(iconName==="menu"){

        icon.setAttribute("name", "close")
        menuList.style.display = "block";

        // console.log("okok HEllo")
        // iconName.valueOf = "close"
        // console.log(iconName, "iconName"); 
        
    }else{

        
       

    }

});






// function openNow(){
//     
// }





