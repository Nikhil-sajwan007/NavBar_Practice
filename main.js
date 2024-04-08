let menuList = document.getElementById("menuList");
let icon = document.getElementById("icon");

icon.addEventListener("click", ()=>{
    // console.log("okok")
    let iconName = icon.getAttribute("name");

    if(iconName==="menu"){
       
        icon.setAttribute("name", "close");
        menuList.style.display = "block";
        menuList.style.top = "0";
        // menuList.classList.toggle = "block"


        
    }else if(iconName === "close"){
        icon.setAttribute("name", "menu");
        // console.log(iconName,"okok close")
        menuList.style.display = "none";
        menuList.style.top = "100rem";
        
       

    }else{
        icon.setAttribute("name", "close");

    }

});










