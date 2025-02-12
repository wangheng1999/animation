let map_con1_img1 = document.querySelector('.map_con1_img1')
setTimeout(() => {
    map_con1_img1.style.width = '100%'
},300)

let map_con4_switch_left = document.querySelector('.map_con4_switch_left')
let map_con4_switch_right = document.querySelector('.map_con4_switch_right')
let map_con4_list = document.querySelector('.map_con4_list')
let map_index = 0
map_con4_switch_left.onclick = function () {
    if(map_index > -2){
        map_index = map_index - 1
    }else {
        this.style.cursor = 'not-allowed'
    }
    map_con4_list.style.transform = `translateX(${100/3*map_index}%)`
}
map_con4_switch_right.onclick = function () {
    if(map_index < 0){
        map_index = map_index + 1
    }else {
        this.style.cursor = 'not-allowed'
    }
    map_con4_list.style.transform = `translateX(${100/3*map_index}%)`
}
map_con4_switch_left.onmouseleave = function () {
    if(map_index == -2){
        this.style.cursor = 'not-allowed'
    }else {
        this.style.cursor = 'pointer'
    }
}
map_con4_switch_right.onmouseleave = function () {
    if(map_index == 0){
        this.style.cursor = 'not-allowed'
    }else {
        this.style.cursor = 'pointer'
    }
}

