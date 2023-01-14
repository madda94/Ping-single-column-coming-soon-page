document.getElementById("button").addEventListener("click", function() {
    if(document.getElementById("email").value = "" || 
    !document.getElementById("email").value.includes("@") || 
    !document.getElementById("email").value.includes(".com")) {
        document.getElementById("email").value = ""
        document.getElementById("email").style.border = "2px solid hsl(354, 86%, 67%)"
        document.getElementById("error-text").style.display = "block"
        document.getElementById("email").placeholder = "example@email/com"
        document.getElementById("email").placeholder.style.color = "black"
    }
})