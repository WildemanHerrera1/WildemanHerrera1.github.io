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