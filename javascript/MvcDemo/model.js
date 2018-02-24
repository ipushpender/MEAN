const sayWelcome = (firstname, lastname) => initCap(firstname) + " " + initCap(lastname);
const initCap = (str) => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
//function sayWelcome() {
//    var fullname = initCap(firstname) + " " + initCap(lastname);
//    return fullname;
//}
