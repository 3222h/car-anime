$(document).ready(function(){

    const $surface = $('.surface');
    const $car = $('.car');
    const $img = $('.car img');

    const cars = ['./Car 1.PNG', './Car 2.PNG'];

    let flag = true;

    // Start car automatically
    $surface.addClass('moveRight');
    $car.addClass('suspension');

    // Function to randomly toggle lights ON/OFF every 2-3 minutes
    function toggleLightsRandomly() {
        setTimeout(() => {
            if(flag){
                $img.attr('src', cars[1]); // lights ON (car 2)
            } else {
                $img.attr('src', cars[0]); // lights OFF (car 1)
            }
            flag = !flag;
            toggleLightsRandomly(); // call again
        }, Math.floor(Math.random() * (180000 - 120000 + 1)) + 120000); // Random between 2min(120000ms) - 3min(180000ms)
    }

    toggleLightsRandomly(); // Start the light toggle
});
