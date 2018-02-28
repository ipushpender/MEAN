window.addEventListener("load", function () {
    document.getElementById('addbtn').addEventListener("click", addData);
    //    document.getElementById('delbtn').addEventListener("click", delData);
    //    document.getElementById('updbtn').addEventListener("click", updData);
    //    document.getElementById('srchbtn').addEventListener("click", srchData);
    //    document.getElementById('savebtn').addEventListener("click", saveData);
    //    document.getElementById('sortbtn').addEventListener("click", sortData);
    //    document.getElementById('loadbtn').addEventListener("click", loadData);
    // document.getElementById('clrbtn').addEventListener("click", clearData);
    printQid();
});

function printQid() {
    document.getElementById("qid").innerHTML = questionobject.qno;
}

function addData() {
    debugger;
    var question = document.querySelector('#question').value;
    var option = [];
    var options = document.getElementsByName('options');
    for (let i = 0; i < options.length; i++) {
        option.push(options[i].value);
    }
    var answer = document.querySelector("#answer").value;
    var score = document.querySelector('#score').value;
    questionobject.addquestion(question, option, answer, score);
    printRow(questionobject.questionarray[questionobject.questionarray.length - 1]);
}
var questionobject = {
    questionarray: [],
    qno: 1,
    addquestion: function (question, option, answer, score) {
        var q1 = new Question(this.qno, question, option, answer, score);
        this.questionarray.push(q1);
        this.qno++;
    }
}
// function contructor - it is similar to class 
//function Question(qid, question, option, answer, score) {
//    this.qid = qid;
//    this.question = question;
//    this.option = option;
//    this.answer = answer;
//    this.score = score;
//}
function printRow(questionrow) {
    var index = 0;
    var table = document.getElementById('tablebody');
    var row = table.insertRow();
    //debugger;
    for (key in questionrow) {
        if (key == 'option') {
            var optionArr = questionrow[key];
            console.log("optionArr", optionArr);
            optionArr.forEach((opt) => {
                row.insertCell(index).innerHTML = opt;
                index++;
            });
        } else {
            row.insertCell(index).innerHTML = questionrow[key];
            index++;
        }
    }
    var td = row.insertCell(index);
    td.appendChild(createimage("image/delete.png", questionobject.qno, toggleMarkDelete));
    td.appendChild(createimage("image/edit.png", questionobject.qno));
    return;
}

function createimage(path, qid, method) {
    var img = document.createElement("img");
    img.setAttribute("qid", --qid);
    img.src = path;
    img.addEventListener("click", method);
    return img;
}

function toggleMarkDelete(event) {
    var qid = event.srcElement.getAttribute("qid");
}
