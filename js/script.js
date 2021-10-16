   document.addEventListener("click", function (event) { 
        let x = event.target;
        x.parentElement.style.opacity = "1";
        if (x.parentElement.className == "post") {              
            setInterval(function() {
                x.parentElement.style.opacity -= "0.1";
            }, 100);
        }  
    }); 