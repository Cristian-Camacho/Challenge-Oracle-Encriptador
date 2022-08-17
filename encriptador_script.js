function Encriptar() 
{
    if(textoIngresado.value != "")
    {
        var text = textoIngresado.value;
        var textoFinal = "";

        for (var index = 0; index < text.length; index++) 
        {
            switch (text[index]) 
            {
                case "a":
                    textoFinal += "ai";
                    break;
                case "e":
                    textoFinal += "enter";
                    break;
                
                case "i":
                    textoFinal += "imes";
                    break;
                
                case "o":
                    textoFinal += "ober";
                    break;
            
                case "u":
                    textoFinal += "ufat";
                    break;
                
                default:
                    textoFinal += text[index];
                    break;
            }
            
        }

        CargarTexto(textoFinal);
    }
}

function Desencriptar() 
{
    if(textoIngresado.value != "")
    {
        var text = textoIngresado.value;
        var textoFinal = "";

        for (var index = 0; index < text.length; index++) 
        {
            switch (text[index]) 
            {
                case "a":
                    textoFinal += text[index];   
                    if(text[index+1] == "i")
                        index++;
                    break;
                case "e":
                    textoFinal += text[index];   
                    if(text[index+1] == "n" && text[index+2] == "t" && text[index+3] == "e" && text[index+4] == "r")
                        index += 4;
                    break;
                
                case "i":
                    textoFinal += text[index];   
                    if(text[index+1] == "m" && text[index+2] == "e" && text[index+3] == "s" )
                        index += 3;
                    break;
                
                case "o":
                    textoFinal += text[index];   
                    if(text[index+1] == "b" && text[index+2] == "e" && text[index+3] == "r")
                        index += 3;
                    break;
            
                case "u":
                    textoFinal += text[index];   
                    if(text[index+1] == "f" && text[index+2] == "a" && text[index+3] == "t")
                        index += 3;
                    break;
                default:
                    textoFinal += text[index];
                    break;
            }          
        }

        CargarTexto(textoFinal);
    }
}

function CargarTexto(text)
{
    textoResultante.value = text;
    
    contenedorConResultado.style.display = "block";
    contenedorSinResultado.style.display = "none";
}

function CopiarTexto()
{
    textoResultante.select();
    document.execCommand('copy');
}

function RevisarTextoEspecial()
{
    var tempText = textoIngresado.value.replace(/[^0-9A-Za-z ]+/g, '');
    textoIngresado.value = tempText;
}

function SeleccionarTextoIngresado()
{
    textoIngresado.select();
}

var contenedorConResultado = document.getElementById("textoresultado");
var contenedorSinResultado = document.querySelector(".sinmensaje");
var textoResultante = document.querySelector(".mostrarresultado");
var textoIngresado = document.getElementById("textArea");
var botonEncriptar = document.getElementById("encriptar");
var botonDesencriptar = document.getElementById("desencriptar");
var botonCopiar = document.getElementById("copiar");


contenedorConResultado.style.display = "none";
textoIngresado.oninput = RevisarTextoEspecial;
textoIngresado.onfocus = SeleccionarTextoIngresado;
botonEncriptar.onclick = Encriptar;
botonDesencriptar.onclick = Desencriptar;
botonCopiar.onclick = CopiarTexto;

