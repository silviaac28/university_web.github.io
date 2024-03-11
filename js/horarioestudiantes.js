let matriculasEstudiante=[];
const cargarEstudiantesR=()=>{
    const estudianteInput=document.getElementById("estudianteH");
    let datos = '';
    for ( const alumno of listaAlumnos){
        datos+=`<option value="${alumno.id}">${alumno.nombre} ${alumno.apellido}</option>` 
    }
    console.log(datos)

    estudianteInput.innerHTML=datos;
} 
const cargarMtriculasReporte=()=>{
    console.log("hola")
    let opciones="";
    const horariosRInput=document.getElementById("horariosR");

    const estudianteInput=document.getElementById("estudianteH");
for (const matriculas of listaMatriculas) {


    if (matriculas.estudiante_id == estudianteInput.value){
    
       
        matriculasEstudiante=matriculas.asignatura_id
    

}
console.log(matriculasEstudiante.length)
}
let i=0;
for (const matEst of matriculasEstudiante) {

for (const asignaturass of listaAsignaturas) {

    if (asignaturass.id == matriculasEstudiante[i]){
    opciones+=`
    <div>
    <h2>${asignaturass.codigo}</h2>
    <h2>${asignaturass.horario_clases[0].dia}</h2>
    <h2>${asignaturass.horario_clases[0].hora_inicio} - ${asignaturass.horario_clases[0].hora_fin} </h2>
    <h2>${asignaturass.horario_clases[1].dia}</h2>
    <h2>${asignaturass.horario_clases[1].hora_inicio} - ${asignaturass.horario_clases[1].hora_fin}</h2>
    </div>
    `


            console.log("so" + asignaturass.horario_clases[0].dia)
        console.log("so" + asignaturass.horario_clases[0].hora_inicio)
        
        console.log("so" + asignaturass.horario_clases[1].dia)
        console.log("so" + asignaturass.horario_clases[1].hora_inicio)
    }
 }
 i++
}horariosRInput.innerHTML=opciones
}