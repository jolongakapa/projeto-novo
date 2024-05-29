function somarNumeros(){
    
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultado = numero1 + numero2
    var teste = document.getElementById("resultado")
    teste.innerHTML=resultado
}

function subtrairNumeros(){
    
    var numero3 = parseInt(document.getElementById("num3").value);
    var numero4 = parseInt(document.getElementById("num4").value);
    var resultadoSubtrair = numero3 - numero4
    var teste = document.getElementById("resultadoSubtrair")
    teste.innerHTML=resultadoSubtrair
}

function multiplicarNumeros(){
    
    var numero5 = parseInt(document.getElementById("num5").value);
    var numero6 = parseInt(document.getElementById("num6").value);
    var resultadoMultiplicar = numero5 * numero6
    var teste = document.getElementById("resultadoMultiplicar")
    teste.innerHTML=resultadoMultiplicar
}

function dividirNumeros(){
    var numero7 = parseInt(document.getElementById("num7").value);
    var numero8 = parseInt(document.getElementById("num8").value);
    var resultadoDividir = numero7 / numero8
    var teste = document.getElementById("resultadoDividir")
    teste.innerHTML=resultadoDividir
}

function fareneithCelsius(){
    var numero9 = parseInt(document.getElementById("num9").value);
    var resultado = (numero9 - 32) * (5/9)
    var teste = document.getElementById("resultadoFareneith")
    teste.innerHTML=resultado
}

function celsiusFareneith(){
    var numero10 = parseInt(document.getElementById("num10").value);
    var resultado = numero10 * 1.8 + 32
    var teste = document.getElementById("resultadoCelsius")
    teste.innerHTML=resultado
}

function retangulo(){
    
    var numero11 = parseInt(document.getElementById("num11").value);
    var numero12 = parseInt(document.getElementById("num12").value);
    var resultado = numero11 * numero12
    var teste = document.getElementById("resultadoretangulo")
    teste.innerHTML=resultado
}

function raio(){
    var numero13 = parseInt(document.getElementById("num13").value);
    var resultado = Math.pow(numero13,2) * 3.14
    var teste = document.getElementById("resultadoRaio")
    teste.innerHTML=resultado
}