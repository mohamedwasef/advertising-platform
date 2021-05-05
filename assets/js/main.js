// accordion
var acc = document.getElementsByClassName("accordion-item-title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        this.classList.toggle("active");
        this.parentElement.classList.toggle("active")

        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// mobile menu

var menuBtn = document.getElementById("mobile-menu");
var menu = document.getElementById("ad-navigation");

menuBtn.addEventListener("click", function () {
    if (menu.className === "ad-navigation hidden-mobile") {
        menu.className += " shown";
    } else {
        menu.className = "ad-navigation hidden-mobile";
    }
});


var activeclass = document.querySelectorAll('#ad-navigation li');
for (var i = 0; i < activeclass.length; i++) {
    activeclass[i].addEventListener('click', activateClass);
}
function activateClass(e) {
    for (var i = 0; i < activeclass.length; i++) {
        activeclass[i].classList.remove('active');
    }
    e.target.parentElement.classList.add('active');
}

// scroll
(function () {
    var section = document.querySelectorAll(".scroll-section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop ||
            document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').setAttribute('class', ' ');
                document.querySelector('a[id*=' + i +
                    ']').parentElement.setAttribute('class', 'active');
            }
        }
    };
});