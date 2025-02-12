let home_btn = document.querySelector('.home_btn')
let home_back = document.querySelector('.home_back')
let home_title = document.querySelector('.home_title')

home_btn.onclick = function () {
    // console.log(home_mark);
    home_back.style.width = '50px'
    home_back.style.height = '60%'
    home_title.style.opacity = '0'
    this.style.display = 'none'
    setTimeout(() => {
        window.location.href = './stormmap.html'
    },700)
}
