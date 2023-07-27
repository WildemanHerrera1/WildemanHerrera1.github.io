function buscarNumeroEnClaves(numero, fechas) {
    let meses = ['', 'agosto','septiembre','octubre']
    let cantidadMeses = -1;
    for (const fechasAux of fechas) {
      cantidadMeses++;
      for (const valorDondeBuscar in fechasAux) {
        if (valorDondeBuscar.includes(numero)) {
          return [fechasAux[valorDondeBuscar], meses[cantidadMeses]]; // Devolver el valor correspondiente a la clave encontrada
        }
      }
    }
    return null; // Retornar null si no se encuentra el número en las claves
  }

function buscarData(){
  let elemento = document.getElementById("numeroDocumento");
  let info = document.getElementById("mostrarData");
  if(info.style.display != 'block'){
    info.style.display = 'block';
  }
  let valorBuscado = elemento.value;
  if(valorBuscado != ''){
    ejecutarBusqueda(valorBuscado);
  }else{
    info.style.display = 'none';
  }  
}

function buscarDataAux(event){
  if(event.keyCode === 13){
    buscarData();
  }
}

function limiteCaracteres(){
  // Limitar cantidad de caracteres a 10
  const elementNumeroDocumento = document.getElementById("numeroDocumento");
  let limite = 10;
  let valor = elementNumeroDocumento.value;
  if (valor.length >= limite) {
    elementNumeroDocumento.value = valor.substring(0, limite);
  }
}

  // Función para generar el contenido en formato HTML
function generateContent(item) {
    let content = '<ul>';
    if (Array.isArray(item)) {
        item.forEach(data => {
            content += '<li>' + data + '</li>';
        });
    } else if (typeof item === 'object') {
        for (const key in item) {
            content += '<li class="datos-titulo">' + key + '</li>';
            if(key === "RENTA GRANDES CONTRIBUYENTES"){
              for (let i = 0; i < item[key].length; i++) {                
                content += '<li>' + item[key][i]['cuota'] + ' ' + item[key][i]['fechaClave'] + ' ' + item[key][i]['fechaValor'] + '</li>';
              }
            }else if(key === "RENTA PERSONAS JURIDICAS"){
              for (const keyRenta in item) {
                content += '<li>' + item[keyRenta]['cuota'] + ' ' + item[keyRenta]['fecha'] +'</li>';
              }
            }else if(key === "RENTA PERSONAS NATURALES"){
              for (const keyRenta in item) {
                content += '<li>' + item[keyRenta]['0'] + ' ' + item[keyRenta]['1'] +'</li>';
              }
            }else if(key === "ACTIVOS EN EL EXTERIOR - Declaración anual"){
              content += '<li>'+item[key]+'</li>';
            }else if(key === "IVA BIMESTRAL - Declaración y pago"){
              for (let i = 0; i < item[key].length; i++) {
                content += '<li>' + item[key][i]['bimestre'] + ' - Hasta ' + item[key][i]['fecha'] + '</li>';
              }
            }else if(key === "IVA CUATRIMESTRAL - Declaración y pago"){
              for (let i = 0; i < item[key].length; i++) {
                content += '<li>' + item[key][i]['cuatrimestre'] + ' - ' + item[key][i]['fecha'] + '</li>';
              }
            }else if(key === "CONSUMO - Declaración y pago bimestral del impuesto nacional"){
              content += '<li>'+item[key]+'</li>';
            }else if(key === "RETENCIÓN EN LA FUENTE - Declaración mensual"){
              for (let i = 0; i < item[key].length; i++) {
                content += '<li>' + item[key][i]['mes'] + ' - Hasta ' + item[key][i]['fecha'] + '</li>';
              }
            }
        }
    } else {
        content += '<li>' + item + '</li>';
    }
    content += '</ul>';
    return content;
}