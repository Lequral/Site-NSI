var toAnimate = document.getElementsByClassName("animate")

var pageYpourcent;

const restartAnimation = i => {

    let element = toAnimate[i]
    
    element.classList.remove("animate"); 

    // trigger a DOM reflow 
    void element.offsetWidth; 

    element.classList.add("animate");
    element.style.animationPlayState = "paused"
}

const tryAnimate = () => {

    let yMinMax = [
        [0, 0],
    ]

    for (i in [...Array(toAnimate.length).keys()]) {
        let yCoord = yMinMax[i]
        console.log(`i = ${i}`)
        
        if (yCoord[0] < pageYpourcent && pageYpourcent < yCoord[1]) {//yCoord[0] = l'ordonné minimale pour animer, yCoord[1] = l'ordonné max
            toAnimate[i].style.animationPlayState = "running";
            console.log("animate")
        } else {
            if (toAnimate[0].style.animationPlayState == "running") {
                console.log("restart animation")
                restartAnimation(i)
            }
        }
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