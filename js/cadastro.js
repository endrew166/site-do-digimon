var db = openDatabase("Meu banco", "2.0", "Mybase", 4048);
db.transaction(function (criar) {
    criar.executeSql("CREATE TABLE users ( ID PRIMARY KEY, nome TEXT, senha TEXT, email TEXT)");
});



document.getElementById("enviar_cadastro").onclick = function () {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var email = document.getElementById('email').value;
    db.transaction(function (armazenar) {
        armazenar.executeSql("INSERT INTO users (nome,senha,email) VALUES(?,?,?)", [nome, senha, email]);
    });

}



