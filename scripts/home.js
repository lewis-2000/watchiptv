document.addEventListener("DOMContentLoaded", function () {
    // Hero Slider
    var images = document.querySelectorAll('.hero .slider-img');
    var interval = 5000; // Change image every 5 seconds

    function changeImage() {
        var activeImage = document.querySelector('.hero .slider-img.active');
        activeImage.classList.remove('active');

        var nextImage = activeImage.nextElementSibling || images[0];
        nextImage.classList.add('active');
    }

    setInterval(changeImage, interval);

    // About Section Tabs
    var sliderContents = document.querySelectorAll('.slider-content');
    interval = 5000; // Change content every 5 seconds

    function toggleContent() {
        var activeContent = document.querySelector('.slider-content.active');
        activeContent.classList.remove('active');

        var nextContent = activeContent.nextElementSibling || sliderContents[0];
        nextContent.classList.add('active');
    }

    setInterval(toggleContent, interval);



});
