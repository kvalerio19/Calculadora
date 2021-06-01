function borrar(){
    document.getElementById('formulario').reset();
}

function suma(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = a+b;

}

function resta(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = a-b;

}

function multiplica(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = a*b;

}

function divide(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerHTML = a/b;

}