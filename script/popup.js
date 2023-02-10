window.addEventListener("load", function() {
    setTimeout (
        function open(event) {
            document.querySelector(".popup").style.display = "block";
        },
        2000
    )
})


function closePopup() {
    document.querySelector(".popup").style.display = "none";
}