// alert("hello");

let jtImgElement ;
let forwardBtn = document.getElementById('forward');
let backwardBtn = document.getElementById('backward');

let arr = ["jt-img-1.png", "jt-img-2.png" ,"jt-img-3.png"];

let count = 0;

function forwardJtImage(){
    console.log("clicked!", count);
    if(count == 2){
        count = 0;
    }
    else{
        count++;
    }
    jtImgElement = document.getElementById('jt-img');
    jtImgElement.src = "./images/"+ arr[count];
}

function backwardBtnImage(){
    console.log("clicked!", count);
    if(count == 0){
        count = 2;
    }
    else{
        count--;
    }
    jtImgElement = document.getElementById('jt-img');
    jtImgElement.src = "./images/"+ arr[count];
}

forwardBtn.addEventListener('click', forwardJtImage);
backwardBtn.addEventListener('click', backwardBtnImage);