// Sticky Navbar 
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >0)
});

// Hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", mobileMenu);
function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
};

$('#client .owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: false,
    autoplay: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})