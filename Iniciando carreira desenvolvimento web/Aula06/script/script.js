function salvarDados() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const data = {
        username: username,
        password: password
    };

    localStorage.setItem("userData", JSON.stringify(data));
    alert("Dados salvos com sucesso!");
}

function fazerLogin() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;

    const storedData = localStorage.getItem("userData");
    if (!storedData) {
        alert("Nenhum usuário cadastrado. Faça o cadastro primeiro.");
        return;
    }

    const userData = JSON.parse(storedData);
    if (loginUsername === userData.username && loginPassword === userData.password) {
        alert("Logou!");
    } else {
        alert("Dados de login incorretos. Tente novamente.");
    }
    console.log(loginUsername);
    console.log(loginPassword);
}