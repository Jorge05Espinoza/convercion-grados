//Funcion Main
function convertirTemperatura() {
    //Recolectar datos desde el  html
    const grados = parseFloat(document.getElementById("grados").value);
    const unidad = document.getElementById("Opcion").value;

    //Declaracion de variables a utilizar 
    let resultado = 0;
    let centigrados=0;
    let fahrenheit=0;
    let kelvin=0;
    //Switch para Seleccionar opcion de grados a calcular
    switch(unidad) {
        case "elija":
                alert("Favor de seleccionar una de las opciones")
            break;
        case "centigrados":
            convertirCentigrados();
            break;
        case "fahrenheit":
            convertirFahrenheit()
            break;
        case "kelvin":
             convertirKelvin();
            break;
    }
    //Funcion para convertir de celsius a otros
    function convertirCentigrados(){
        kelvin =grados+273;
            fahrenheit = (grados * 1.8) + 32;
            document.getElementById("resultado").textContent = `El resultado en kelvin es: ${kelvin} y en fahrenheit es: ${fahrenheit}`;
            document.getElementById("grados").value="";
    }
    //Funcion para convertir de fahrenheit a otros
    function convertirFahrenheit(){
             centigrados = (grados - 32) * 5/9;
             kelvin =grados+273;
             document.getElementById("resultado").textContent = `El resultado en centigrados es: ${centigrados} y en kelvin es: ${kelvin}`;      
    }
    //Funcion para convertir de kelvin a otros
    function convertirKelvin(){
        centigrados = grados - 273.15;
        fahrenheit = (grados * 1.8) + 32;
        document.getElementById("resultado").textContent = `El resultado en centigrados es: ${centigrados} y en fahrenheit es: ${fahrenheit}`;
        document.getElementById("grados").value="";
    }

}
