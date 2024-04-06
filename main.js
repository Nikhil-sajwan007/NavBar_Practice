let menuList = document.getElementById("menuList");
let icon = document.getElementById("icon");
let iconName = icon.getAttribute("name")

// let hamMenu = document.getElementById("hamMenu");
// console.log(hamMenu);
// let iconName = icon.name;

// console.log(iconName, "iconName"); 

// console.log(icon, "icon");
// console.log(iconName, "iconName");

icon.addEventListener("click", ()=>{
    // console.log("okok")


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





