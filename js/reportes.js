const repeticionesAsignaturas = {};






const cargarReportesTabla=()=>{
    const reportesInput=document.getElementById("tablaRecaudos");
    let datos = '';

    var totalPeriodo1 = 0;
    var totalPeriodo2 = 0;
    var MasMatriculada1 = 0;
    var MasMatriculada2 = 0;

    for ( const matricula of listaMatriculas){
        if(matricula.periodo_id == 1){
            totalPeriodo1 = totalPeriodo1 + matricula.precio;
            }
        else {
            totalPeriodo2 = totalPeriodo2 + matricula.precio;
}
    
    }



// Iteramos sobre cada matrícula
listaMatriculas.forEach(matricula => {
    // Verificamos si asignatura_id es un array
    if (Array.isArray(matricula.asignatura_id)) {
        matricula.asignatura_id.forEach(asignaturaId => {
            // Incrementamos el contador de la asignatura
            repeticionesAsignaturas[asignaturaId] = (repeticionesAsignaturas[asignaturaId] || 0) + 1;
        });
    } else {
        // Incrementamos el contador de la asignatura
        repeticionesAsignaturas[matricula.asignatura_id] = (repeticionesAsignaturas[matricula.asignatura_id] || 0) + 1;
    }
});

// Mostramos el objeto con la cantidad de veces que aparece cada asignatura
console.log(repeticionesAsignaturas);
let asignaturaMasRepetida = null;
let maxRepeticiones = 0;

for (let asignaturaId in repeticionesAsignaturas) {
    
    if (repeticionesAsignaturas[asignaturaId] > maxRepeticiones) {
        asignaturaMasRepetida = asignaturaId;
        maxRepeticiones = repeticionesAsignaturas[asignaturaId];
    }
    
}
    console.log(totalPeriodo1)
    console.log(totalPeriodo2)

        datos+=`<tr>

            <td>${1}</td>
            <td>${totalPeriodo1}</td>
            <td>${asignaturaMasRepetida}</td>
            


            </tr>`

        datos+=`<tr>

        <td>${2}</td>
        <td>${totalPeriodo2}</td>
        <td>${asignaturaMasRepetida}</td>

        </tr>`
    //}
    console.log(datos);

    reportesInput.innerHTML=datos;

}
