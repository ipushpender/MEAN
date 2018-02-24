window.addEventListener("load", bindEvents);

function bindEvents() {
    var textBox = document.querySelectorAll("input[type='text']");
    textBox[0].focus();
    document.querySelector('#greet').addEventListener("click", takeNames);
}

function takeNames() {
    var firstname = document.querySelector('#firstname').value;
    var lastname = document.querySelector('#lastname').value;
    var fullname = sayWelcome(firstname, lastname);
    //  print(fullname);...................................!!!!!!!!!!unsolved
    console.log(fullname);
    document.querySelector('#h2').innerHTML = fullname;
}
//function print(fullname) {
//    
//    var h1 = document.createElement('h1');
//    var span = document.createElement('span');
//    span.innerHTML = fullname;
//    h1.appendChild(span);
//}