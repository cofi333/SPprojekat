function myFunction() {
    var x = document.getElementById("navigationElements");
    var y = document.querySelectorAll("li");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    y.forEach(n => n.addEventListener("click", () => {
      x.style.display="none";
      
    }))
  }

