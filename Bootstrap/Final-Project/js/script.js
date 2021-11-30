$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots:false,
    navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
   
    responsive: {
        0: {
            items: 1
        },
       
        1000: {
            items: 2
        }
    }
})