window.onload = function () {
 const mybutton =
     document.querySelector("button");
    const message =
     document.querySelector("#message");

    mybutton.onclick = function(){

        message.innerHTML = "Walcome to Cyborg World! 🚀";

        message.style.color = "#00ffff";
        message.style.fontSize = "22px";
    
    };
};
