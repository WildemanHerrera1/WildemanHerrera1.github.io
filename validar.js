// Carga el archivo data.json
fetch('valor.json')
  .then(response => response.json())
  .then(json => {
    // Parámetro
    const parametro = "1001579794";
    // Obtener el ultimo digito del parametro
    const ultimoDigito = parametro.slice(-1);// 2 digitos seria -2
    const ultimoDosDigito = parametro.slice(-2);
    let fechasRGC = rentaGrandesContribuyentes(ultimoDigito, json["RENTA GRANDES CONTRIBUYENTES"]);
    // let fechasRPJ = rentaPersonaJuridica(); // aun me falta
    let fehcaRPN = rentaPersonaNatural(ultimoDosDigito, json["RENTA PERSONAS NATURALES"]);
    let fehcaAEX = rentaActivosExterior(json["ACTIVOS EN EL EXTERIOR - Declaración anual"]);

    
    console.table(fechasRGC);
    console.table(fehcaRPN);
    console.table(fehcaAEX);


    // const tabla = document.getElementById("tabla-fechas");
    // const tbody = tabla.getElementsByTagName("tbody")[0];

    // fechasEncontradas.forEach(fecha => {
    //   const row = document.createElement("tr");
    //   const cuotaCell = document.createElement("td");
    //   const fechaClaveCell = document.createElement("td");
    //   const fechaValorCell = document.createElement("td");

    //   cuotaCell.textContent = "Pago " + fecha.cuota;
    //   fechaValorCell.textContent = "Hasta el " + fecha.fechaValor;
    //   fechaClaveCell.textContent = " De " + fecha.fechaClave;

    //   row.appendChild(cuotaCell);
    //   row.appendChild(fechaValorCell);
    //   row.appendChild(fechaClaveCell);
    //   tbody.appendChild(row);
    // });
  })
  .catch(error => console.error(error));