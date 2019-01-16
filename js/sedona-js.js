var link = document.querySelector(".hotel-search-button"); 
var popup = document.querySelector(".popup");
var hotelSearch = document.querySelector("input[type=text]");

link.addEventListener("click", function (evt) { evt.preventDefault(); 
popup.classList.toggle("popup-show");
hotelSearch.focus(); 
}); 
