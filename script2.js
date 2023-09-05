let num1 = 3
let num2 = 5
let operacao = ""

function resultado(){
  if(operacao == "+"){
    let resultado = somar(num1, num2)
    console.log(resultado)
  }else if(operacao == "-"){
    let resultado = subtrair(num1, num2)
    console.log(resultado)
  }else if(operacao == "*" || operacao == "x" || operacao == "."){
    let resultado = multiplicar(num1, num2)
    console.log(resultado)
  }else if(operacao == "/" || operacao == ":"){
    let resultado = dividir(num1, num2)
    console.log(resultado)
  }else{
    console.log("Insira uma operação válida")
  }
}
resultado()

function somar(){
  let soma = num1 + num2
  return somaa
}

function subtrair(){
  let subtrair = num1 - num2
  return subtrair
}

function multiplicar(){
  let multiplicar = num1 * num2
  return multiplicar
}

function dividir(){
  let dividir = num1 / num2
  return dividir
}