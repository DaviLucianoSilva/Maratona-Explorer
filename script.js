function pink(){
  document.body.classList.remove("dark-pink")
  document.body.classList.remove("dark-blue")
  document.body.classList.add("pink")

}
function darkPink(){
  document.body.classList.remove("pink")
  document.body.classList.remove("dark-blue")
  document.body.classList.add("dark-pink")
}
function darkBlue(){
  document.body.classList.remove("pink")
  document.body.classList.remove("dark-pink")
  document.body.classList.add("dark-blue")

}
function blue(){
  document.body.classList.remove("pink")
  document.body.classList.remove("dark-pink")
  document.body.classList.remove("dark-blue")
}

function mudarTema(){
  document.getElementById("lista-botao").classList.toggle("esconder")
}
