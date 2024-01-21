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