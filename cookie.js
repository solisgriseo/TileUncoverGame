console.log(navigator.cookieEnabled);
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
let cook = document.cookie
console.log(cook);

function getInfo() {
}