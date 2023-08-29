// Esperar que se cargue la pagina para iniciar los eventos
window.addEventListener('load', Init);

// Inicializador, agrega el evento a todos los dias calendario
function Init(){
    const diasCalendario = document.querySelectorAll('.cuadricula-celda');
    diasCalendario.forEach((dia) => {
        dia.addEventListener('click', ClickDiaCalendario);
    });
}

// Esperar el click del usuario
function ClickDiaCalendario(){
    const valorDias = this.querySelector('.celda-dias span').textContent;
    const valorDigitos = this.querySelector('.celda-digitos span').textContent;
    let valorTexoMes = this.parentElement.previousElementSibling.previousElementSibling.textContent;
    
    // numero positivo de maximo 2 digitos
    const isNumber = /^[0-9]{1,2}$/.test(valorDias);
    if ( ! isNumber ) {
        // console.log("ERROR: " + valorDias); // DEV
        return;
    }

    const fecha = new Date();

    let anno = fecha.getFullYear();
    
    const separarMesAnno = valorTexoMes.split(' ');
    const hayAnno = separarMesAnno.length > 1;
    if(hayAnno){
        valorTexoMes = separarMesAnno[0];
        anno = separarMesAnno[1];
    }
    
    const valorNumeroMes = convertirMesEnNumero(valorTexoMes);
    
    const diasDosDigitos = convertirNumeroDosDigitos(valorDias);

    const linkGooleCalendar = GetGoogleCalendarLink(diasDosDigitos, valorNumeroMes, valorDigitos, anno);

    window.open(linkGooleCalendar, '_blank');
}

function GetGoogleCalendarLink(dia, valorMes, digitos, anno = '2023'){
    /**
     * Generator link: https://www.labnol.org/calendar/?ref=facilitator.school
     */

    const templateLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${anno}${valorMes}${dia}T121500Z%2F${anno}${valorMes}${dia}T123000Z&details=%C2%A1Atenci%C3%B3n%21%20Fecha%20l%C3%ADmite%20de%20declaraci%C3%B3n%20cercana%20para%20d%C3%ADgito%20%28${digitos}%29.%0AAct%C3%BAa%20ahora%20y%20cumple%20con%20tu%20responsabilidad.%0A%0AAtt%3A%20https%3A%2F%2Fcalendariotributario.info&text=%C2%A1ATENCI%C3%93N%21%20Recordatorio%20tributario%20para%20d%C3%ADgito%20%28${digitos}%29.`
    
    return templateLink;
}

function convertirMesEnNumero(mes) {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    
    const indice = meses.indexOf(mes);
    
    let mesCalendar = indice + 1;
    
    mesCalendar = convertirNumeroDosDigitos(mesCalendar);
    
    return mesCalendar;
}

function convertirNumeroDosDigitos(numero){
    return numero.toString().length < 2 ? '0' + numero : numero;
}