window.addEventListener("load", tictoc);
var btnArr = [];

function tictoc() {
    btnArr = document.querySelectorAll('button');
    console.log("inside tictoc");
    for (let a = 0; a < btnArr.length; a++) {
        console.log("inside tictoc loop");
        var btn = btnArr[a];
        btnArr[a].addEventListener("click", print(btn));
    }
}
