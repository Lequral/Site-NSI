var toAnimate = document.getElementsByClassName("animate")

var pageYpourcent;

var yMinMax;

const tryAnimate = () => {

    for (i in [...Array(toAnimate.length).keys()]) {

        let yCoordoonates = yMinMax[i]

        let element = toAnimate[i]
        let animation = element.getAnimations()[0]

        if(animation === undefined) return

        if(yCoordoonates === undefined) return
 
        if (yCoordoonates[0] < pageYpourcent && pageYpourcent < yCoordoonates[1]) {

            if (animation.currentTime < 100 || 1900 < animation.currentTime) { //test si l'element est bien au début de l'animation donc caché
                if(!(animation.playState === "paused")) return

                console.log("fadeIn animation on element ", parseInt(i) + 1)
                animation.play()

                setTimeout(() => {
                    animation.pause()
                    animation = element.getAnimations()[0]
                }, 1000)

            }

        } else if (animation.playState === "paused") {

            if (900 < animation.currentTime && animation.currentTime < 1100) { //test si l'element est bien au milieu de l'animation donc visible

                console.log("fadeOut animation on element ", parseInt(i) + 1)
                animation.play()

                animation.onfinish = () => {
                    element.style.opacity = 0
                    animation.currentTime = 0
                    animation.pause()
                }

            }
        }
    }
    return pageYpourcent + "%"
}


window.onload = function () {

    if (document.title === "Accueil | Avatar") {
        yMinMax = [
            [12, 28],
            [30, 48],
            [48, 69],
            [65, 80],
            [80, 101]
        ]

        console.log("Data for Accueil page loaded")
    }else if (document.title === "Suite | Avatar") {
        yMinMax = [
            [0, 100]
        ]

        console.log("Data for Suite page loaded")
    } else if (document.title === "VFX | Avatar") {
        yMinMax = [
            [0, 25],
            [20,50],
            [44,100]
        ]
        console.log("Data for VFX page loaded")
    }


    pageYpourcent = Math.round(scrollY / (document.body.scrollHeight - innerHeight) * 100);
    tryAnimate()
    console.log(pageYpourcent)
}

window.addEventListener('scroll', function () {
    pageYpourcent = Math.round(scrollY / (document.body.scrollHeight - innerHeight) * 100);
    tryAnimate()
    console.log(pageYpourcent)
});