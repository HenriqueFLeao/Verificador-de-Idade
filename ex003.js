function Verificar() {
    var tAno = document.getElementById('txtAno')
    var nascimento = Number(tAno.value)
    var agora = new Date
    var ano = agora.getFullYear()
    var idade = ano - nascimento 
    var img = document.createElement('img') 
    img.setAttribute('class', 'img')
    // verifica se o campo de entrada não está vazio
    if (tAno.value.length == 0 || nascimento> ano ) {
        alert('[ERRO] verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByName('radsex')
        var genero = ''
        var div1 = document.querySelector('div#div1')
        var div2 = document.querySelector('div#div2')
        //remove todos os elementos filhos da div2
        while (div2.firstChild) {
            div2.removeChild(div2.firstChild);
        }

        if (fsex[0].checked) {
            genero ='Homem'
            if (idade > 0 && idade < 18 ) {
                img.setAttribute('src', './img/Homem-criança.jpg')
            }else if (idade >= 18 && idade<35) {
                img.setAttribute('src', './img/Homem-jovem.jpg')
            }else if (idade >= 35 && idade <60) {
                img.setAttribute('src', './img/Homem-adulto.jpg')
            }else if (idade >= 60) {
                img.setAttribute('src', './img/Homem-velho.jpg')
            }
    
        }else {
            genero = 'Mulher'
            if ( idade < 18 ) {
                img.setAttribute('src', './img/Mulher-criança.jpg')
            }else if (idade >= 18 && idade<35) {
                img.setAttribute('src', './img/Mulher-jovem.jpg')
            }else if (idade >= 35 && idade <60) {
                img.setAttribute('src', './img/Mulher-adulta.jpg')
            }else if (idade >= 60) {
                img.setAttribute('src', './img/Mulher-velha.jpg')
            }
        }
        div1.innerHTML = `Detectamos ${genero} com ${idade} anos`
        div2 = div2.appendChild(img)

    }
}