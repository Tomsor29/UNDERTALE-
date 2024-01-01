document.addEventListener("DOMContentLoaded", function(){
    const audioj = document.querySelector(".audioj");
    const atq = document.querySelector(".atq");
    const button = document.querySelector(".button");
    const box = document.querySelector(".box");
    const textbox = document.querySelector(".textbox");
    const textB = document.querySelector(".textB");
    const fbox = document.querySelector(".fbox");
    const ftext =document.querySelector(".ftext")
    const abox = document.querySelector(".abox");
    const atext = document.querySelector(".atext");
    const Ibox = document.querySelector(".Ibox");
    const Itext = document.querySelector(".Itext");
    const mbox = document.querySelector(".mbox");
    const mtext = document.querySelector(".mtext");
    const tori = document.querySelector(".tori");

    ftext.addEventListener("click", function(){
        fbox.style.display = "none";
        abox.style.display = "none";
        Ibox.style.display = "none";
        mbox.style.display = "none";
        textbox.style.display = "none";
        tori.style.display = "none";
        box.style.border = "3px solid red";
        button.play();
        atq.play()
        var gif = document.createElement("img");
        gif.src = "atq.gif";
        gif.style.position = "absolute";
        gif.style.bottom = "30px";
        gif.style.right = "165px";
        gif.style.height = "400px";
        box.appendChild(gif);
       

    })

    atext.addEventListener("click", function(){
        button.play();
        audioj.play();
        textB.innerText = "* Dino likes to buy cokes..."


    })

    Itext.addEventListener("click", function(){
        button.play();
        audioj.play();
        textB.innerText = " * 100 pesos     * Dignidad"


    })

    mtext.addEventListener("click", function(){
        button.play();
        audioj.play();
        textB.innerText = "* You aren't going anywhere."


    })


























})


