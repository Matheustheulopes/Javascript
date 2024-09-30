function carregar(){
    var msg = window.document.getElementById('msg')
    var msg = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são horas ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src ='foto/pexels-torsten.jpg'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src ='foto/pexels.2.jpg'
    } else {
        // BOA NOITE!
    }   img.src ='foto/pexels3.jpg'
}
