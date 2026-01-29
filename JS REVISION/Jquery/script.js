$(document).ready(function() {
    // Slick Slider Initialize karna
    $('.slider').slick({
        dots: true,          // Neeche dots dikhaye
        infinite: true,      // Loop chalta rahe
        speed: 500,          // Slide hone ki speed
        slidesToShow: 1,     // Ek baar mein kitni slide dikhe
        autoplay: true,      // Apne aap chale
        autoplaySpeed: 2000, // 2 second baad badle
        arrows: true         // Next/Prev buttons
    });
});

