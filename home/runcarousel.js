let is_user_hover = false;
let carouselItems = document.getElementsByClassName('runCarouselItem')
let runCarousel = document.getElementsByClassName('runCarousel')[0]

runCarousel.addEventListener('mouseenter', function () { is_user_hover = true; });
runCarousel.addEventListener('mouseleave', function () { is_user_hover = false; });

for (let [key, item] of Object.entries(carouselItems)) {
    item.style.left = 1 + (20*key) + "%"
}

function animRunCarousel() {   
    if (!is_user_hover) {
    for (let [key, item] of Object.entries(carouselItems)) {
        let is_out_of_range = parseInt(item.style.left) > 181
        if (!is_out_of_range) {
            item.style.left = parseFloat(item.style.left) + 0.1 + '%'
        }
        else{
            item.style.left = -21 + '%'
        }
    }}
}

setInterval(animRunCarousel, 10);