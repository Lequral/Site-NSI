const tryAnimate = () => {
    if (pageYpourcent > 45) {
        document.getElementById("resume").style.animationPlayState = "running";
    }
    return pageYpourcent
}

var pageYpourcent = Math.round(scrollY / scrollMaxY * 100)
console.log(tryAnimate())

window.addEventListener('scroll', function () {
    pageYpourcent = Math.round(scrollY / scrollMaxY * 100)
    console.log(tryAnimate())
});