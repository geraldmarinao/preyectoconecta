
window.onload = function() {
 
    var boton = document.getElementById("btnTop");
    
    boton.onclick = function() {
       
        window.scrollTo({
            top: 0,              
            behavior: "smooth"   
        });
    };
    
    
    window.onscroll = function() {
       
        if (window.scrollY > 100) {
            boton.style.display = "block"; 
        } else {
            boton.style.display = "none";   
        }
    };
};