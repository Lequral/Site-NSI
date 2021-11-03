var toAnimate = document.getElementsByClassName("animate")

var pageYpourcent;

const restartAnimation = i => {
    toAnimate[i].classList.remove("animate")
    void toAnimate[i].offsetWidth;
    toAnimate[i].classList.add("animate")
}

const tryAnimate = () => {

    let yMinMax = [
        [45, 90],
    ]

    for (i in [Array(toAnimate.length)]) {

        let yCoord = yMinMax[i]
        
        console.log(yCoord[0] < pageYpourcent && pageYpourcent < yCoord[1])
        if (yCoord[0] < pageYpourcent && pageYpourcent < yCoord[1]) {
            toAnimate[i].style.animationPlayState = "running";
            console.log("animate")
        }else{
            console.log(i)
            let jsp = toAnimate[i];
            if(jsp.style.animationPlayState == "running") {
                restartAnimation(i)
                console.log("restart animation")
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