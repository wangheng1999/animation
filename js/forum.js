let img_list = document.querySelectorAll('.img_list')
let forum2_con3_left_src = document.querySelector('.forum2_con3_left_src')
for(let i = 0; i < img_list.length; i++){
    img_list[i].onclick = function () {
        for(let j = 0; j < img_list.length; j++){
            img_list[j].classList.remove('forum2_con3_right_img_active')
        }
        forum2_con3_left_src.src = this.src
        this.classList.add('forum2_con3_right_img_active')
    }
}
