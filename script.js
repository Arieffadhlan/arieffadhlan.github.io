function nav() {
    alert("Coming soon!");
}

function welcome() {
    alert("Hello! Welcome to my website!");
}

function content() {
    alert("Coming soon!");
}

// go to top
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    mybutton.style.display = "block";
    } 
    else {
    mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
