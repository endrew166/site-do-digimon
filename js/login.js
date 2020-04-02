
document.getElementById("entrar").onclick = function () {
    var done = 0;
    var usuario = document.getElementsByName('usuario')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();
    if (usuario == "umbiscoito" && senha == "biscoito") {
      window.location = "../hmtl/paginaPrincipal.html";
      done = 1;
    }
    if (done == 0) { alert("Dados incorretos, tente novamente"); }
  }
  
  
  
  