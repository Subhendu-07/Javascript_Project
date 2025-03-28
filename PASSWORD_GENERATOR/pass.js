function generatepass() {
    let password = "";
    for (let i = 0; i < 6; i++) {
        password += Math.floor(Math.random() * 10)
    }
    document.getElementById("password").innerText = password;
}

