window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "rgba(7,11,18,.92)";
    }
    else{
        nav.style.background = "rgba(7,11,18,.70)";
    }

});
