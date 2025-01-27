
const toggleButton = document.getElementById("toggleButton");
const myList = document.getElementById("myList");


toggleButton.addEventListener("click", function() {
   
    if (myList.style.display === "none" || myList.style.display === "") {
        myList.style.display = "block";
    } else {
        myList.style.display = "none";
    }
});
