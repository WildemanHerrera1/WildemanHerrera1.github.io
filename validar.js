// Carga el archivo data.json
function ejecutarBusqueda(parametro){
  fetch('valor.json')
  .then(response => response.json())
  .then(json => {
    // Obtener el ultimo digito del parametro
    const ultimoDigito = parametro.slice(-1);// 2 digitos seria -2
    const ultimoDosDigito = parametro.slice(-2);
    let fechasRGC = rentaGrandesContribuyentes(ultimoDigito, json["RENTA GRANDES CONTRIBUYENTES"]);
    let fechasRPJ = rentaPersonaJuridica(json["RENTA PERSONAS JURIDICAS"], ultimoDosDigito);
    let fehcaRPN = rentaPersonaNatural(ultimoDosDigito, json["RENTA PERSONAS NATURALES"]);
    let fehcaAEX = rentaActivosExterior(json["ACTIVOS EN EL EXTERIOR - Declaración anual"]);
    let fechaBimestre = ivaBimestral(json["IVA BIMESTRAL - Declaración y pago"], ultimoDigito);
    let fechaCuatrimestre = fechasIVACuatrimestral(json["IVA CUATRIMESTRAL - Declaración y pago"], ultimoDigito);
    let consumo = consumoDeclaracion(json["CONSUMO - Declaración y pago bimestral del impuesto nacional"]);
    let fechaRetencionFuente = obtenerFechasRetencion(json["RETENCIÓN EN LA FUENTE - Declaración mensual"], ultimoDigito);

    let dataCompleta = [
      {"RENTA GRANDES CONTRIBUYENTES": fechasRGC},
      {"RENTA PERSONAS JURIDICAS": fechasRPJ},
      {"RENTA PERSONAS NATURALES": fehcaRPN},
      {"ACTIVOS EN EL EXTERIOR - Declaración anual": fehcaAEX},
      {"IVA BIMESTRAL - Declaración y pago": fechaBimestre},
      {"IVA CUATRIMESTRAL - Declaración y pago": fechaCuatrimestre},
      {"CONSUMO - Declaración y pago bimestral del impuesto nacional": consumo},
      {"RETENCIÓN EN LA FUENTE - Declaración mensual": fechaRetencionFuente},
    ]

    return dataCompleta;
  })
  .catch(error => console.error(error));
}