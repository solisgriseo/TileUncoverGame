deleteCookie("user");

function getInfo() {
    let name = document.querySelector("#name").value;
    let contactNumber = document.querySelector("#number").value;
    console.log(name + contactNumber);
    setCookie("user", name, 1);
}

function setCookie(name, value, exp) {
    let date = new Date();
    date.setTime(date.getTime + (exp * 24 * 60 * 60 * 1000));
    let expires_UTC = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires_UTC + ";";
}

function deleteCookie(name) {
    setCookie(name, null, null);
}
