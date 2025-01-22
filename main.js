let menuList = document.getElementById("menuList");
let icon = document.getElementById("icon");

icon.addEventListener("click", ()=>{
    // console.log("okok")
    let iconName = icon.getAttribute("name");

    if(iconName==="menu"){
       
        icon.setAttribute("name", "close");
        menuList.style.opacity = "1";
        menuList.style.top = "0";
        // menuList.classList.toggle = "block"


        
    }else if(iconName === "close"){
        icon.setAttribute("name", "menu");
        // console.log(iconName,"okok close")
        menuList.style.opacity = "0";
        menuList.style.top = "-300px";
        
       

    }else{
        icon.setAttribute("name", "close");

    }

});










