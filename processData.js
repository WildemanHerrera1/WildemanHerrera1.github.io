function rentaGrandesContribuyentes(digito, datos){
    // Buscar el iltimo dígito en el JSON
    const fechasEncontradas = [];
    for (const key in datos) {
      const fechas = datos[key]["fechas"];
      const fechasHasta = datos[key]["hasta"];
      if (digito in fechas) {
        const fechaEncontrada = {
          cuota: key,
          fechaClave: fechasHasta,
          fechaValor: fechas[digito]
        };
        fechasEncontradas.push(fechaEncontrada);
      }
    }
    return fechasEncontradas;
}

function rentaPersonaNatural(digito, datos) {
  // Buscar el iltimo dígito en el JSON
  let dia = []; let mes = [];
  let fechas = [];
  for (const key in datos) {
    let meses = datos[key]["meses"];
    let cantidadMeses = Object.keys(meses).length;
    for (let m = 1; m <= cantidadMeses; m++) {
      // agosto = 1, septiembre = 2 y octubre 3
      fechas[m] = meses[m]['fechas'];
    }

    let valor = [dia, mes] = buscarNumeroEnClaves(digito, fechas);
    return valor;
  }
}

function rentaActivosExterior(datos){
  return datos['valor'];
}

function consumoDeclaracion(datos){
  return datos['valor'];
}


function rentaPersonaJuridica(data, digitos){
  // Recorrer el JSON para encontrar la fecha de declaración correspondiente
  for (const mes in data["Declaración y pago"]) {
    const cuota = data["Declaración y pago"][mes]["cuota"];
    const fechas = data["Declaración y pago"][mes]["fechas"];
    
    for (const dia in fechas) {
      const ultimoDigitoFecha = fechas[dia].slice(-2);
      
      if (digitos === dia) {
        let valor = mes + cuota;
        return {
          mes: mes,
          cuota: cuota,
          fecha: `${ultimoDigitoFecha}-${mes}`
        };
      }
    }
  }

  // Si no se encuentra ninguna fecha correspondiente, retorna null o un mensaje adecuado
  return null;
}

function ivaBimestral(json, ultimoDigito){
  const fechasIVA = [];

  for (const bimestre in json) {
    const fechas = json[bimestre]["fechas"];

    for (const dia in fechas) {
      const ultimoDigitoFecha = fechas[dia].toString();

      if (ultimoDigito === dia) {
        fechasIVA.push({
          bimestre: bimestre,
          fecha: `${ultimoDigitoFecha}-${json[bimestre]["hasta"]}`
        });
      }
    }
  }

  return fechasIVA;
}

function fechasIVACuatrimestral(json, ultimoDigito) {
  const fechasIVA = [];

  for (const cuatrimestre in json) {
    const fechas = json[cuatrimestre]["fechas"];

    for (const dia in fechas) {
      const ultimoDigitoFecha = fechas[dia].toString();

      if (ultimoDigito === dia) {
        fechasIVA.push({
          cuatrimestre: cuatrimestre,
          fecha: `${ultimoDigitoFecha}-${json[cuatrimestre]["hasta"]}`
        });
      }
    }
  }

  return fechasIVA;
}

function obtenerFechasRetencion(json, ultimoDigito) {
  const fechasRetencion = [];

  for (const mes in json) {
    const fechas = json[mes]["fechas"];

    for (const dia in fechas) {
      const ultimoDigitoFecha = fechas[dia].toString();

      if (ultimoDigito === dia) {
        fechasRetencion.push({
          mes: mes,
          hasta: json[mes]["hasta"],
          fecha: `${ultimoDigitoFecha}-${json[mes]["hasta"]}`
        });
      }
    }
  }

  return fechasRetencion;
}