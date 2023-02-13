window.addEventListener("load", function() {

    const body= document.querySelector("body");

    setTimeout (
        function open(event) {
            document.querySelector(".popup").style.display = "block";
            body.style.overflow="hidden";
        },
        2000
    )
})


function closePopup() {
    
    const body= document.querySelector("body");

    document.querySelector(".popup").style.display = "none";
    body.style.overflow="auto";
}