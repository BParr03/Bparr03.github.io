function scrollJS(){
    document.getElementById('scrollJS').scrollIntoView({behavior: "smooth"});
    console.log("scrolled to JS");
};

function scrollPHP(){
    document.getElementById('scrollPHP').scrollIntoView({behavior: "smooth"});
    console.log("scrolled to PHP");
};

function scrollFullStack(){
    document.getElementById('scrollFullStack').scrollIntoView({behavior: "smooth"});
    console.log("scrolled to FullStack");
};

function topScroll(){
   document.getElementById('top').scrollIntoView({behavior: "smooth"});
   console.log("scrolled to top of page");
};

// var x = document.getElementById("sides");
// x.addEventListener("mouseover", overJS);

// function overJS(){
//     document.getElementById("JavaScript").innerHTML = "img src=img/JS.png";

// }

// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var img = document.getElementById("image");
var modalImg = document.getElementById("modalImage");

// Show the modal when the image is clicked
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Close the modal when the user clicks on <span>
span.onclick = function() { 
  modal.style.display = "none";
}
