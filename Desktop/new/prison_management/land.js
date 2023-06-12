const myslider = [...document.querySelectorAll("#slide")]
let pos = 0
console.log(myslider);
// function move(e) {
//     (e.key == 'ArrowLeft') ? pos -= 600 :
    
// }
setInterval(e => {
    pos -= 600
    if (pos < -1800) {
        pos = 0
    }
    myslider.forEach(slider => {
        slider.style.transform = `translateX(${pos}px)`
    })
}, 5000)