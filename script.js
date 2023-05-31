const textoBase = document.querySelector(".texto-base");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".btn-copiar");
copia.style.display = "none"


function validarTexto()
{
    let textoEscrito = document.querySelector(".texto-base").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) 
    {
        alert("Solo se permiten letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar()
{
    if(!validarTexto()) 
    {
        const textoEncriptado = encriptar(textoBase.value)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textoBase.value = "";
        copia.style.display = "block"
    
    }
}

function encriptar(strEncriptado)
{
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    strEncriptado = strEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(strEncriptado.includes(matrizCodigo[i][0])){
            strEncriptado = strEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return strEncriptado
}



function btnDesencriptar()
{
    const textoEncriptado = desencriptar(textoBase.value)
    mensaje.value = textoEncriptado
    textoBase.value = "";
    
}


function desencriptar(strDesencriptado)
{
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    strDesencriptado = strDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++)
    {
        if(strDesencriptado.includes(matrizCodigo[i][1])){
            strDesencriptado = strDesencriptado.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return strDesencriptado
}


function copiar()
{
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto copiado")
}


