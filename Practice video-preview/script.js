console.log("page loaded...");

function playVideo(start) {
    start.play();
}


function pauseVideo(stop) {
    stop.pause();
    stop.currentTime = 0;
}