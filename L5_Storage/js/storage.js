//by including the following line of code, we ensure that the javascript is only executed when the HTML is fully loaded
$(document).ready(function() {
    console.log("Ready");
    //set a cookie
    document.cookie = "username=John2024; expires=Sun, 10 Dec 2024 12:00:00 GMT; path=/";
    //set another cookie
    document.cookie = "firstname=john; expires=Sun, 10 Dec 2024 12:00:00 GMT; path=/";
    //save a cookie into a variable
    let myCookie = document.cookie;
    //print the cookie value
    console.log(myCookie);
    //add the cookie into html... you can try make this display nicely if you want!
    $("#username").text(myCookie);
    //print the userseperate name part of the cookie
    console.log(getCookie("username"));
    console.log(getCookie("firstname"));
}); // end document ready




//from https://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
