let images = ["images/pic_01.png", "images/pic_02.jpg", "images/pic_03.jpg"];
let cur_image = 0;

let image_slider;
let btn_previous;
let btn_next;

document.addEventListener("DOMContentLoaded", function () {
  image_slider = document.getElementById("sale-image-src");
  btn_previous = document.getElementsByClassName("p_btn").item(0);
  btn_next = document.getElementsByClassName("n_btn").item(0);
  update_image();
  btn_previous.onclick = function () {
    if (cur_image - 1 < 0) {
      cur_image = images.length-1;
    } else {
      cur_image -=1;
    }
    update_image();
  };

  btn_next.onclick = function () {
    if (cur_image + 1 >= images.length) {
      cur_image = 0;
    } else {
      cur_image +=1 ;
    }
    update_image();
  };
});

function update_image() {
  image_slider.src = images[cur_image];
  console.log(image_slider.src);
}
