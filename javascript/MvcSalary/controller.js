//window.addEventListener("load", bind);..............!!!!!!!!!.UnSolved........
function bind() {
    var salary = document.querySelector("#basic").value;
    var arr = ["pf", "ta", "da", "hra", "gs", "ns", "tax"];
    details.takeSalary(parseInt(salary));
    var table = document.createElement('table');
    for (let a of arr) {
        var tr = table.insertRow();
        tr.style.border = "soilid";
        tr.insertCell(0).innerHTML = a.toUpperCase();
        tr.insertCell(1).innerHTML = details[a]();
    }
    document.body.appendChild(table);
}
