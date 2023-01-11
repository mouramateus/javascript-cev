function carregar() {
  var titulo = window.document.getElementById('titulo')
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  // var hora = 
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12) {
    titulo.innerHTML = `Bom Dia!`
    img.src = 'fotodia.png'
    document.body.style.backgroundColor = '#FFAF00'
  } else if (hora >= 12 && hora < 18) {
    titulo.innerHTML = `Boa tarde!`
    img.src = 'fototarde.png'
    document.body.style.backgroundColor = '#F25C05'
  } else {
    titulo.innerHTML = `Boa noite!`
    img.src = 'fotonoite.png'
    document.body.style.backgroundColor = '#392140'
  }
}