function loginUser(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username === "admin" && password === "admin123"){
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid Login!");
    }
}

function logout(){
    window.location.href = "login.html";
}