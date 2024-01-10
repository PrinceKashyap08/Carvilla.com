let hamburger = document.querySelector(".hamburger");
let navMneu = document.querySelector(".nav-menu");
hamburger.addEventListener("click",mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMneu.classList.toggle("active");
}
// owlCarousel 
$('#client .owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
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
})
// owlCarousel 
$( ' #carBrand .owl-carousel').owlCarousel({
    loop: true,
    // margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    }
});
// owlCarousel 
$( ' #newCars .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});