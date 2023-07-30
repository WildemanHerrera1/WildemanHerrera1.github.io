// Carga el archivo data.json
function ejecutarBusqueda(documento, tiposDoc){
  fetch('valor.json')
  .then(response => response.json())
  .then(json => {
    // Obtener el ultimo digito del parametro
    const ultimoDigito = documento.slice(-1);// 2 digitos seria -2
    const ultimoDosDigito = documento.slice(-2);
    let dataCompleta = [];
    if(tiposDoc == "CC"){
      let fehcaRPN = rentaPersonaNatural(ultimoDosDigito, json["RENTA PERSONAS NATURALES"]);
      let fehcaAEX = rentaActivosExterior(json["ACTIVOS EN EL EXTERIOR - Declaración anual"]);
      dataCompleta = [
        {"RENTA PERSONAS NATURALES": fehcaRPN},
        {"ACTIVOS EN EL EXTERIOR - Declaración anual": fehcaAEX},
      ];
    }else{
      let fechasRGC = rentaGrandesContribuyentes(ultimoDigito, json["RENTA GRANDES CONTRIBUYENTES"]);
      let fechasRPJ = rentaPersonaJuridica(json["RENTA PERSONAS JURIDICAS"], ultimoDosDigito);
      let fehcaAEX = rentaActivosExterior(json["ACTIVOS EN EL EXTERIOR - Declaración anual"]);
      let fehcaRPN = rentaPersonaNatural(ultimoDosDigito, json["RENTA PERSONAS NATURALES"]);
      let fechaBimestre = ivaBimestral(json["IVA BIMESTRAL - Declaración y pago"], ultimoDigito);
      let fechaCuatrimestre = fechasIVACuatrimestral(json["IVA CUATRIMESTRAL - Declaración y pago"], ultimoDigito);
      let consumo = consumoDeclaracion(json["CONSUMO - Declaración y pago bimestral del impuesto nacional"]);
      let fechaRetencionFuente = obtenerFechasRetencion(json["RETENCIÓN EN LA FUENTE - Declaración mensual"], ultimoDigito);
      dataCompleta = [
        {"RENTA GRANDES CONTRIBUYENTES": fechasRGC},
        {"RENTA PERSONAS JURIDICAS": fechasRPJ},
        {"RENTA PERSONAS NATURALES": fehcaRPN},
        {"ACTIVOS EN EL EXTERIOR - Declaración anual": fehcaAEX},
        {"IVA BIMESTRAL - Declaración y pago": fechaBimestre},
        {"IVA CUATRIMESTRAL - Declaración y pago": fechaCuatrimestre},
        {"CONSUMO - Declaración y pago bimestral del impuesto nacional": consumo},
        {"RETENCIÓN EN LA FUENTE - Declaración mensual": fechaRetencionFuente},
      ];
    }
    const cuadros = document.querySelectorAll('.cuadro');
      for (let i = 0; i < dataCompleta.length; i++) {
        cuadros[i].innerHTML = generateContent(dataCompleta[i]);
      }
  })
  .catch(error => console.error(error));
}