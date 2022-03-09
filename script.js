/* Define objects */
const zoomElement = document.querySelector("#svgContainer");

/* Define zoom related values */
let zoom = 1;
const ZOOM_SPEED = 0.6;

/* Zoom Function on Scroll Event */
document.addEventListener("wheel", function landing(e) {

    /* Define objects */
    scrollTop = 1600;
    scrollLeft = 50,

        /* Scroll towards screen */
        window.onscroll = window.requestAnimationFrame(function scroll_lock() {
            window.scrollTo(scrollLeft, scrollTop);
        });

    /* Zoom Calculations*/
    window.requestAnimationFrame(function () {
        if (e.deltaY > 0 && zoom <= 12) {
            zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;
        } else if (zoom >= 1.1) {
            zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;
        }
    });

    /* Stop Zooming at end of scroll and fade out*/
    if (zoom >= 12 && e.deltaY > 0) {
        document.removeEventListener("wheel", landing);
        zoomElement.style.opacity = "0";
        var delayInMilliseconds = 3000;

        /* Delay */
        // the delays are there to prevent the texts from appearing before the 
        // computer completely fades out.
        setTimeout(function () {
            zoomElement.style.display = "none";
            window.scrollTo(0, 0);
            var delay2InMilliseconds = 500;
            /* Delay */
            setTimeout(function () {
                var x = document.getElementById("panel01");
                x.style.display = "block";
                x.style.opacity = "0";
                AOS.refresh();

                var delay3InMilliseconds = 1000;
                /* Delay */
                setTimeout(function () {
                    var x = document.getElementById("panel01");
                    x.style.opacity = "1";
                }, delay3InMilliseconds);
            }, delay2InMilliseconds);
        }, delayInMilliseconds);
    }
    ;
});

window.addEventListener('focus', function popupbox() {
    if (confirm("$1500.00 has been deducted from your credit card numbered XXXX-XXXX-XXXX-XXXX.") == true) {
        window.removeEventListener('focus', popupbox);
    }
    ;
});