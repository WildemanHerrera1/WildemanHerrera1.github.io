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