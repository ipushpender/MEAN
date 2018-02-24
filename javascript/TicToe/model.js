var btnArr = [];
flag = 0;
isGameOver = false;
const isNotBlank = (button) => button.innerHTML ? true : false;
const isSameValue = (one, two, three) => (one.innerHTML == two.innerHTML && one.innerHTML == three.innerHTML);

function print(btnArr) {
    console.log(btnArr);
    var val = btnArr.innerHTML;
    console.log("inside print", val);
    if (!val && flag == 0) {
        this.innerHTML = "*";
        flag = 1;
        pattern();
        console.log("inside print 1");
        return;
    }
    if (!val && flag == 1) {
        this.innerHTML = "0";
        flag = 0;
        pattern();
        console.log("inside print 2");
        return;
    }
    return;
}

function isSameRow(one, two, three) {
    if (isNotBlank(one) && isNotBlank(two) && isNotBlank(three)) {
        if (isSameValue(one, two, three)) {
            return true;
        }
        return false;
    }
}

function pattern() {
    if (isSameRow(btnArr[0], btnArr[1], btnArr[2])) {
        isGameOver = true;
        alert("Game Over");
    }
    if (isSameRow(btnArr[0], btnArr[3], btnArr[6])) {
        isGameOver = false;
        alert("Game Over");
    }
}