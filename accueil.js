var toAnimate = document.getElementsByClassName("animate")

var pageYpourcent;

/**
 * @param { HTMLDivElement } element
*/

const FadeInUp = element => {

    console.log("anim")
    element.style.opacity += 0.05
    element.style.transform -= 0.05; //jsp

}

const FadeOutUp = element => {
    console.log("fadeOutUp")
}

const restartAnimation = i => {

    let element = toAnimate[i]

    element.classList.remove("animate");

    // trigger a DOM reflow 
    void element.offsetWidth;

    element.classList.add("animate");
    element.style.animationPlayState = "paused"
}

const tryAnimate = async () => {

    let yMinMax = [
        [0, 99],
        [0, 99],
        [0, 99],
        [0, 99],
        [0, 99],
        [0, 99],
        [0, 99],
        [0, 99],
        [0, 99]
    ]

    for (i in [...Array(toAnimate.length).keys()]) {
        let yCoord = yMinMax[i]

        if(i != 0) return

        if (yCoord[0] < pageYpourcent && pageYpourcent < yCoord[1]) {

            let int = 1
            let Interval;

            Interval = setInterval(FadeInUp(toAnimate[i]), 1000)
            setTimeout(clearInterval(Interval),20 * 1000)

        } //else  if (toAnimate[i].style.animationPlayState == "running") {

        //         FadeOutUp(toAnimate[i])

        // }
    }
    return pageYpourcent + "%"
}


window.onload = function () {
    pageYpourcent = Math.round(scrollY / (document.body.scrollHeight - innerHeight) * 100);
    console.log(tryAnimate())
}

window.addEventListener('scroll', function () {
    pageYpourcent = Math.round(scrollY / (document.body.scrollHeight - innerHeight) * 100);
    console.log(tryAnimate())
});