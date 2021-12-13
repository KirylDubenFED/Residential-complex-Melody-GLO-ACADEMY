$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter__up");
    $(".home__image path").on("mouseover", function () {
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
    });

    counterUp.on("click", function () {
        if (currentFloor < 18) {
            currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString('en-US', { minimumIntegerDigits: 2,
        useGrouping: false });
        $(".counter").text(usCurrentFloor);
        $("[data-floor=4]").toggleClass("current-floor");
        }
    });
});